"use strict";
const {resolve} = require("path");

module.exports = {
	target: "web",
	entry: "./src/application.js",
	output: {
		path: resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	externals:{
		fs: "empty",
	},
	stats: "errors-only"
};
