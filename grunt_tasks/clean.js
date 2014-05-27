module.exports = clean = {
	cleanBuild: {
		src: [
			'<%= configs.buildfolder %>/**/*'
		],
		options: {
			force: true
		}
	}
};