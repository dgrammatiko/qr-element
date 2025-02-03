export default {
	base: './',
	root: './',
	build: {
		// emptyOutDir: false
		outDir: './dist',
		rollupOptions: {
			output: {
				assetFileNames: '[name].[ext]',
				chunkFileNames: '[name].[ext]',
				entryFileNames: '[name].js',
			},
		},
	},
};
