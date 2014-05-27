module.exports = function(grunt) {
	
	/**
	* tasks configurations.
	*/
	var configs = require('./grunt_tasks/configs');
	var clean = require('./grunt_tasks/clean');
	var nodewebkit = require('./grunt_tasks/nodewebkit');

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		configs: configs,
		clean: clean,
		nodewebkit: nodewebkit
	});

	/**
	* load tasks.
	*/
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-node-webkit-builder');
	
	/*
	* register tasks
	*/
	grunt.registerTask('build', [
		'clean:cleanBuild',
		'nodewebkit:packageNw'
	]);

};