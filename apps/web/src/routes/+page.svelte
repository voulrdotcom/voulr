<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { client } from '$lib/rspc/client';
	import { browser } from '$app/environment';

	$: query = browser ? createQuery(['auth_login'], () => client.query(['auth.login'])) : undefined;
</script>

{#if $query}
	<div class="text-white">
		{#if $query.isLoading}
			<p>Loading...</p>
		{:else if $query.isError}
			<p>error: {$query.error}</p>
		{:else}
			<p>{$query.data}</p>
		{/if}
	</div>
{/if}
