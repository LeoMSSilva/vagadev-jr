const { series, parallel } = require('gulp');
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const uglifycss = require('gulp-uglifycss');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const watch = require('gulp-watch');

function configurationHtml() {
	return gulp
		.src('src/**/*.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('build'));
}

function configurationCss() {
	return gulp
		.src('src/assets/scss/index.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(uglifycss({ uglyComments: true }))
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest('build/assets/css'));
}

function configurationJs() {
	return gulp
		.src('src/assets/js/**/*.js')
		.pipe(babel({ presets: ['env'] }))
		.pipe(uglify())
		.pipe(concat('bundle.min.js'))
		.pipe(gulp.dest('build/assets/js'));
}

function configurationImg() {
	return gulp
		.src('src/assets/imgs/**/*.*')
		.pipe(gulp.dest('build/assets/imgs'));
}

function configurationFont() {
	return gulp
		.src('src/assets/fonts/**/*.ttf')
		.pipe(gulp.dest('build/assets/fonts'));
}

gulp.task('configurationHtml', configurationHtml);
gulp.task('configurationCss', configurationCss);
gulp.task('configurationJs', configurationJs);
gulp.task('configurationFont', configurationFont);
gulp.task('configurationImg', configurationImg);


function watchFiles(cb) {
	watch('src/**/*.html', configurationHtml);
	watch('src/**/*.scss', configurationCss);
	watch('src/**/*.js', configurationJs);
	watch('src/**/*.ttf', configurationFont);
	watch('src/assets/imgs/**/*.*', configurationImg);
	return cb();
}

module.exports.default = series(
	parallel(
		configurationHtml,
		configurationCss,
		configurationJs,
		configurationImg,
		configurationFont,
	),
	watchFiles,
);
