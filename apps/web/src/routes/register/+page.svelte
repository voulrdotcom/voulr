<script lang="ts">
	import { trpc } from '$lib/trpc/client';
	import { page } from '$app/stores';
	import voulrWhiteLockup from '@voulr/assets/svgs/voulr-white-lockup.svg';

	let email: string;
	let password: string;

	$: query = trpc($page).auth.register.createQuery({
		email,
		password
	});
</script>

<div class="flex h-screen w-full flex-col items-center justify-center">
	<div class="flex w-[350px] max-w-[550px] flex-col justify-center gap-6 min-[700px]:w-1/2">
		<img src={voulrWhiteLockup} alt="voulr" class="ml-5 w-24" />
		<div class="flex w-full justify-center rounded-lg border border-neutral-800">
			<form
				class="flex w-11/12 flex-col items-center justify-center gap-9 py-16 text-white min-[700px]:w-3/4 min-[700px]:py-20"
			>
				<h1 class="w-full text-left text-2xl">Create your account</h1>
				<label class="flex w-full flex-col gap-1.5">
					<p class="pl-1.5">Email</p>
					<input
						bind:value={email}
						class="h-12 w-full rounded-lg border border-neutral-800 bg-transparent pl-3 outline-none ring-voulr-blue transition-all duration-300 ease-in-out focus:ring-2"
					/>
					{#if $query.isError && $query.error.message.includes('Email')}
						<p class="pl-1.5 text-sm text-red-500">
							{$query.error.message}
						</p>
					{/if}
				</label>
				<label class="flex w-full flex-col gap-1.5">
					<p class="pl-1.5">Password</p>
					<input
						type="password"
						bind:value={password}
						class="h-12 w-full rounded-lg border border-neutral-800 bg-transparent pl-3 outline-none ring-voulr-blue transition-all duration-300 ease-in-out focus:ring-2"
					/>
					{#if $query.isError && $query.error.message.includes('Password')}
						<p class="pl-1.5 text-sm text-red-500">
							{$query.error.message}
						</p>
					{/if}
				</label>
				<button
					on:click={async () => await $query.refetch()}
					class="h-12 w-full rounded-lg bg-voulr-pink"
				>
					Continue
				</button>

				<p class="ml-5 text-neutral-500">
					Already have an account?
					<a class="text-voulr-pink hover:brightness-75" href="/login">Sign In</a>
				</p>
			</form>
		</div>
	</div>
</div>
