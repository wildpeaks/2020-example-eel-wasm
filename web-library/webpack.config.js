"use strict";
const {resolve} = require("path");

module.exports = {
	target: "web",
	mode: "production",
	entry: "./src/exports.js",
	output: {
		path: resolve(__dirname, "dist"),
		filename: "mylibrary.min.js",
		library: "MyLibrary",
		libraryTarget: "umd"
	},
	externals:{
		fs: "empty",
	},
	stats: "errors-only"
};
