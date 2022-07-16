import svgSprite from 'gulp-svg-sprite';

export const sprite = () => {
	return app.gulp.src(app.path.src.sprite)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'SVG SPRITE',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(svgSprite({
            shape: {
                dimension: {
                    maxWidth: '500',
                    maxHeight: '500'
                },
                spacing: {
                    padding: 0
                },
                transform: [{
                    'svgo': {
                        'plugins': [
                            { removeViewBox: false },
                            { removeUnusedNS: false },
                            { removeUselessStrokeAndFill: true },
                            { cleanupIDs: false },
                            { removeComments: true },
                            { removeEmptyAttrs: true },
                            { removeEmptyText: true },
                            { collapseGroups: true },
                            { removeAttrs: { attrs: '(fill|stroke|style)' } }
                        ]
                    }
                }]
            },
            mode: {
                symbol: {
                    dest : '.',
                    sprite: 'sprite.svg'
                }
            }
        }))
		.pipe(app.gulp.dest(app.path.build.img))
		.pipe(app.plugins.browserSync.stream())
}