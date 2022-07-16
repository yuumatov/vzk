import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const copyWoff = () => {
	return app.gulp.src(`${app.path.srcFolder}/fonts/*.{woff,woff2}`)
		.pipe(app.gulp.dest(app.path.build.fonts));
}

export const otfToTtf = () => {
	return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'OTF to TTF',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(fonter({
			formats: ['ttf']
		}))
		.pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const ttfToWoff = () => {
	return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'TTF to WOFF and WOFF2',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(fonter({
			formats: ['woff']
		}))
		.pipe(app.gulp.dest(app.path.build.fonts))
		.pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
		.pipe(ttf2woff2())
		.pipe(app.gulp.dest(app.path.build.fonts));
}