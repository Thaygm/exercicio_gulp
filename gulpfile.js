const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imageMIN = require("gulp-imagemin");

function minifyImage() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));

}

function minifyJS() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

function compilacaoSASS() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sass( {
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./build/styles'));
}

function funcaoPadrao(callback) {
    console.log("Executando via Gulp");
    callback();
}

exports.default = funcaoPadrao;
exports.sass = compilacaoSASS;
exports.watch = function() {
    gulp.watch('./source/styles/*scss', { ignoreInitial: false }, gulp.series(compilacaoSASS));
}
exports.javascript = minifyJS;
exports.images = minifyImage;
