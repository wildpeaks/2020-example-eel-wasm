"use strict";
const {compileModule} = require("eel-wasm");
const wabt = require("wabt");
async function main() {

	// Input
	const code = "foo = 1;";
	const globals = {
		foo: 0
	}

	// Compile to Uint8Array
	const wasm = compileModule({
		functions: {
			main: {
				code: code,
				pool: "main",
			}
		},
		pools: {
			main: new Set(Object.keys(globals))
		}
	});

	// Convert Uint8Array to text
	const {readWasm} = await wabt();
	const myModule = readWasm(wasm, { readDebugNames: true });
	const text = myModule.toText({ foldExprs: false, inlineExport: false });

	// The result
	console.log(text);

}
main().catch((e) => console.error(e));
