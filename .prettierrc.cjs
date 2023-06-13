module.exports = {
	useTabs: true,
	printWidth: 100,
	singleQuote: true,
	trailingComma: 'none',
	bracketSameLine: false,
	semi: true,
	quoteProps: 'consistent',
	importOrder: [
		// external packages
		'^([A-Za-z]|@[^s/])',
		// lib packages
		'^\\$lib/(.*)$',
		// voulr packages
		'^@voulr/(constants|ui|assets)(/.*)?$',
		// relative
		'^\\.'
	],
	importOrderSortSpecifiers: true,
	plugins: [
		'@trivago/prettier-plugin-sort-imports',
		'prettier-plugin-svelte',
		'prettier-plugin-tailwindcss'
	],
	pluginSearchDirs: ['.'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
	tailwindConfig: './packages/ui/tailwind.config.cjs'
};
