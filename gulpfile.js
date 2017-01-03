'use strict';

var gulp = require('gulp');
// var less = require('gulp-less');

gulp.task('copy', function() {
  // 将你的默认的任务代码放在这
  gulp.src('index.js')
   	.pipe(gulp.dest('dist/'));
});

gulp.task('dist',function(){
	gulp.watch('index.js',['copy']);
});

// gulp.task('lessDist',function(){
// 	gulp.watch('styles/a.less',['less']);
// });

// gulp.task('less',function(){
// 	 return gulp.src('styles/a.less')
//     .pipe(less())
//     .pipe(gulp.dest('dist/css/'));
// });