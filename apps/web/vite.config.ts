import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { WEB_PORT } from '@voulr/constants';

export default defineConfig({
    plugins: [sveltekit()],
    server: {
        port: WEB_PORT
    }
});
