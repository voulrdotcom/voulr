<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import voulrLockup from '@voulr/assets/svgs/voulr-lockup.svg';
	import { client } from '$lib/rspc/client';
	import type { RegisterArgs } from '$lib/types/bindings';

	// state
	let registerArgs: RegisterArgs = {
		username: '',
		email: '',
		password: ''
	};

	$: query = createQuery(['auth.register'], () => client.mutation(['auth.register', registerArgs]));

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
			<h1 class="w-full pl-1.5 text-2xl">Create your account</h1>

			<!-- username -->
			<label class="flex w-full flex-col gap-1.5">
				<p class="pl-1.5">Username</p>
				<input
					bind:value={registerArgs.username}
					maxlength="16"
					minlength="4"
					required
					class="h-12 w-full rounded-lg border border-neutral-300 bg-transparent pl-3 outline-none ring-voulr-blue transition-all duration-300 ease-in-out focus:ring-2"
				/>
			</label>

			<!-- email -->
			<label class="flex w-full flex-col gap-1.5">
				<p class="pl-1.5">Email</p>
				<input
					bind:value={registerArgs.email}
					type="email"
					maxlength="64"
					required
					class="h-12 w-full rounded-lg border border-neutral-300 bg-transparent pl-3 outline-none ring-voulr-blue transition-all duration-300 ease-in-out focus:ring-2"
				/>
			</label>

			<!-- password -->
			<label class="flex w-full flex-col gap-1.5">
				<p class="pl-1.5">Password</p>
				<input
					bind:value={registerArgs.password}
					type="password"
					minlength="7"
					maxlength="64"
					required
					class="h-12 w-full rounded-lg border border-neutral-300 bg-transparent pl-3 outline-none ring-voulr-blue transition-all duration-300 ease-in-out focus:ring-2"
				/>
			</label>

			<button
				on:click={async () => !$query.isError && (await $query.refetch())}
				class="h-12 w-full rounded-lg bg-voulr-blue font-medium tracking-wide text-white"
			>
				Create account
			</button>
		</form>
	</div>
	<p class="pl-6 text-neutral-500">
		Have an account?
		<a class="text-voulr-blue hover:brightness-75" href="/login">Sign in</a>
	</p>
</div>
