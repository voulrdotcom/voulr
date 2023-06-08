<script>
	import { page } from '$app/stores';
</script>

<div class="flex h-screen w-full flex-col items-center justify-center gap-3">
	<h1 class="text-7xl">{$page.status}</h1>
	<p>{$page.error?.message}</p>
</div>
