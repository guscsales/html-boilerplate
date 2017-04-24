var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

module.exports = function(){
    return this.gulp.src('./dist/assets/images/*')
                    .pipe(imagemin())
                    .pipe(this.gulp.dest('./dist/assets/images'));
}
