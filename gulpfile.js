const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
/*
    ---Functions
    gulp.task - Define Task
    gulp.src - Point to files to use
    gulp.dest - Point to files output
    gulp.watch - Watch files changes
*/

//Log Message
gulp.task('message',function(){
    return console.log("Gulp is Running");
});

//Copy HTML Files
gulp.task('copyHtml',function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

//Optimize Images
gulp.task('imageMin',function(){
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// Minify JS File
gulp.task('minify',function(){
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

//Compile Sass
gulp.task('sass',function(){
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('dist/css'));
});

//Concat JS Files
gulp.task('scripts',function(){
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

//Run All Task
gulp.task('default',['copyHtml','imageMin','sass','scripts']);

//Watch Changes
gulp.task('watch',function(){
    gulp.watch('src/js/*.js',['scripts']);
    gulp.watch('src/images/*',['imageMin']);
    gulp.watch('src/sass/*.scss',['sass']);
    gulp.watch('src/*.html',['copyHtml']);
});
