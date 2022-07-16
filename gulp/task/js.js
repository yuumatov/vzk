import webpackStream from "webpack-stream";

export const js = () => {
	return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'JavaScript',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(webpackStream({
			mode: app.isDev ? 'development' : 'production',
			performance: {
				hints: false
			}
		}))
		.pipe(app.gulp.dest(app.path.build.js, { sourcemaps: app.isDev }))
		.pipe(app.plugins.browserSync.stream());
}