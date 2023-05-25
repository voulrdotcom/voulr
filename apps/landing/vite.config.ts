import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { LANDING_PORT } from '@voulr/constants';

export default defineConfig({
    plugins: [sveltekit()],
    server: {
        port: LANDING_PORT
    }
});
