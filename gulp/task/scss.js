import sassPlugin from 'gulp-sass';
import sassCompile from 'sass';
const sass = sassPlugin(sassCompile);
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';

export const scss = () => {
	return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'SCSS',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(sass())
		.pipe(app.plugins.gulpIf(
			app.isBuild,
			autoprefixer({
				grid: true,
				overrideBrowserslist: ['last 3 version', 'not dead', 'not ie > 1', 'not ie_mob > 1'],
				cascade: true
			})
		))
		.pipe(app.plugins.gulpIf(app.isBuild, cleanCss()))
		.pipe(app.gulp.dest(app.path.build.css, { sourcemaps: app.isDev }))
		.pipe(app.plugins.browserSync.stream());
}