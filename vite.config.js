import { sveltekit } from '@sveltejs/kit/vite';

import Icons from 'unplugin-icons/vite';

function VitePluginRemoveHashFontFiles() {
	return {
		name: 'Remove hash from font files',
		apply: 'build',
		enforce: 'post',
		config(config) {
			const defaultAssetFileNames = config.build.rollupOptions.output.assetFileNames;
			config.build.rollupOptions.output.assetFileNames = ({ type, name }) => {
				if (type === 'asset' && /\.(woff2?|ttf|otf)$/.test(name)) return `[name].[ext]`;
				return defaultAssetFileNames;
			};
		}
	};
}

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		VitePluginRemoveHashFontFiles(),
		Icons({
			compiler: 'svelte'
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
