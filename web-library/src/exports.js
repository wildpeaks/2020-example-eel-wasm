"use strict";
const {compileModule} = require("eel-wasm");
const wabt = require("wabt");

async function compile(_code, _globals) {
	const wasm = compileModule({
		functions: {
			main: {
				code: _code,
				pool: "main",
			}
		},
		pools: {
			main: new Set(Object.keys(_globals))
		}
	});
	const {readWasm} = await wabt();
	const myModule = readWasm(wasm, { readDebugNames: true });
	return myModule.toText({ foldExprs: false, inlineExport: false });
}

module.exports.compile = compile;
