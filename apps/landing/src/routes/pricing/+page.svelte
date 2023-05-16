<script lang="ts">
	import { ArrowButton } from '@voulr/ui';
</script>

<div class="container mx-auto px-6">
	<div class="flex w-full flex-col items-center justify-center">
		<!--heading -->
		<h1 class="pb-3 pt-20 text-5xl text-white">Pricing</h1>
		<p class="text-white">Find a plan to power your projects</p>

		<!-- plans -->
		<div
			class="grid w-full max-w-[1250px] grid-cols-1 place-items-center gap-3 px-3 py-20 sm:grid-cols-2 lg:grid-cols-3"
		>
			<!--hobby -->
			<div
				class="col-span-1 flex h-[450px] w-full flex-col justify-between rounded-lg border border-neutral-800 p-9 lg:h-[500px] lg:max-w-[400px]"
			>
				<div class="flex flex-col gap-1.5">
					<h3 class="text-voulr-blue">Hobby</h3>
					<h2 class="text-3xl font-semibold text-white">$0</h2>
					<p class="text-neutral-500">For personal or non-commercial projects.</p>
				</div>
				<div class="flex flex-col gap-1.5">
					<p class="text-neutral-500">Deploy from CLI or personal git integrations</p>
					<p class="text-neutral-500">Built-in CI/CD</p>
					<p class="text-neutral-500">Automatic HTTPS/SSL</p>
					<p class="text-neutral-500">Previews for every git push</p>
				</div>
				<ArrowButton
					href="/"
					class="h-12 w-full justify-between rounded-lg border border-voulr-blue stroke-white stroke-2 px-3 text-white transition-all duration-300 ease-in-out hover:bg-voulr-blue"
				>
					Start now
				</ArrowButton>
			</div>

			<!--pro -->
			<div
				class="col-span-1 flex h-[450px] w-full flex-col justify-between rounded-lg border border-neutral-800 p-9 lg:h-[500px] lg:max-w-[400px]"
			>
				<div class="flex flex-col gap-1.5">
					<h3 class="text-voulr-pink">Pro</h3>
					<h2 class="text-3xl font-semibold text-white">$25</h2>
					<p class="text-neutral-500">For personal or non-commercial projects.</p>
				</div>
				<div class="flex flex-col gap-1.5">
					<p class="text-neutral-500">Deploy from CLI or personal git integrations</p>
					<p class="text-neutral-500">Built-in CI/CD</p>
					<p class="text-neutral-500">Automatic HTTPS/SSL</p>
					<p class="text-neutral-500">Previews for every git push</p>
				</div>
				<ArrowButton
					href="/"
					class="h-12 w-full justify-between rounded-lg border border-voulr-pink stroke-white stroke-2 px-3 text-white transition-all duration-300 ease-in-out hover:bg-voulr-pink"
				>
					Start a free trial
				</ArrowButton>
			</div>

			<!--business -->
			<div
				class="col-span-1 flex h-[450px] w-full flex-col justify-between rounded-lg border border-neutral-800 p-9 lg:h-[500px] lg:max-w-[400px]"
			>
				<div class="flex flex-col gap-1.5">
					<h3 class="text-voulr-purple">Business</h3>
					<h2 class="text-3xl font-semibold text-white">$350</h2>
					<p class="text-neutral-500">For personal or non-commercial projects.</p>
				</div>
				<div class="flex flex-col gap-1.5">
					<p class="text-neutral-500">Deploy from CLI or personal git integrations</p>
					<p class="text-neutral-500">Built-in CI/CD</p>
					<p class="text-neutral-500">Automatic HTTPS/SSL</p>
					<p class="text-neutral-500">Previews for every git push</p>
				</div>
				<ArrowButton
					href="/"
					class="h-12 w-full justify-between rounded-lg border border-voulr-purple stroke-white stroke-2 px-3 text-white transition-all duration-300 ease-in-out hover:bg-voulr-purple"
				>
					Start a free trial
				</ArrowButton>
			</div>
		</div>
	</div>
</div>
