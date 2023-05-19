<script lang="ts">
	import { trpc } from '$lib/trpc/client';
	import { page } from '$app/stores';
	import voulrWhiteLockup from '@voulr/assets/svgs/voulr-white-lockup.svg';
	import ErrorMessage from '$lib/components/ErrorMessage.svelte';
	import { goto } from '$app/navigation';
	import { Eye } from '@voulr/ui';

	let username = '';
	let email = '';
	let password = '';
	let eyeState: 'OPEN' | 'CLOSED' = 'OPEN';

	$: query = trpc($page).auth.register.createQuery({
		username,
		email,
		password
	});

	$: if ($query.data?.success) {
		goto('/verify-email');
	}
</script>

<div class="container mx-auto flex max-w-[600px] flex-col gap-6 px-6 py-16">
	<img src={voulrWhiteLockup} alt="voulr" class="ml-6 w-24" />
	<form
		class="flex w-full flex-col items-center rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-14 text-white"
	>
		<h1 class="w-full max-w-[450px] pb-1.5 text-left text-2xl">Create your account</h1>

		<!-- generic error -->
		<ErrorMessage
			active={$query.isError &&
				!$query.error?.message.includes('Username') &&
				!$query.error?.message.includes('Email') &&
				!$query.error?.message.includes('Password')}
			message={$query.error?.message}
			class="w-full max-w-[450px] pb-6 text-left"
		/>

		<!-- username -->
		<label class="flex w-full max-w-[450px] flex-col gap-1.5 pb-3">
			<p class="pl-1.5">Username</p>
			<input
				bind:value={username}
				class="h-12 w-full rounded-lg border border-neutral-800 bg-transparent pl-3 outline-none ring-voulr-blue transition-all duration-300 ease-in-out focus:ring-2"
			/>
			<ErrorMessage
				message={$query.error?.message}
				active={$query.error?.message.includes('Username')}
				class="pl-1.5"
			/>
		</label>

		<!-- email -->
		<label class="flex w-full max-w-[450px] flex-col gap-1.5 pb-3">
			<p class="pl-1.5">Email</p>
			<input
				bind:value={email}
				class="h-12 w-full rounded-lg border border-neutral-800 bg-transparent pl-3 outline-none ring-voulr-blue transition-all duration-300 ease-in-out focus:ring-2"
			/>
			<ErrorMessage
				message={$query.error?.message}
				active={$query.error?.message.includes('Email')}
				class="pl-1.5"
			/>
		</label>

		<!-- password -->
		<label class="flex w-full max-w-[450px] flex-col gap-1.5 pb-3">
			<p class="pl-1.5">Password</p>
			<div
				class="flex h-12 w-full flex-row items-center rounded-lg border border-neutral-800 bg-transparent ring-voulr-blue transition-all duration-300 ease-in-out focus:ring-2"
			>
				<input
					{...{ type: eyeState === 'OPEN' ? 'password' : 'text' }}
					bind:value={password}
					class="h-full w-full rounded-l-lg bg-transparent pl-3 outline-none"
				/>
				<Eye
					active={password.length > 0}
					bind:eyeState
					class="pr-4 text-neutral-500 hover:text-white"
				/>
			</div>
			<ErrorMessage
				message={$query.error?.message}
				active={$query.error?.message.includes('Password')}
				class="pl-1.5"
			/>
		</label>

		<button
			on:click={async () => !$query.isError && (await $query.refetch())}
			class="h-12 w-full max-w-[450px] rounded-lg bg-voulr-pink"
		>
			Continue
		</button>
	</form>
	<p class="pl-6 text-neutral-500">
		Already have an account?
		<a class="text-voulr-pink hover:brightness-75" href="/login">Sign in</a>
	</p>
</div>
