'use strict';

module.exports = function(context, pluginOptions, plugin) {
	// Reset the browsers to just contain dummy browser, so that wct doesn't complain about no browsers at all.
	context.hook('configure', function(done) {
		context.options.activeBrowsers = [{}];
		return done(null);
	});
};
