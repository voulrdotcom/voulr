<script lang="ts">
	import voulrWhiteLockup from '@voulr/assets/svgs/voulr-white-lockup.svg';
	import { createQuery } from '@tanstack/svelte-query';
	import { client } from '$lib/rspc/client';
	import type { LoginArgs } from '$lib/types/bindings';

	// state
	let loginArgs: LoginArgs = {
		email: '',
		password: ''
	};

	$: query = createQuery(['auth.login'], () => client.mutation(['auth.login', loginArgs]));
</script>

<div class="container mx-auto flex max-w-[600px] flex-col gap-6 px-6 py-16">
	<img src={voulrWhiteLockup} alt="voulr" class="ml-6 w-24" />
	<div
		class="flex justify-center rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-12 min-[600px]:py-16"
	>
		<form class="flex w-full max-w-[450px] flex-col items-center gap-6 text-white">
			<h1 class="w-full pl-1.5 text-2xl">Sign in to your account</h1>

			<!-- email -->
			<label class="flex w-full flex-col gap-1.5">
				<p class="pl-1.5">Email</p>
				<input
					bind:value={loginArgs.email}
					type="email"
					maxlength="64"
					required
					class="h-12 w-full rounded-lg border border-neutral-800 bg-transparent pl-3 outline-none ring-voulr-blue transition-all duration-300 ease-in-out focus:ring-2"
				/>
			</label>

			<!-- password -->
			<label class="flex w-full flex-col gap-1.5">
				<p class="pl-1.5">Password</p>
				<input
					bind:value={loginArgs.password}
					type="password"
					minlength="7"
					maxlength="64"
					required
					class="h-12 w-full rounded-lg border border-neutral-800 bg-transparent pl-3 outline-none ring-voulr-blue transition-all duration-300 ease-in-out focus:ring-2"
				/>
			</label>

			<button
				on:click={async () => !$query.isError && (await $query.refetch())}
				class="h-12 w-full rounded-lg bg-voulr-pink"
			>
				Continue
			</button>
		</form>
	</div>
	<p class="pl-6 text-neutral-500">
		Don't have an account?
		<a class="text-voulr-pink hover:brightness-75" href="/register">Sign up</a>
	</p>
</div>
