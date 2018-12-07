const gulp = require('gulp');
const sass = require('gulp-sass');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const util = require('gulp-util');

const {
  reload
} = browserSync;
const config = require('./config/config');

gulp.task('sass', () => {
  gulp.src(['./public/sass/*.sass',
      '!./public/sass/{**/\_*,**/\_*/**}'
    ])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', function (err) {
      util.log(err);
    }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('./public/css'))
    .pipe(reload({
      stream: true
    }));

});

gulp.task('watch', () => {
  gulp.watch('./public/sass/*.sass', ['sass']);
});

gulp.task('browser-sync', ['nodemon'], () => {
  browserSync.init(null, {
    proxy: `http://localhost:${config.server.port}`,
    files: ['public/**/*.*', '**.js'],
    browser: 'google chrome',
    port: 7000,
  });
});

gulp.task('nodemon', cb => nodemon({
    exec: 'node --inspect',
    script: 'app.js',
    ext: 'js pug sass',
    env: {
      NODE_ENV: 'development',
      DEBUG: 'myapp:*'
    },
  })
  .once('start', cb)
  .on('restart', () => {
    setTimeout(() => {
      browserSync.reload({
        stream: false
      });
    }, 1000);
  }));

gulp.task('default', [
  'sass',
  'nodemon',
  'watch',
  'browser-sync',
]);
