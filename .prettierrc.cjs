module.exports = {
    useTabs: true,
    printWidth: 100,
    singleQuote: true,
    trailingComma: 'none',
    bracketSameLine: false,
    semi: true,
    quoteProps: 'consistent',
    plugins: ['prettier-plugin-svelte'],
    pluginSearchDirs: ['.'],
    overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }]
};
