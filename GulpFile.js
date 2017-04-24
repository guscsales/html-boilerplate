'use strict';

var gulp = require('gulp');
var requireDir = require('require-dir');

require('gulp-task-loader')();

gulp.task('sass:watch', function () {
    gulp.watch('assets/scss/**/*.scss', ['sass']);    
});

gulp.task('build:prod:clean', ['clean']);
gulp.task('build:prod:copy', ['copy']);
gulp.task('build:prod:compress', ['styles', 'scripts', 'html', 'images'], function(){
    console.log('--------------------');
    console.log('BUILD COMPLETED');
    console.log('--------------------');
});