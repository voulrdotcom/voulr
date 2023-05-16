<script lang="ts">
	import { trpc } from '$lib/trpc/client';
	import { page } from '$app/stores';
	import voulrWhiteLockup from '@voulr/assets/svgs/voulr-white-lockup.svg';
	import { ErrorMessage } from '@voulr/ui';

	let usernameOrEmail: string;
	let password: string;

	$: query = trpc($page).auth.login.createQuery({
		usernameOrEmail,
		password
	});
</script>

<div class="container mx-auto flex max-w-[600px] flex-col gap-6 px-6 py-16">
	<img src={voulrWhiteLockup} alt="voulr" class="ml-6 w-24" />
	<form
		class="flex w-full flex-col items-center rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-14 text-white"
	>
		<h1 class="w-full max-w-[450px] pb-1.5 text-left text-2xl">Sign in to your account</h1>
		<ErrorMessage
			active={$query.isError &&
				!['Username/email', 'Password'].some(
					(i) => $query.error.message.split(' ').indexOf(i) >= 0
				)}
			message={$query.error?.message}
			class="w-full max-w-[450px] pb-6 text-left"
		/>

		<!-- username or email -->
		<label class="flex w-full max-w-[450px] flex-col gap-1.5 pb-3">
			<p class="pl-1.5">Username or email</p>
			<input
				bind:value={usernameOrEmail}
				class="h-12 w-full rounded-lg border border-neutral-800 bg-transparent pl-3 outline-none ring-voulr-blue transition-all duration-300 ease-in-out focus:ring-2"
			/>
			<ErrorMessage
				message={$query.error?.message}
				active={$query.error?.message.includes('Username/email')}
				class="pl-1.5"
			/>
		</label>

		<!-- password -->
		<label class="flex w-full max-w-[450px] flex-col gap-1.5 pb-3">
			<p class="pl-1.5">Password</p>
			<input
				type="password"
				bind:value={password}
				class=" h-12 w-full rounded-lg border border-neutral-800 bg-transparent pl-3 outline-none ring-voulr-blue transition-all duration-300 ease-in-out focus:ring-2"
			/>
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
		Don't have an account?
		<a class="text-voulr-pink hover:brightness-75" href="/register">Sign up</a>
	</p>
</div>
