var gulp = require('gulp');
var sass = require('gulp-sass');

module.exports = function(){
    return this.gulp.src('assets/scss/**/*.scss')
                    .pipe(sass().on('error', sass.logError))
                    .pipe(this.gulp.dest('./assets/css'));

}

