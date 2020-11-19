var path = require('path'),
    gulp = require('gulp'),
    uglyfly = require('gulp-uglyfly'),
    babel = require('gulp-babel'),
    htmlmin = require('gulp-htmlmin'),
    cleanCSS = require('gulp-clean-css'),
    jsonminify = require('gulp-jsonminify'),
    { SRC_DIR, DIST_DIR } = require('./config')

gulp.task('jsmin', () => {
    return gulp
        .src(path.resolve(__dirname, SRC_DIR, '*.js'))
        .pipe(babel())
        .pipe(uglyfly({ compress: true }))
        .pipe(gulp.dest(path.resolve(__dirname, DIST_DIR)))
})

gulp.task('wxmlmin', () => {
    return gulp
        .src(path.resolve(__dirname, SRC_DIR, '*.wxml'))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(path.resolve(__dirname, DIST_DIR)))
})

gulp.task('wxssmin', () => {
    return gulp
        .src(path.resolve(__dirname, SRC_DIR, '*.wxss'))
        .pipe(cleanCSS())
        .pipe(gulp.dest(path.resolve(__dirname, DIST_DIR)))
})

gulp.task('jsonmin', () => {
    return gulp
        .src(path.resolve(__dirname, SRC_DIR, '*.json'))
        .pipe(jsonminify())
        .pipe(gulp.dest(path.resolve(__dirname, DIST_DIR)))
})

gulp.task("default", gulp.series(["jsmin", "wxmlmin", "wxssmin", "jsonmin"]));