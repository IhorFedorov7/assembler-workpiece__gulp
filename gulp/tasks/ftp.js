import { configFTP } from '../config/ftp.js';
import vinylFTP from 'vinyl-ftp'; // npm i vinyl-ftp -D
import util from 'gulp-util'; // npm i gulp-util -D

export const ftp = () => {

    configFTP.log = util.log;

    const ftpConnect = vinylFTP.create(configFTP);

    return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'FTP',
                massage: 'Error: <%= error.message %>'
            }))
        )
        .pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`));
};