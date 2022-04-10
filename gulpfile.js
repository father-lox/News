import gulp from 'gulp';
import del from 'del';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import fileinclude from 'gulp-file-include';
import fs from 'fs';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';
import { path } from './gulp/config/path.js';

const sass = gulpSass(dartSass);

function reset() {
    return del(path.clear);
}

function watching() {
    gulp.watch(path.watch.styles, compileSass);
    gulp.watch(path.watch.htmlFiles, compileHtml);
}

function compileSass() {
    return gulp.src(path.source.styles, {sourcemaps: true})
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest(path.build.styles))
}

function compileHtml() {
    return gulp.src(path.source.htmlFiles)
        .pipe(fileinclude())
        .pipe(gulp.dest(path.build.htmlFiles))
}

function convertTtfToWoff() {
    return gulp.src(`${path.source.fonts}/*/*.ttf`)
        .pipe(ttf2woff())
        .pipe(gulp.dest(path.build.fonts))
}

function convertOtfToWoff2() {
    return gulp.src(`${path.source.fonts}/*/*.ttf`)
        .pipe(ttf2woff2())
        .pipe(gulp.dest(path.build.fonts));
}

function fontsToPub() {
    return gulp.src(`${path.source.fonts}/**/*`)
        .pipe(gulp.dest(path.build.fontsPub));
}

const fontsConverter = gulp.series(convertTtfToWoff, convertOtfToWoff2, fontsToPub);
const fileProcessing = gulp.parallel(fontsConverter, compileHtml, compileSass);
const devActions = gulp.series(reset, fileProcessing, watching);

gulp.task('default', devActions);