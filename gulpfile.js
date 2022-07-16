import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
  isBuild: process.argv.includes('--production'),
  isDev: !process.argv.includes('--production'),
  gulp: gulp,
  path: path,
  plugins: plugins,
};

import { reset } from './gulp/task/reset.js';
import { html } from './gulp/task/html.js';
import { scss } from './gulp/task/scss.js';
import { js } from './gulp/task/js.js';
import { images } from './gulp/task/images.js';
import { sprite } from './gulp/task/sprite.js';
import { copyWoff } from './gulp/task/fonts.js';
import { favicon, other } from './gulp/task/favicon.js';
import { server } from './gulp/task/server.js';
import { zip } from './gulp/task/zip.js';
import { ftp, ftpcss } from './gulp/task/ftp.js';

function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.img, images);
  gulp.watch(path.watch.sprite, sprite);
}

const mainTask = gulp.parallel(html, scss, js, images, sprite, copyWoff, favicon, other);

const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server));
const buld = gulp.series(reset, mainTask);
const deployZIP = gulp.series(reset, mainTask, zip);
const deployFTP = gulp.series(reset, mainTask, ftp);
const deployCssFTP = gulp.series(reset, mainTask, ftpcss);

gulp.task('default', dev);
gulp.task('build', buld);
gulp.task('zip', deployZIP);
gulp.task('ftp', deployFTP);
gulp.task('ftpcss', deployCssFTP);
