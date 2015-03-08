'use strict';

// I have no idea why this fails.
//var babel = require('babel-core');

exports.translate = function(load) {
	var output = babel.transform(load.source, {
        modules: 'system'
    });
	load.source = output.code;
	load.metadata.sourceMap = output.sourceMap;
};
