<script lang="ts">
	import voulrWhiteLockup from '@voulr/assets/svgs/voulr-white-lockup.svg';

	// State
	let y: number;
</script>

<div
	class={`${
		y > 20 ? 'bg-black' : 'bg-transparent'
	} fixed top-0 w-full transition-all duration-300 ease-in-out`}
>
	<div class="container mx-auto px-6">
		<nav class="flex h-[75px] w-full items-center justify-between">
			<a href="/">
				<img src={voulrWhiteLockup} alt="voulr" class="w-24" />
			</a>
			<div class="hidden items-center gap-9 lg:flex">
				<a class="text-sm text-white hover:brightness-75" href="/">Products</a>
				<a class="text-sm text-white hover:brightness-75" href="/">Solutions</a>
				<a class="text-sm text-white hover:brightness-75" href="/">Pricing</a>
				<a class="text-sm text-white hover:brightness-75" href="/">Resources</a>
			</div>
			<div class="hidden flex-row gap-6 lg:flex">
				<a
					href="https://www.app.voulr.com/register"
					class="text-sm text-white transition-all duration-300 hover:brightness-75"
				>
					Try Beta
				</a>
				<a
					href="https://www.app.voulr.com/login"
					class="text-sm text-white transition-all duration-300 hover:brightness-75"
				>
					Log In
				</a>
			</div>
			<a
				href="https://www.app.voulr.com/register"
				class="rounded-md bg-white px-3 py-1.5 text-sm lg:hidden">Try Beta</a
			>
		</nav>
	</div>
</div>
<svelte:window bind:scrollY={y} />
