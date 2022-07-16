export const server = () => {
	app.plugins.browserSync.init({
		server: {
			baseDir: app.path.build.html,
			index: "list.html"
		},
		notify: false
	});
}