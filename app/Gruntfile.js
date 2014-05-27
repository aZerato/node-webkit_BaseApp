module.exports = function(grunt) {
	
	/**
	* tasks configurations.
	*/
	var configs = require('./grunt_tasks/configs');
	var clean = require('./grunt_tasks/clean');
	var copy = require('./grunt_tasks/copy');

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		configs: configs,
		clean: clean,
		copy: copy
	});

	/**
	* load tasks.
	*/
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	
	/*
	* register tasks
	*/
	grunt.registerTask('buildApp', [
		'clean:cleanBuild',
		'copy:copyApp'
	]);

};