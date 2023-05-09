<script lang="ts">
	import { trpc } from '$lib/trpc/client';
	import { page } from '$app/stores';
	import voulrWhiteLockup from '@voulr/assets/svgs/voulr-white-lockup.svg';
	import ErrorMessage from '$lib/components/ErrorMessage.svelte';

	let usernameOrEmail: string;
	let password: string;

	$: query = trpc($page).auth.login.createQuery({
		usernameOrEmail,
		password
	});
</script>

<div class="flex h-full w-full flex-col items-center justify-center">
	<div class="flex w-[350px] max-w-[550px] flex-col justify-center gap-9 py-16 min-[700px]:w-1/2">
		<img src={voulrWhiteLockup} alt="voulr" class="ml-5 w-24" />
		<div class="flex w-full justify-center rounded-lg border border-neutral-800 bg-neutral-950">
			<form
				class="flex w-11/12 flex-col items-center justify-center py-12 min-[700px]:w-3/4 min-[700px]:py-16"
			>
				<h1 class="w-full pb-9 text-left text-2xl text-white">Sign in to your account</h1>

				<!--kusername or email -->
				<label
					class={`${
						$query.isError && $query.error.message.includes('Username or email') ? 'pb-9' : 'pb-6'
					} relative flex w-full flex-col text-neutral-400 transition-all duration-300 ease-in-out`}
				>
					<p class="pb-1.5 pl-1.5">Username or email</p>
					<input
						bind:value={usernameOrEmail}
						class="h-12 w-full rounded-lg border border-neutral-800 bg-transparent pl-3 outline-none ring-voulr-blue transition-all duration-300 ease-in-out focus:ring-2"
					/>
					<ErrorMessage message={$query.error?.message} includes={'Username or email'} />
				</label>

				<!-- password -->
				<label
					class={`${
						$query.isError && $query.error.message.includes('Password') ? 'pb-9' : 'pb-6'
					} relative flex w-full flex-col text-neutral-400 transition-all duration-300 ease-in-out`}
				>
					<p class="pb-1.5 pl-1.5">Password</p>
					<input
						type="password"
						bind:value={password}
						class=" h-12 w-full rounded-lg border border-neutral-800 bg-transparent pl-3 outline-none ring-voulr-blue transition-all duration-300 ease-in-out focus:ring-2"
					/>
					<ErrorMessage message={$query.error?.message} includes={'Password'} />
				</label>
				<button
					on:click={async () => await $query.refetch()}
					class="h-12 w-full rounded-lg bg-voulr-pink text-white"
				>
					Continue
				</button>
			</form>
		</div>
		<p class="ml-5 text-neutral-500">
			Don't have an account?
			<a class="text-voulr-pink hover:brightness-75" href="/register">Sign up</a>
		</p>
	</div>
</div>
