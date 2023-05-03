<script lang="ts">
	import { TwitterLogo, GithubLogo } from '@voulr/ui';
	import voulrText from '@voulr/assets/svgs/voulr-text.svg';
</script>

<div class="border-t border-t-neutral-700">
	<div class="container mx-auto px-6 py-12 md:py-20">
		<footer class="grid grid-cols-2 gap-9 lg:grid-cols-6">
			<div class="col-span-2 flex flex-col gap-3">
				<img src={voulrText} alt="voulr" class="w-16" />
				<p class="text-sm text-neutral-500">
					Copyright &copy; {new Date().getFullYear()} Voulr Inc.
				</p>
				<div class="flex items-center gap-1.5">
					<a href="https://twitter.com/voulrdotcom" rel="noreferrer" target="_blank">
						<TwitterLogo class="h-6 w-6 fill-neutral-500 hover:fill-neutral-300" />
					</a>
					<a href="https://github.com/vloe/voulr" rel="noreferrer" target="_blank">
						<GithubLogo class="h-6 w-6 fill-neutral-500 hover:fill-neutral-300" />
					</a>
				</div>
			</div>
			<div class="col-span-1 flex flex-col gap-3">
				<h2 class="pb-2 text-sm uppercase tracking-widest text-neutral-500">Products</h2>
				<a href="/" class="w-min whitespace-nowrap text-sm text-neutral-500 hover:text-neutral-300">
					Data Engine
				</a>
				<a href="/" class="w-mim whitespace-nowrap text-sm text-neutral-500 hover:text-neutral-300">
					Generative AI Platform
				</a>
				<a href="/" class="w-min whitespace-nowrap text-sm text-neutral-500 hover:text-neutral-300">
					Government AI Platform
				</a>
				<a href="/" class="w-min whitespace-nowrap text-sm text-neutral-500 hover:text-neutral-300">
					Spellbook
				</a>
			</div>
			<div class="col-span-1 flex flex-col gap-3">
				<h2 class="pb-2 text-sm uppercase tracking-widest text-neutral-500">Company</h2>
				<a href="/" class="w-min whitespace-nowrap text-sm text-neutral-500 hover:text-neutral-300">
					Data Engine
				</a>
				<a href="/" class="w-mim whitespace-nowrap text-sm text-neutral-500 hover:text-neutral-300">
					Generative AI Platform
				</a>
				<a href="/" class="w-min whitespace-nowrap text-sm text-neutral-500 hover:text-neutral-300">
					Government AI Platform
				</a>
				<a href="/" class="w-min whitespace-nowrap text-sm text-neutral-500 hover:text-neutral-300">
					Spellbook
				</a>
			</div>
			<div class="col-span-1 flex flex-col gap-3">
				<h2 class="pb-2 text-sm uppercase tracking-widest text-neutral-500">Resources</h2>
				<a href="/" class="w-min whitespace-nowrap text-sm text-neutral-500 hover:text-neutral-300">
					Data Engine
				</a>
				<a href="/" class="w-mim whitespace-nowrap text-sm text-neutral-500 hover:text-neutral-300">
					Generative AI Platform
				</a>
				<a href="/" class="w-min whitespace-nowrap text-sm text-neutral-500 hover:text-neutral-300">
					Government AI Platform
				</a>
				<a href="/" class="w-min whitespace-nowrap text-sm text-neutral-500 hover:text-neutral-300">
					Spellbook
				</a>
			</div>
			<div class="col-span-1 flex flex-col gap-3">
				<h2 class="pb-2 text-sm uppercase tracking-widest text-neutral-500">Contact</h2>
				<a href="/" class="w-min whitespace-nowrap text-sm text-neutral-500 hover:text-neutral-300">
					Data Engine
				</a>
				<a href="/" class="w-mim whitespace-nowrap text-sm text-neutral-500 hover:text-neutral-300">
					Generative AI Platform
				</a>
				<a href="/" class="w-min whitespace-nowrap text-sm text-neutral-500 hover:text-neutral-300">
					Government AI Platform
				</a>
				<a href="/" class="w-min whitespace-nowrap text-sm text-neutral-500 hover:text-neutral-300">
					Spellbook
				</a>
			</div>
		</footer>
	</div>
</div>
