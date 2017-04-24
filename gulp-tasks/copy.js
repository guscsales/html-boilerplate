var gulp = require('gulp');
var sass = require('gulp-sass');

module.exports = function(){
    return this.gulp.src([
                    './**/*', '!**/scss/', 
                    '!**/scss/**', 
                    '!node_modules/', 
                    '!node_modules/**', 
                    '!dist/', 
                    '!dist/**', 
                    '!gulp-tasks/', 
                    '!gulp-tasks/**', 
                    '!GulpFile.js', 
                    '!server.js',
                    '!README.md', 
                    '.htaccess'
                ])
                .pipe(this.gulp.dest('./dist/'));

}

