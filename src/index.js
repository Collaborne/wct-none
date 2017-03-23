'use strict';

module.exports = function(context, pluginOptions, plugin) {
	// Reset the browsers to just contain dummy browser, so that wct doesn't complain about no browsers at all.
	context.hook('configure', function(done) {
		context.options.activeBrowsers = [{}];
		// FIXME: Obviously, fix the error. Probably by exposing a server on that port and accepting the connection.
		console.log('Configured dummy browser. An error about ECONNREFUSED to 127.0.0.1:4444 can be ignored');
		return done(null);
	});
};
