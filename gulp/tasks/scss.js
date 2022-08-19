import dartSass from 'sass'; // npm i sass -D
import gulpSass from 'gulp-sass'; // npm i gulp-sass -D
import rename from 'gulp-rename'; // npm i gulp-rename -D

// Сжатие CSS файла
import cleanCss from 'gulp-clean-css'; // npm i gulp-clean-css -D
// Вывод WEBP изображений
import webpcss from 'gulp-webpcss'; // npm i gulp-webpcss -D npm i webp-converter@2.2.3 -D
// Добавление вендорных префиксов
import autoprefixer from 'gulp-autoprefixer'; // npm i gulp-autoprefixer -D
// Групировка медиа запросов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // npm i gulp-group-css-media-queries -D

const sass = gulpSass(dartSass);

export const scss = () => {

    return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'SCSS',
                message: 'Error: <%= error.message %>'
            }))
        )
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(
            app.plugins.if(
                app.isBuild,
                groupCssMediaQueries()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                autoprefixer({
                    grid: true,
                    overrideBrowserslist: ['last 3 versions'],
                    cascade: true 
                })
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                webpcss(
                    {
                        webpClass: '.webp',
                        noWebpClass: '.no-webp'
                    }
                )
            )
        )
        // Раскомментировать если нужен не сжатый дубль файла стилей
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(
            app.plugins.if(
                app.isBuild,
                cleanCss()
            )
        )
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
};