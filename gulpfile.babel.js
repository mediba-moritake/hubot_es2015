import gulp from 'gulp'
import util from 'gulp-util'
import babel from 'gulp-babel'

gulp.task('compile-js', () => {
  gulp.src("./scripts/src/**/*.{js,jsx}")
    .pipe(babel())
    .on('error', (err) => {
      util.log(
        util.colors.red('Error'),
        `${err.message}\n${err.codeFrame}`
      );
      gulp.emit('end');
    })
    .pipe(gulp.dest("scripts/dist/"));
});

gulp.task('watch', () => {
  gulp.watch(['./scripts/src/**/*'], ['compile-js']);
});

gulp.task('default', ['watch', 'compile-js']);
