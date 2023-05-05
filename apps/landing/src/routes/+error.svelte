<script>
	import { page } from '$app/stores';
</script>

<div class="flex h-screen w-full flex-col items-center justify-center gap-3">
	<h1 class="text-8xl font-bold text-neutral-500">{$page.status}</h1>
	{#if $page.error?.message}
		<p class="text-neutral-500">{$page.error.message}</p>
	{/if}
</div>
