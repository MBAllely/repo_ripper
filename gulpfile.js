var gulp = require('gulp');
var browserfiy = require('browserfiy');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');

gulp.task('jsBrowserify', function() {
  return browserfiy({ entries: ['./js/browser.js' ]})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('concatInterface', function() {
  return gulp.src(['./js/browser.js', './js/github-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});
