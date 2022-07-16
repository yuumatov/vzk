// import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

export const images = () => {
	return app.gulp.src(app.path.src.img)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'IMAGES',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(app.plugins.newer(app.path.build.img))
		.pipe(app.plugins.gulpIf(
			app.isBuild,
			imagemin({
				progressive: true,
				svgoPlugins: [{ removeViewBox: false }],
				interlaced: true,
				optimizationLevel: 3
			})
		))
		.pipe(app.gulp.dest(app.path.build.img))
		.pipe(app.plugins.browserSync.stream())
}