define([
		'jquery'
	], function($) {

		var Application = function() {

		};

		Application.prototype.start = function() {
			//Node require !!
			var os = window.requireNode('os');

			alert('Application started on ' + os.platform());
		};

		return Application;

});