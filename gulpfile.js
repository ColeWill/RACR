var gulp = require('gulp');
var sass = require('gulp-sass');  
var cleanCSS = require('gulp-clean-css');
var uglify =require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');




///  'I AM THE DEFAULT TASK' /////////////
gulp.task('default', function(){
	console.log('im the default task I am watching you...');
	//watch this folder and command to RUN 'styles' TASK

	gulp.watch('src/sass/**/*.scss', ['styles']);
	gulp.watch('src/**/*.js', ['Uglify_scripts']);
	gulp.watch('src/**/*.html',['minifyHTML']);
});

/// CONVERT SASS TO CSS and MINIFY ////////////// gulpin!
gulp.task('styles', function(){
	gulp.src('src/sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(cleanCSS())
	.pipe(gulp.dest('./public/css/'));
});

//////////   minify html ////  gulpin! from index and templates!
gulp.task('minifyHTML', function() {
	return gulp.src('src/**/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('./public/'));
  	
});

////minify js
gulp.task('Uglify_scripts',function(){
	gulp.src('src/**/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('./public/'));
	
});

