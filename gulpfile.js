const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const connect = require('gulp-connect');
const livereload = require('gulp-livereload');

const stylePath = { src: './src/scss/*.scss', dest: './dist' };
const pugPath = { src: './src/pug/*.pug', dest: './dist' };
const scriptPath = { src: './src/js/*.js', dest: './dist' };
const imagePath = { src: 'src/images/*', dest: 'dist/images' };

gulp.task('sass', () => {
  return gulp.src(stylePath.src)
    .pipe(sass())
    .pipe(gulp.dest(stylePath.dest))
    .pipe(connect.reload());
});

gulp.task('pug', () => {
  return gulp.src(pugPath.src)
    .pipe(pug({
      pretty: true,
    }))
    .pipe(gulp.dest(pugPath.dest))
    .pipe(connect.reload());
});

// gulp-uglify、壓縮、變數最佳化等等
gulp.task('js', () => {
  return gulp.src(scriptPath.src)
    .pipe(uglify()) // minify javascript
    .pipe(gulp.dest(scriptPath.dest))
    .pipe(connect.reload());
});

// gulp-imagemin
gulp.task('images', () => {
  return gulp.src(imagePath.src)
    .pipe(imagemin()) // minify images
    .pipe(gulp.dest(imagePath.dest)); // why images minify doesn't need connect.reload？？
});

// watch！！
gulp.task('watch', () => {
  gulp.watch(pugPath.src, ['pug']);
  gulp.watch(stylePath.src, ['sass']);
  gulp.watch(scriptPath.src, ['js']);
  gulp.watch(imagePath.src, ['images']);
});

// gulp-connect, server, live-reload
gulp.task('server', () => {
  connect.server({
    root: './dist',
    livereload: true,
  });
});

// default
gulp.task('default', ['sass', 'pug', 'js', 'images', 'watch', 'server']);

