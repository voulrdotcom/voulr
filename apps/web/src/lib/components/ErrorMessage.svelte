<script lang="ts">
	import error from '@voulr/assets/svgs/error.svg';

	// Props
	export let message: string | undefined;
	export let includes: string;
</script>

<p
	class={`${
		message && message.includes(includes)
			? 'opacity-100 transition-all delay-150 duration-150 ease-in'
			: 'opacity-0'
	} absolute bottom-2 flex items-baseline gap-1.5 pl-1.5 text-sm text-red-600 `}
>
	<img src={error} alt="error" width="12" height="12" />
	{#if message && message.length > 100}
		<!-- edgecase -->
		Something went wrong. Please try again later.
	{:else}
		{message}
	{/if}
</p>
