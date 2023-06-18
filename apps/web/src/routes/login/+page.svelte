<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import voulrLockup from '@voulr/assets/svgs/voulr-lockup.svg';
	import { ErrorMessage } from '@voulr/ui';
	import { client } from '$lib/rspc/client';
	import type { LoginArgs } from '$lib/types/bindings';

	// state
	let loginArgs: LoginArgs = {
		emailOrUsername: '',
		password: ''
	};

	$: query = createQuery<Promise<null>, Error>(['auth.login'], () =>
		client.mutation(['auth.login', loginArgs])
	);

	// logging
	$: $query.data && console.log('success:', $query.data);
	$: $query.isError && console.log('fail:', $query.error);
</script>

<div class="container mx-auto flex max-w-[600px] flex-col gap-6 px-6 py-16 lg:py-20">
	<img src={voulrLockup} alt="voulr" class="ml-6 w-24" />
	<div
		class="flex justify-center rounded-lg border border-neutral-300 bg-gradient-to-br from-neutral-50 to-neutral-100 px-3 py-12 shadow-xl min-[600px]:py-16"
	>
		<form class="flex w-full max-w-[450px] flex-col items-center gap-6">
			<h1 class="w-full pl-1.5 text-2xl">Sign in to your account</h1>

			<!-- email or username -->
			<label class="flex w-full flex-col gap-1.5">
				<p class="pl-1.5">Email or username</p>
				<input
					bind:value={loginArgs.emailOrUsername}
					class="h-12 w-full rounded-lg border border-neutral-300 bg-transparent pl-3 outline-none ring-voulr-blue transition-all duration-300 ease-in-out focus:ring-2"
				/>
				<ErrorMessage
					class="pl-1.5"
					message={$query.error?.message}
					active={$query.error?.message.includes('Email or username')}
				/>
			</label>

			<!-- password -->
			<label class="flex w-full flex-col gap-1.5">
				<p class="pl-1.5">Password</p>
				<input
					bind:value={loginArgs.password}
					type="password"
					class="h-12 w-full rounded-lg border border-neutral-300 bg-transparent pl-3 outline-none ring-voulr-blue transition-all duration-300 ease-in-out focus:ring-2"
				/>
				<ErrorMessage
					class="pl-1.5"
					message={$query.error?.message}
					active={$query.error?.message.includes('Password')}
				/>
			</label>

			<button
				on:click={async () => await $query.refetch()}
				class="h-12 w-full rounded-lg bg-voulr-blue font-medium tracking-wide text-white"
			>
				Continue
			</button>
		</form>
	</div>
	<p class="pl-6 text-neutral-500">
		Don't have an account?
		<a class="text-voulr-blue hover:brightness-75" href="/register">Sign up</a>
	</p>
</div>
