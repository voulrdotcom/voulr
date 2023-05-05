import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { threeMinifier } from '@yushijinhun/three-minifier-rollup';

export default defineConfig({
	plugins: [
		sveltekit(),
		{ ...threeMinifier(), enforce: 'pre' } // reduce threejs bundle size
	],
	ssr: {
		noExternal: ['three']
	}
});
