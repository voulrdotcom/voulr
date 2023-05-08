<script lang="ts">
	export let href: string;
</script>

<a {href} class={`${$$props.class} group flex items-center gap-1.5`}>
	<slot />
	<svg width="10" height="10" fill="none" viewBox="0 0 10 10" aria-hidden="true">
		<g fill-rule="evenodd">
			<path d="M0 5h7" class="opacity-0 transition-all duration-300 group-hover:opacity-100" />
			<path d="M1 1l4 4-4 4" class="transition-all duration-300 group-hover:translate-x-[3px]" />
		</g>
	</svg>
</a>
