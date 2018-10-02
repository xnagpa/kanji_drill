'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const del = require('del');
const pug = require('gulp-pug');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('styles', function(){
  return gulp.src('frontend/styles/main.styl', { base: 'frontend' }  )
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
    .pipe(stylus())
    .pipe(gulpIf(isDevelopment, sourcemaps.write('.')))
    .pipe(gulp.dest('public'))
    .pipe(sourcemaps.init());
});

gulp.task('clean', function(){
  return del('public ');
});

gulp.task('assets', function(){
  return gulp.src('frontend/assets/img/**', { base: 'frontend' }  )
  .pipe(gulp.dest('public'))
});

gulp.task('babel', function(){
  return gulp.src('frontend/javascripts/**', { base: 'frontend' }  )
  .pipe(babel({ presets: ['@babel/env'] }))
  .pipe(concat('all.js'))
  .pipe(gulp.dest('public/javascripts'))
});


gulp.task('pug', function(){
  return gulp.src('frontend/**/*.pug'  )
  .pipe(pug( { pretty: true } ))
  .pipe(gulp.dest('public'))
});



gulp.task('build',
  gulp.series('clean',
    gulp.parallel('assets', 'pug', 'babel', 'styles')
  ));
