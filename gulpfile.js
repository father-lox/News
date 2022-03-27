import gulp from 'gulp';
import del from 'del';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import fileinclude from 'gulp-file-include';
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

const fileProcessing = gulp.parallel(compileHtml, compileSass);
const devActions = gulp.series(reset, fileProcessing, watching);

gulp.task('default', devActions);