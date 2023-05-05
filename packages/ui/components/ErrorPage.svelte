<script lang="ts">
	// Props
	export let status: number;
	export let message: string | undefined;
</script>

<div class="flex h-screen w-full flex-col items-center justify-center gap-3">
	<h1 class="text-7xl text-neutral-500">{status}</h1>
	{#if message}
		<p class="text-neutral-500">{message}</p>
	{/if}
</div>
