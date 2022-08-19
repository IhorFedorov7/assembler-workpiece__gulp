import fileInclude from 'gulp-file-include'; // npm i gulp-file-include -D
import webpHtmlNosvg from 'gulp-webp-html-nosvg'; // npm i gulp-webp-html-nosvg -D
import versionNumber from 'gulp-version-number'; // npm i gulp-version-number -D
//import pug from 'gulp-pug'; // npm i gulp-pug -D

export const html = () => {

    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'HTML',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(fileInclude())
        /*
        * .pipe(pug({
        *    pretty: true,
        *    verbose: true
        * }))
        **/
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(
            app.plugins.if(
                app.isBuild,
                webpHtmlNosvg()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                    versionNumber({
                        'value': '%DT%',
                        'append': {
                            'key': '_v',
                            'cover': 0,
                            'to': [
                                'css',
                                'js',
                            ]
                        },
                        'output': {
                            'file': 'gulp/version.json'
                        }
                    })
            )
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());
};