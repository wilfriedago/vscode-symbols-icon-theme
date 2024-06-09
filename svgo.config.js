module.exports = {
	multipass: true,
	precision: 2,
	plugins: [
		{
			name: "preset-default",
		},
		"convertStyleToAttrs",
		"removeOffCanvasPaths",
		"removeScriptElement",
		"removeStyleElement",
		"reusePaths",
		"sortAttrs",
	],
};
