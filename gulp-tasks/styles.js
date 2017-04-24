var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

module.exports = function(){
    return this.gulp.src('./dist/assets/**/*.css')
                    .pipe(cleanCSS({compatibility: 'ie8'}))
                    .pipe(this.gulp.dest('./dist/assets'));

}

