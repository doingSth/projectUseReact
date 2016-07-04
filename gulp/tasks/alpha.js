var gulp = require('gulp');
var shell = require('gulp-shell');
var gulpUtil = require('gulp-util');
var ftp = require('gulp-ftp');

gulp.task('alpha', ['build:alpha'], function() {
  var pkg = require('../../package.json');
  return gulp.src(['./dist/' + '**/*', '!' + './dist/' + 'index.html']).pipe(ftp({
    host: '',
    port: '',
    user: '',
    pass: '',
    remotePath: 'biz-static/es/' + pkg.name
  })).pipe(gulpUtil.noop());
});

// todo: error handling
gulp.task('build:alpha', shell.task([
  'npm run build'
]));
