import gulp from 'gulp';
import del from 'del';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';
import ts from 'gulp-typescript';
import { path } from './gulp/config/path.js';

const sass = gulpSass(dartSass);
const tsProject = ts.createProject('tsconfig.json');

function reset() {
    return del(path.clear);
}

function watching() {
    gulp.watch(path.watch.styles, compileSass);
    gulp.watch(path.watch.typescript, compileTypeScript);
}

function compileSass() {
    return gulp.src(path.source.styles, {sourcemaps: true})
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest(path.build.styles))
}

function compileTypeScript() {
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest(path.build.typescript));
}

function moveTtf() {
    return gulp.src(`${path.source.fonts}/*/*.ttf`)
        .pipe(gulp.dest(path.build.fonts))
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

function moveImages() {
    return gulp.src(`${path.source.images}`)
        .pipe(gulp.dest(path.build.images))
}


const fontsConverter = gulp.series(moveTtf, convertTtfToWoff, convertOtfToWoff2);
const fileProcessing = gulp.parallel(compileTypeScript, compileSass, moveImages);
const devActions = gulp.series(reset, fileProcessing, fontsConverter, watching);

gulp.task('default', devActions);