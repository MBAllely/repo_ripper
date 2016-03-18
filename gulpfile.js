var gulp = require('gulp');
var browserfiy = require('browserfiy');
var source = require('vinyl-source-stream');

gulp.task('jsBrowserify', function() {
  return browserfiy({ entries: ['./js/browser.js' ]})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});
