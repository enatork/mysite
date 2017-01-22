var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');
var htmlReplace = require('gulp-html-replace');

gulp.task('js',['templateCache'], function(){
	gulp.src(['app/*.js', 'app/templates/*.js','app/**/*.js'])
		.pipe(concat('app.js'))
		.pipe(gulp.dest('dist'));
});
gulp.task('moveIndex', function(){
	gulp.src('app/index.html')
		.pipe(gulp.dest('dist'));
});
gulp.task('moveBowerComponents', function(){
	gulp.src('bower_components/**/*')
		.pipe(gulp.dest('dist/bower_components'));
});
gulp.task('moveTemplates', function(){
	gulp.src('app/**/*.html')
		.pipe(gulp.dest('dist'));
});
gulp.task('templateCache', function(){
	var timeStamp = new Date().getTime();
	return gulp.src(['app/*.html','app/**/*.html'])
		.pipe(templateCache({module: 'app'}))
		.pipe(gulp.dest('app/templates'));
});
gulp.task('moveOtherResources', function(){
	gulp.src('js/*.js')
		.pipe(gulp.dest('dist/js'));
});
gulp.task('css', function(){
	gulp.src('css/*.css')
		.pipe(gulp.dest('dist/css'));
});
gulp.task('images', function(){
	gulp.src('img/*')
		.pipe(gulp.dest('dist/img'));
});

gulp.task('build', ['js', 'moveIndex', 'moveBowerComponents', 'moveOtherResources', 'css', 'images']);