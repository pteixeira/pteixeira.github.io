'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';

gulp.task('styles', () => {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});

// watch task
gulp.task('default', () => {
  gulp.watch('sass/**/*.scss', ['styles']);
  })
