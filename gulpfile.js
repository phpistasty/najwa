var gulp = require('gulp'),
less = require('gulp-less'),
uglify = require('gulp-uglify'),
plumber = require('gulp-plumber'),
concat = require('gulp-concat'),
path = require('path');

// gulp.task('scripts', function(){
// 	gulp.src(['lib/jquery/jquery.js', 'lib/bootstrap3.3.2/js/bootstrap.min.js', 'js/*.js'])
// 	.pipe(plumber())
// 	.pipe(uglify())
// 	.pipe(concat('main.js'))
// 	.pipe(gulp.dest('../public/js'));
// });

gulp.task('less', function() {
	gulp.src('style/import.less')
	.pipe(plumber())
	.pipe(less())
	.pipe(gulp.dest('style'));
});

gulp.task('watch', ['less'], function(){
	gulp.watch('style/**/*.less', ['less']);
});

gulp.task('default', ['watch']);