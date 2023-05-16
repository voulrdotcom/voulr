module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}', '../../packages/ui/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['General-Sans']
            },
            colors: {
                'voulr-purple': '#6432af',
                'voulr-pink': '#af73c8',
                'voulr-blue': '#6496c8'
            }
        }
    },
    plugins: []
};
