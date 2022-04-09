import gulp from 'gulp';
import del from 'del';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import fileinclude from 'gulp-file-include';
import fs from 'fs';
import gulpFonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';
import { path } from './gulp/config/path.js';

const sass = gulpSass(dartSass);

//Tasks
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

function convertOtfToTtf() {
    return gulp.src(`${path.source.fonts}/*.otf`)
        .pipe(gulpFonter({
            formats: ['ttf']
        }))
        .pipe(gulp.dest(path.build.fonts));
}

function convertTtfToWoff() {
    return gulp.src(`${path.source.fonts}/*.ttf`)
        .pipe(gulpFonter({
            formats: ['woff']
        }))
        .pipe(gulp.dest(`${path.build.fonts}/*/`))
}

function convertOtfToWoff2() {
    return gulp.src(`${path.source.fonts}/*.ttf`)
        .pipe(ttf2woff2())
        .pipe(gulp.dest(path.build.fonts));
}

const fontsConverter = gulp.series(convertOtfToTtf, convertTtfToWoff, convertOtfToWoff2);
const fileProcessing = gulp.parallel(fontsConverter, compileHtml, compileSass);
const devActions = gulp.series(reset, fileProcessing, watching);

gulp.task('default', devActions);