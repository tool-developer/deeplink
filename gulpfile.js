const gulp = require('gulp');
const connect = require('gulp-connect')

//
gulp.task('connect', function() {
  connect.server({
    root:['./example','./'],
    livereload: true,
    port:4000
  });
});

gulp.task('html',()=>{

  return gulp.src('./example/*.html')
    //.pipe(gulp.dest('./example'))
    .pipe(connect.reload())
    //.on('finish',()=>{done()})
})

gulp.task('dist-js',()=>{

  return gulp.src(['./dist/*.js'])
    //.pipe(gulp.dest('./dist'))
    .pipe(connect.reload())
    //.on('finish',()=>{done()})
})
gulp.task('esm-js',()=>{

  return gulp.src(['./esm/*.js'])
    //.pipe(gulp.dest('./esm'))
    .pipe(connect.reload())
    //.on('finish',()=>{done()})
})

gulp.task('watch',()=>{
  
  gulp.watch('./example/*.html',gulp.series('html'))
  gulp.watch('./dist/*.js',gulp.series('dist-js'))
  gulp.watch('./esm/*.js',gulp.series('esm-js'))
})

gulp.task('dev',gulp.series('connect','html','dist-js','esm-js','watch'))
gulp.task('build',gulp.series('connect','html','dist-js','esm-js'))
gulp.task('default',gulp.series('build'))