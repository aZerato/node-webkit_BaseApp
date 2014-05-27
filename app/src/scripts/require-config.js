// Basic require configuration
require.config({
	baseUrl: './scripts/',
	paths: {
		'jquery': 'vendors/jquery'
	}
});

// Require start !
require([
	'jquery',
	'application'
	], function($, Application) {	
		$(document).ready(function() {
			var application = new Application();
			application.start();
		});
});