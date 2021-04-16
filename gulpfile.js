const gulp = require('gulp'),
    pug = require('gulp-pug'),
    del = require('del'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    htmlhint = require('gulp-htmlhint'),
    htmlmin = require('gulp-htmlmin'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    gcmq = require('gulp-group-css-media-queries'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),
    imgmin = require('gulp-tinypng-nokey'),
    newer = require('gulp-newer'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    svgSprite = require('gulp-svg-sprite'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    webp = require('gulp-webp'),
    browserSync = require('browser-sync').create();


/* FILES PATHS */

// Current project name
let themePath = 'genesis';

const paths = {
    prod: {
        build: './build'
    },
    pug: {
        src: './src/pages/*.pug',
        dest: './build',
        watch: ['./src/components/**/*.pug', './src/mixins-pug/**/*.pug', './src/pages/**/*.pug', './src/layouts/**/*.pug']
    },
    scss: {
        src: './src/scss/main.scss',
        dest: `./build/wp-content/themes/${themePath}/assets/css`,
        watch: ['./src/scss/global/*.scss', './src/components/**/*.scss', './src/scss/libs/*.scss']
    },
    cssPlugins: {
        src: './src/scss/libs/*.css',
        dest: `./build/wp-content/themes/${themePath}/assets/css`,
        watch: './src/scss/libs/*.css'
    },
    js: {
        src: './src/js/**/*.js',
        dest: `./build/wp-content/themes/${themePath}/assets/js`,
        watch: './src/js/**/*.js'
    },
    jsPlugins: {
        src: './src/js/libs/**/*.js',
        dest: `./build/wp-content/themes/${themePath}/assets/js`,
        watch: './src/js/libs/**/*.js'
    },
    images: {
        src: ['./src/img/**/*', '!./src/img/**/*.svg'],
        dest: `./build/wp-content/themes/${themePath}/assets/img`,
        watch: ['./src/img/**/*', '!./src/img/**/*.svg']
    },
    svgSprite: {
        src: './src/img/icons/**/*.svg',
        dest: `./build/wp-content/themes/${themePath}/assets/img/icons`,
        watch: './src/img/icons/**/*.svg'
    },
    svg: {
        src: ['./src/img/**/*.svg', '!./src/img/icons/**/*.svg'],
        dest: `./build/wp-content/themes/${themePath}/assets/img/icons`,
        watch: ['./src/img/**/*.svg', '!./src/img/icons/**/*.svg']
    },
    fonts: {
        src: './src/fonts/**/*',
        dest: `./build/wp-content/themes/${themePath}/assets/fonts`,
        watch: './src/fonts/**/*'
    },
    php: {
        src: './src/php/**/*.php',
        dest: `./build/wp-content/themes/${themePath}/assets/php`,
        watch: './src/php/**/*.php'
    },
    video: {
        src: './src/video/**/*.*',
        dest: `./build/wp-content/themes/${themePath}/assets/video`,
        watch: './src/video/**/*.*'
    }
};

/* TASKS */

/* PUG TO HTML & MINIFICATION */

gulp.task('pug', () => {
    return gulp.src(paths.pug.src)
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .pipe(htmlhint())
        .pipe(htmlhint.reporter())
        .pipe(htmlhint.failOnError())
        //.pipe(htmlmin({
        //    collapseWhitespace: true  //Минификация html (по умолчанию отключена)
        //}))
        .pipe(gulp.dest(paths.pug.dest))
        .pipe(browserSync.stream())
});

/* SCSS TO CSS CONVERTATION & MINIFICATION */

gulp.task('styles', () => {
    return gulp.src(paths.scss.src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('main.scss'))
        .pipe(sass())
        .pipe(autoprefixer({
            Browserslist: ['> 1%, not dead'],
            cascade: false
        }))
        .pipe(gcmq())
        .pipe(gulp.dest(paths.scss.dest))
        .pipe(cleanCSS())
        .pipe(rename('main.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.scss.dest))
        .pipe(browserSync.stream())
});

/* CSS PLUGINS MOVING TO BUILD */

gulp.task('cssPlugins', () => {
    return gulp.src(paths.cssPlugins.src)
        .pipe(plumber())
        .pipe(gulp.dest(paths.cssPlugins.dest))
});

/* JAVASCRIPT BABEL & MINIFICATION */

gulp.task('scripts', () => {
    return gulp.src(paths.js.src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(paths.js.dest))
        .pipe(uglify({
            mangle: {
                toplevel: true
            }
        }))
        .pipe(sourcemaps.write())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest(paths.js.dest))
});

/* JAVASCRIPT PLUGINS MOVING TO BUILD */

gulp.task('jsPlugins', () => {
    return gulp.src(paths.jsPlugins.src)
        .pipe(plumber())
        .pipe(gulp.dest(paths.jsPlugins.dest))
});

/* IMAGES MINIFICATION */

gulp.task('imgmin', () => {
    return gulp.src(paths.images.src)
        .pipe(plumber())
        .pipe(newer(paths.images.dest))
        .pipe(imgmin())
        .pipe(gulp.dest(paths.images.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

/* IMAGES JPG/JPEG & PNG TO WEBP CONVERTATION */

gulp.task('webp', () => {
    return gulp.src(paths.images.src)
        .pipe(plumber())
        .pipe(webp())
        .pipe(gulp.dest(paths.images.dest))
});

/* SVG SPRITES */

gulp.task('sprites', () => {
    return gulp.src(paths.svgSprite.src)
        .pipe(plumber())
        .pipe(newer(paths.svgSprite.dest))
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(cheerio({
            run: ($) => {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {
                xmlMode: true
            }
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: '../sprite.svg'
                }
            }
        }))
        .pipe(gulp.dest(paths.svgSprite.dest))
});

/* SVG MINIFICATION */

gulp.task('svg', () => {
    return gulp.src(paths.svg.src)
        .pipe(plumber())
        .pipe(newer(paths.svg.dest))
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(gulp.dest(paths.svg.dest))
});

/* FONTS MOVING TO BUILD */

gulp.task('fonts', () => {
    return gulp.src(paths.fonts.src)
        .pipe(plumber())
        .pipe(newer(paths.fonts.dest))
        .pipe(gulp.dest(paths.fonts.dest))
});

/* PHP MOVING TO BUILD */

gulp.task('php', () => {
    return gulp.src(paths.php.src)
        .pipe(plumber())
        // .pipe(newer(paths.php.dest))
        .pipe(gulp.dest(paths.php.dest))
});

/* VIDEO MOVING TO BUILD */

gulp.task('video', () => {
    return gulp.src(paths.video.src)
        .pipe(plumber())
        .pipe(newer(paths.video.dest))
        .pipe(gulp.dest(paths.video.dest))
});

/* BUILD FOLDER ERASE */

gulp.task('clean', () => {
    return del(paths.prod.build);
});

/* BROWSER SYNC */

function reload(done) {
  browserSync.reload({ stream: true });
  done();
}

gulp.task('server', () => {
    browserSync.init({
        server: {
            baseDir: paths.prod.build
        },
        reloadOnRestart: true
    });
    gulp.watch(paths.pug.watch, gulp.series('pug', reload));
    gulp.watch(paths.scss.watch, gulp.series('styles', reload))
    gulp.watch(paths.js.watch, gulp.series('scripts', reload));
    gulp.watch(paths.jsPlugins.watch, gulp.series('jsPlugins', reload));
    gulp.watch(paths.cssPlugins.watch, gulp.series('cssPlugins', reload));
    gulp.watch(paths.images.watch, gulp.series('imgmin', reload));
    gulp.watch(paths.images.watch, gulp.series('webp', reload));
    gulp.watch(paths.svgSprite.watch, gulp.series('sprites', reload));
    gulp.watch(paths.svg.watch, gulp.series('svg', reload));
    gulp.watch(paths.fonts.watch, gulp.series('fonts', reload));
    gulp.watch(paths.php.watch, gulp.series('php', reload));
    gulp.watch(paths.video.watch, gulp.series('video', reload));
});

/* PROJECT TASK DEVELOPMENT QUEUE */

gulp.task('dev', gulp.series(
    'pug',
    'styles',
    'cssPlugins',
    'scripts',
    'jsPlugins',
    'imgmin',
    'webp',
    'sprites',
    'svg',
    'fonts',
    'php',
    'video'
));

gulp.task('prod', gulp.series(
    // 'clean',
    'pug',
    'styles',
    'cssPlugins',
    'scripts',
    'jsPlugins',
    'imgmin',
    'webp',
    'sprites',
    'svg',
    'fonts',
    'php',
    'video'
));

/* START DEVELOPMENT GULP */

gulp.task('default', gulp.series(
    'dev', 'server'
));

/* START PRODUCTION GULP */

gulp.task('prod', gulp.series(
    'prod', 'server'
));
