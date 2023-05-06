<script lang="ts">
	import { trpc } from '$lib/trpc/client';
	import { page } from '$app/stores';

	let email: string;
	let password: string;

	$: query = trpc($page).auth.register.createQuery({
		email,
		password
	});
</script>

<div class="flex h-screen w-full flex-col items-center justify-center">
	<p class="text-green-500">res: {$query.data}</p>
	<p class="text-red-500">error: {$query.error?.message}</p>
	<p class="text-white">email</p>
	<input bind:value={email} />
	<p class="text-white">password</p>
	<input bind:value={password} />
	<button class="bg-slate-400 text-white" on:click={async () => await $query.refetch()}>
		click to register
	</button>
</div>
