var gulp = require('gulp');
var shell = require('gulp-shell');
var gulpUtil = require('gulp-util');
var ftp = require('gulp-ftp');

gulp.task('beta', ['build:product'], function() {
  var pkg = require('../../package.json');
  return gulp.src(['./dist/' + '**/*', '!' + './dist/' + 'index.html']).pipe(ftp({
    host: '',
    port: '',
    user: '',
    pass: '',
    remotePath: 'es/' + pkg.name + '/' + pkg.version
  })).pipe(gulpUtil.noop());
});

// todo: error handling
gulp.task('build:product', shell.task([
  'git pull origin master && npm run product && npm version patch && git push origin master'
]));

gulp.task('beta-assets', [], function(){
  return gulp.src(['./assets/icomoon/fonts/' + '**/*']).pipe(ftp({
    host: '10.1.131.29',
    port: 21,
    user: 'ba',
    pass: 'eNRicXp3i2M6EAQYBFrQfND7G',
    remotePath: 'es/ehr/fonts/' +"0.0.1"
  })).pipe(gulpUtil.noop());
});