<script lang="ts">
	import voulrText from '@voulr/assets/svgs/voulr-text.svg';
</script>

<div class="container mx-auto px-6">
	<div class="flex items-center justify-between h-[75px] bg-black w-full">
		<a href="/">
			<img src={voulrText} alt="voulr" class="w-16" />
		</a>
		<div class="hidden sm:flex flex-row gap-6">
			<a href="/" class="text-white text-sm hover:brightness-75 transition-all duration-300">
				Contact Sales
			</a>
			<a href="/login" class="text-white text-sm hover:brightness-75 transition-all duration-300">
				Log In
			</a>
		</div>
	</div>
</div>
