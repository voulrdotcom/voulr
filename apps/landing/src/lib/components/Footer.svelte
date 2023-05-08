<script lang="ts">
	import voulrWhiteLockup from '@voulr/assets/svgs/voulr-white-lockup.svg';
	import { FOOTER_LINKS } from '$lib/constants/FOOTER_LINKS';
</script>

<div class="border-t border-dashed border-t-neutral-800">
	<div class="container mx-auto px-6">
		<footer class="grid grid-cols-2 gap-9 px-6 py-12 md:py-20 lg:grid-cols-6">
			<!-- logo lockup & copyright -->
			<div class="col-span-2 flex flex-col gap-3">
				<img src={voulrWhiteLockup} alt="voulr" width="100" height="100" />
				<p class="text-sm text-neutral-500">
					Copyright &copy; {new Date().getFullYear()} Voulr Inc.
				</p>
			</div>

			<!-- footer links -->
			{#each Object.keys(FOOTER_LINKS) as category}
				<div class="col-span-1 flex flex-col gap-3">
					<h2 class="pb-2 text-sm uppercase tracking-widest text-neutral-500">{category}</h2>
					{#each FOOTER_LINKS[category] as { title, href }}
						<a
							{href}
							class="w-min whitespace-nowrap text-sm text-neutral-500 hover:text-neutral-300"
						>
							{title}
						</a>
					{/each}
				</div>
			{/each}
		</footer>
	</div>
</div>
