var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');

module.exports = function(){
    return pump([
               this.gulp.src('./dist/assets/**/*.js'),
               uglify(),
               this.gulp.dest('./dist/assets/')
           ]);

}

