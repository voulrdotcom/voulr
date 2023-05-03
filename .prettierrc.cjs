module.exports = {
    useTabs: true,
    printWidth: 100,
    singleQuote: true,
    trailingComma: 'none',
    bracketSameLine: false,
    semi: true,
    quoteProps: 'consistent',
    plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
    pluginSearchDirs: ['.'],
    overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
    tailwindConfig: './packages/ui/tailwind.config.cjs'
};
