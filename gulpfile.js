const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const sassPaths = [];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe(plugins.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', plugins.sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('default', gulp.series('sass', function() {
  gulp.watch(['scss/**/*.scss'], gulp.series('sass'));
}));
