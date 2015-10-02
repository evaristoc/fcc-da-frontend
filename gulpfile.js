var bower = require('gulp-bower'),
    concat = require('gulp-concat'),
    gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    path = require('path'),
    rimraf = require('gulp-rimraf');

var paths = {
  scripts: ['server/**/*.js'],
  staticFiles: [
     'public/**/*.*'
  ]
};

gulp.task('dev-server', function() {
  nodemon({
      script: './bin/www',
      env: {
        'NODE_ENV': 'development'
      }
    })
    .on('restart');
});

gulp.task('del:scripts', function() {
  return gulp.src('./public/js/index.js', { read: false }) // much faster 
    .pipe(rimraf());
});

gulp.task('scripts', function() {
  gulp.src(paths.scripts)
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./public/scripts'));
});

gulp.task('watch', function() {
  gulp.watch([paths.scripts], ['del:scripts', 'scripts']);
});


gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('public/lib/'));
});

gulp.task('dir', function() {
 return gulp.src(['server/**']).pipe(gulp.dest('public'));
});

gulp.task('build', ['bower', 'del:scripts', 'scripts', 'dir', 'dev-server']);
gulp.task('heroku:build', ['bower', 'del:scripts', 'scripts', 'dir']);
gulp.task('default', ['build', 'watch']);
gulp.task('heroku:production', ['heroku:build']);