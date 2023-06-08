<script lang="ts">
	import { ArrowButton } from '@voulr/ui';
	import { voulrLockup } from '@voulr/assets';
	import { MenuBar } from '@voulr/ui';
</script>

<div class="container mx-auto px-6">
	<div class="flex h-20 items-center justify-between">
		<a href="/">
			<img src={voulrLockup} alt="voulr" width="100" height="100" />
		</a>
		<nav class="hidden items-center gap-9 lg:flex">
			<a class="hover:text-neutral-500" href="/">products</a>
			<a class="hover:text-neutral-500" href="/">solutions</a>
			<a class="hover:text-neutral-500" href="/">pricing</a>
			<a class="hover:text-neutral-500" href="/">resources</a>
		</nav>
		<div class="hidden gap-6 stroke-black transition-all duration-300 lg:flex">
			<ArrowButton href="/" class="gap-1.5 hover:stroke-neutral-500 hover:text-neutral-500">
				try beta
			</ArrowButton>
			<ArrowButton href="/" class="gap-1.5 hover:stroke-neutral-500 hover:text-neutral-500">
				log in
			</ArrowButton>
		</div>

		<!-- menubar (for smaller screens) -->
		<MenuBar class="h-8 stroke-black lg:hidden" />
	</div>
</div>
