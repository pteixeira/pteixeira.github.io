import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import browserSync from "browser-sync";

// variables
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

var bs = browserSync.create();

gulp.task('styles', () => {
  gulp.src('sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer(autoprefixerOptions))
  .pipe(gulp.dest('./css/'))
});

gulp.task("browser-sync", () => {
  bs.init(["./css/*.css", "./js/*.js", "./*.html"], {
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('default', () => {
  gulp.watch('sass/**/*.scss', ['styles', "browser-sync"]);
})
