var gulp = require('gulp')
var uglify = require('gulp-uglify')

gulp.task('default', function() {
  console.log('gulp default task.')
})

gulp.task('compressjs', function() {
  gulp.src('public/bundle.js')
  .pipe(uglify())
  .pipe(gulp.dest('public'))
})
