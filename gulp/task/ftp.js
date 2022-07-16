import { configFTP } from '../config/ftp.js';
import vinylFTP from 'vinyl-ftp';
import util from 'gulp-util';

export const ftp = () => {
  configFTP.log = util.log;
  const ftpConnect = vinylFTP.create(configFTP);
  return app.gulp
    .src(`${app.path.buildFolder}/**/*.*`, { buffer: false })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'FTP',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(ftpConnect.newer(`${app.path.ftp}/${app.path.rootFolder}`))
    .pipe(ftpConnect.dest(`${app.path.ftp}/${app.path.rootFolder}`));
};

export const ftpcss = () => {
  configFTP.log = util.log;
  const ftpConnect = vinylFTP.create(configFTP);
  return app.gulp
    .src(`${app.path.buildFolder}/css/*.*`, { buffer: false })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'FTP',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(ftpConnect.newer(`${app.path.ftp}/${app.path.rootFolder}/css/`))
    .pipe(ftpConnect.dest(`${app.path.ftp}/${app.path.rootFolder}/css/`));
};
