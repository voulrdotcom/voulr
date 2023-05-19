<script lang="ts">
	import { page } from '$app/stores';
	import voulrWhiteLockup from '@voulr/assets/svgs/voulr-white-lockup.svg';

	// page data
	$: user = $page.data.user;
</script>

<div class="container mx-auto flex max-w-[550px] flex-col gap-6 px-6 py-16">
	<img src={voulrWhiteLockup} alt="voulr" class="ml-6 w-24" />
	<div
		class="flex w-full flex-col items-center gap-6 rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-14 text-white"
	>
		<h1 class="w-full max-w-[400px] text-left text-2xl">First, let's verify your email</h1>
		<p class="w-full max-w-[400px] text-left">
			Check <span class="font-medium">{user.email}</span> to verify your account and get started.
		</p>
		<div class="flex w-full max-w-[400px] flex-row items-start gap-3">
			<a
				target="_blank"
				rel="noreferrer"
				href={`https://mail.google.com/mail/u/${user.email}/#search/from:notifications@voulr.com`}
				class="rounded-lg bg-voulr-pink px-3 py-1.5">Open Gmail</a
			>
			<button class="rounded-lg border border-neutral-800 px-3 py-1.5">Resend email</button>
		</div>
	</div>
</div>
