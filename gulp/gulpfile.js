const gulp = require('gulp'),
//{ src, dest, watch, series, parallel } = require("gulp"),
  sass = require('gulp-sass')(require('sass')),
  prefix = require("gulp-autoprefixer"),
  rename = require('gulp-rename'),
  sourcemaps = require("gulp-sourcemaps"),
  minify = require('gulp-minify'),
  plumber = require("gulp-plumber"),
  uglify = require("gulp-uglify"),
  extractCriticalCss = require('gulp-extract-critical-css'),
  del = require("del"),
  cleanCSS = require("gulp-clean-css"),
  resizer = require('gulp-images-resizer'),
  imageMin = require('gulp-imagemin'),
  webp = require('gulp-webp'),
  browserSync = require('browser-sync').create();
let reload = browserSync.reload;


gulp.task('sass', () => {
  return gulp.src(["assets/sass/**/*.scss", "!assets/sass/critical/**"])
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'compressed' }).on("error", sass.logError))
    .pipe(prefix("last 2 versions"))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('assets/css/'))
    .pipe(browserSync.stream());
});

gulp.task('minify', () => {
  return gulp.src('assets/js/src/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(minify({
      ext:{
          src:'.min.js',
          min:'.js'
      }}))
    .pipe(gulp.dest('assets/js/dist/'))
    .pipe(browserSync.stream())
    .on('end', () => {
      // Remove the original JavaScript files after minification
      del(['assets/js/dist/*.js', '!assets/js/dist/*.min.js']);
    });
})

gulp.task('criticalCSS', () => {
  return gulp.src('assets/sass/critical/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'compressed' }).on("error", sass.logError))
    .pipe(prefix("last 2 versions"))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('assets/css/'))
    .pipe(extractCriticalCss({
      inlineCritical: true,
      inlinePath: "index.html"
    }))
    .pipe(browserSync.stream());
})

gulp.task('resizer', () => {
  return gulp.src("assets/images/**")
  .pipe(resizer({
    format: "",
    width: 20,
  }))
  .pipe(rename({ suffix: '-small' }))
  .pipe(gulp.dest("assets/min-images/"))
  .pipe(browserSync.stream());
})

gulp.task('imageMin', () => {
  return gulp.src("assets/images/**")
    .pipe(imageMin())  
    .pipe(gulp.dest("assets/min-images/"))
    .pipe(browserSync.stream());
})
gulp.task('webp', () => {
  return gulp.src("assets/images/**")
    .pipe(webp())  
    .pipe(gulp.dest("assets/min-images/"))
    .pipe(browserSync.stream());
})

//clean
const clean = () => {
  return del(
    [
      "assets/css"
    ],
    { force: true }
  );
};

gulp.task('watch', (done) => {
  browserSync.init({
    server: {
      baseDir: './',
      watch: true,
      open: true,
      notify: false,
      files: ["**/*.html", "assets/sass/**/*.scss"],
    }
  });
  gulp.watch('assets/sass/**/*.scss', gulp.series('sass'));
  gulp.watch('assets/js/src/**/*.js', gulp.series('minify'));
  gulp.watch('assets/sass/critical/**/*.scss', gulp.series('criticalCSS'));
  gulp.watch('assets/images/**', gulp.series('imageMin'));
  gulp.watch('assets/images/**', gulp.series('webp'));
  gulp.watch('**/*.html').on('change', browserSync.reload);
  done();
});

gulp.task("default", gulp.series(clean, "sass", "minify", "criticalCSS", "imageMin", "webp", "resizer", "watch"));

gulp.task("fast", gulp.series(clean, "sass", "minify", "criticalCSS", "watch"));
