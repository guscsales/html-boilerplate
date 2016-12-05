'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var pump = require('pump');
var clean = require('gulp-clean');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
  return gulp.src('./assets/css/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/css/scss/**/*.scss', ['sass']);
});

gulp.task('clean', function(cb){
    //  Clear publish folder
    gulp.src('../publish/', {read: false})
        .pipe(clean({force: true}));

    cb();
});

gulp.task('copy', function(cb){
    //  Copy Files
    gulp
      .src(['./**/*', '!**/scss/', '!**/scss/**', '!node_modules/', '!node_modules/**', '!GulpFile.js', '.htaccess'])
      .pipe(gulp.dest('../publish/'));

    cb();
});

gulp.task('compress', function(cb){
    //  Compress CSS
    gulp.src('../publish/assets/**/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('../publish/assets'));

    //  Compress javascript
    pump([
        gulp.src('../publish/assets/**/*.js'),
        uglify(),
        gulp.dest('../publish/assets/')
    ], cb);

    //  Compress HTML
    gulp.src('../publish/**/*.php')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('../publish'));

    //  Compress images  
    gulp.src('../publish/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('../publish/assets/images'));
});
