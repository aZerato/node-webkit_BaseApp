module.exports = nodewebkit = {
	packageNw: {
		options: {
			build_dir: '<%= configs.buildfolder %>',
			mac: false,
			win: true,
			linux32: false,
			linux64: false
		},
		src: ['<%= configs.appfolder %>/**/*']
	}
};