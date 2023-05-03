<script lang="ts">
	import voulrText from '@voulr/assets/svgs/voulr-text.svg';
</script>

<div class="container mx-auto px-6">
	<div class="flex h-[75px] w-full items-center justify-between bg-black">
		<a href="/">
			<img src={voulrText} alt="voulr" class="w-16" />
		</a>
		<div class="hidden flex-row gap-6 lg:flex">
			<a href="/" class="text-sm text-white transition-all duration-300 hover:brightness-75">
				Contact Sales
			</a>
			<a href="/login" class="text-sm text-white transition-all duration-300 hover:brightness-75">
				Log In
			</a>
		</div>
	</div>
</div>
