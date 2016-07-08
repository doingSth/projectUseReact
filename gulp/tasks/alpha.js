var gulp = require('gulp');
var shell = require('gulp-shell');
var gulpUtil = require('gulp-util');
var ftp = require('gulp-ftp');

gulp.task('alpha', [''], function() {
  console.log("alpha");
  //var pkg = require('../../package.json');
  return gulp.src(['./dev/src/pages/verify/js' + '**/*']).pipe(ftp({
    host: 'f2e.dp',
    port: 21,
    user: 'e2f',
    pass: '654321',
    remotePath: 'biz-static/es/' + "yqjs"
  })).pipe(gulpUtil.noop());
});

// todo: error handling
gulp.task('build:alpha', shell.task([
  'npm run build'
]));
