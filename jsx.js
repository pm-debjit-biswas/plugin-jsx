'use strict';

var babel = require('babel');

exports.translate = function(load) {
	var output = babel.transform(load.source);
	load.source = output.code;
	load.metadata.sourceMap = output.sourceMap;
};
