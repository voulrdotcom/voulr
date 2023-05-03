<script lang="ts">
	import voulrText from '@voulr/assets/svgs/voulr-text.svg';

	// State
	let y: number;
</script>

<svelte:window bind:scrollY={y} />
<div
	class={`${
		y > 20 ? 'bg-neutral-400/20 backdrop-blur-3xl' : 'bg-transparent'
	} fixed top-0 w-full transition-all duration-300 ease-in-out`}
>
	<div class="container mx-auto px-6">
		<nav class="flex h-[75px] w-full items-center justify-between">
			<a href="/">
				<img src={voulrText} alt="voulr" class="w-16" />
			</a>
			<div class="hidden items-center gap-9 lg:flex">
				<a class="text-sm text-white hover:brightness-75" href="/">Products</a>
				<a class="text-sm text-white hover:brightness-75" href="/">Solutions</a>
				<a class="text-sm text-white hover:brightness-75" href="/">Pricing</a>
				<a class="text-sm text-white hover:brightness-75" href="/">Resources</a>
			</div>
			<div class="hidden flex-row gap-6 lg:flex">
				<a href="/" class="text-sm text-white transition-all duration-300 hover:brightness-75">
					Book a Demo
				</a>
				<a href="/login" class="text-sm text-white transition-all duration-300 hover:brightness-75">
					Log In
				</a>
			</div>
			<button class="rounded-md bg-white px-3 py-1.5 text-sm lg:hidden">Book a Demo</button>
		</nav>
	</div>
</div>
