module.exports = clean = {
	cleanBuild: {
		src: [
			'<%= configs.build %>/**/*'
		],
		options: {
			force: true
		}
	}
};