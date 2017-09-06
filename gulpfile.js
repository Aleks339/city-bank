var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
	gulp.src('./sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function(){
	gulp.watch('.sass/*.scss', ['sass']);
});

gulp.task('browserSync', function() {
     browserSync.init({
      server: {
           baseDir: ''
      },
    })
})

gulp.task('dev', ['browserSync'], function(){
    gulp.watch('./**/*.html', browserSync.reload);
    gulp.watch('./**/*.php', browserSync.reload);
    gulp.watch('css/**/*.css', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
    gulp.watch('sass/*.scss', ['sass']);
})
