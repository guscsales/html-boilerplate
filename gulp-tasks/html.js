var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

module.exports = function(){
    return this.gulp.src('./dist/**/*.html')
                    .pipe(htmlmin({collapseWhitespace: true}))
                    .pipe(this.gulp.dest('./dist'));

}

