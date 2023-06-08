<script lang="ts">
	import { voulrLockup } from '@voulr/assets';
	import { footerUrls } from '$lib/constants/footerUrls';
</script>

<div class="border-t border-t-neutral-300">
	<div class="container mx-auto px-6">
		<footer class="grid grid-cols-2 gap-9 px-6 py-12 md:py-20 lg:grid-cols-6">
			<div class="col-span-2 flex flex-col gap-3">
				<img src={voulrLockup} alt="voulr" width="100" height="100" />
				<p class="text-sm">
					copyright &copy; {new Date().getFullYear()} voulr inc.
				</p>
			</div>

			{#each Object.keys(footerUrls) as key}
				<div class="col-span-1 flex flex-col gap-3">
					<h2 class="pb-2 tracking-widest">
						{key}
					</h2>
					{#each footerUrls[key] as { label, url }}
						<a href={url} class="w-min whitespace-nowrap text-sm hover:text-neutral-500">
							{label}
						</a>
					{/each}
				</div>
			{/each}
		</footer>
	</div>
</div>
