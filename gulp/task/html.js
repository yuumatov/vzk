import fileinclude from 'gulp-file-include';
import versionNumber from 'gulp-version-number';
import typograf from 'gulp-typograf';

export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'HTML',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(fileinclude())
		.pipe(typograf({
			locale: ['ru', 'en-US']
		}))
		.pipe(app.plugins.gulpIf(
			app.isBuild,
			versionNumber({
				'value': '%DT%',
				'append': {
					'key': '_v',
					'cover': 0,
					'to': [
						'css',
						'js'
					]
				}
			})
		))
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browserSync.stream());
}