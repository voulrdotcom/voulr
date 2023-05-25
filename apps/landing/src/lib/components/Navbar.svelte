<script lang="ts">
	import { ArrowButton } from '@voulr/ui';
	import { voulrWhiteLockup } from '@voulr/assets';
	import { WEB_LOCAL, WEB_SITE } from '@voulr/constants';
	import { dev } from '$app/environment';
	import { MenuBar } from '@voulr/ui';
</script>

<div class="container mx-auto px-6">
	<div class="flex h-20 items-center justify-between">
		<a href="/">
			<img src={voulrWhiteLockup} alt="voulr" width="100" height="100" />
		</a>
		<nav class="hidden items-center gap-9 lg:flex">
			<a class="text-sm text-white hover:brightness-75" href="/">Products</a>
			<a class="text-sm text-white hover:brightness-75" href="/">Solutions</a>
			<a class="text-sm text-white hover:brightness-75" href="/pricing">Pricing</a>
			<a class="text-sm text-white hover:brightness-75" href="/">Resources</a>
		</nav>
		<div class="hidden gap-6 lg:flex">
			<ArrowButton
				href={`${dev ? WEB_LOCAL : WEB_SITE}/reigster`}
				class="gap-1.5 stroke-white stroke-[1.5px] text-sm text-white transition-all duration-300 hover:brightness-75"
			>
				Try Beta
			</ArrowButton>
			<ArrowButton
				href={`${dev ? WEB_LOCAL : WEB_SITE}/reigster`}
				class="gap-1.5 stroke-white stroke-[1.5px] text-sm text-white transition-all duration-300 hover:brightness-75"
			>
				Log In
			</ArrowButton>
		</div>

		<!-- menubar (for smaller screens) -->
		<MenuBar class="h-8 stroke-white lg:hidden" />
	</div>
</div>
