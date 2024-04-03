'use strict';

const gulp = require('gulp');
const less = require('gulp-less');

function lessTask() {
    return gulp.src('css/styles.less')
    //return gulp.src('css/styles.less')
        .pipe(less())
        .pipe(gulp.dest('dist'));
}

function watchLess() {
    gulp.watch('css/*.less', lessTask);
}

exports.less = lessTask;
exports.watch = watchLess;
