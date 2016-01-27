var path = require('path'),
    gulp = require('gulp'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    changed = require('gulp-changed'),
    less = require('gulp-less'),
    minifyCss = require('gulp-minify-css');

var env = process.env || 'development';

gulp.task('tour:build-app', function () {
  return gulp.src([
    './app/app.js',
    './app/config.' + env + '.js',
    './app/config/routes.js',
    './app/modules/**/*.js'
  ])
  .pipe(sourcemaps.init())
  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./dist'))
  .pipe(connect.reload());
});

gulp.task('tour:build-vendor', function () {
  return gulp.src(require('./dependencies.json').javascript)
    .pipe(sourcemaps.init())
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('tour:build-stylsheets', function () {
  return gulp.src('app/stylesheets/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('tour:server', function () {
  connect.server({
    root: 'dist',
    port: 3000,
    livereload: true
  });
});

gulp.task('tour:build-templates', function () {
  return gulp.src('app/**/*.html')
    .pipe(changed('dist'))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('tour:build-fonts', function () {
  return gulp.src('app/stylesheets/fonts/**')
    .pipe(gulp.dest('./dist/fonts'))
    .pipe(connect.reload())
});

gulp.task('tour:build-images', function () {
  return gulp.src('app/images/**')
    .pipe(gulp.dest('./dist/images'))
    .pipe(connect.reload());
});

gulp.task('tour:build-index', function () {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('tour:clean', function () {
  return gulp.src('./dist')
    .pipe(clean({
      force: true
    }));
});

gulp.task('tour:watch', ['tour:clean'], function () {
  gulp.watch('app/**/*.js', ['tour:build-app']);
  gulp.watch('app/**/*.html', ['tour:build-templates']);
  gulp.watch('app/index.html', ['tour:build-index']);
  gulp.watch('app/stylesheets/**/*.less', ['tour:build-stylsheets']);
  gulp.watch('app/stylesheets/fonts/**', ['tour:build-fonts']);
  gulp.watch('app/images/**', ['tour:build-images']);
});

gulp.task('default', ['tour:clean'], function () {
  gulp.start('tour:build-app', 'tour:build-vendor', 'tour:build-index', 'tour:build-templates', 'tour:build-stylsheets', 'tour:build-fonts', 'tour:build-images', 'tour:server', 'tour:watch');
});

gulp.task('tour:build', ['tour:clean'], function () {
  gulp.start('tour:build-app', 'tour:build-vendor', 'tour:build-index', 'tour:build-templates', 'tour:build-stylsheets', 'tour:build-fonts', 'tour:build-images', 'tour:server', 'tour:watch');
});
