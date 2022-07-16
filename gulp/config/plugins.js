import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import newer from 'gulp-newer';
import gulpIf from 'gulp-if';

export const plugins = {
	browserSync: browserSync,
	plumber: plumber,
	notify, notify,
	newer: newer,
	gulpIf: gulpIf
}