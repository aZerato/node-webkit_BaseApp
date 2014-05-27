module.exports = copy = {
	copyApp: {
		files: [
			// Vendors
			{src: '<%= configs.bower %>/requirejs/require.js', dest: '<%= configs.build %>/scripts/vendors/require.js'},
			{src: '<%= configs.bower %>/jquery/dist/jquery.min.js', dest: '<%= configs.build %>/scripts/vendors/jquery.js'},
			
			// App
			{src: '<%= configs.src %>/assets/index.html', dest: '<%= configs.build %>/index.html'},
			{src: '<%= configs.src %>/assets/package.json', dest: '<%= configs.build %>/package.json'},
			{expand: true, cwd: '<%= configs.src %>/scripts/', src: '**', dest: '<%= configs.build %>/scripts/'}
		]
	}
};