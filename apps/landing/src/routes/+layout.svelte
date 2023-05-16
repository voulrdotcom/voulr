<script>
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';

	// vercel analytics
	inject({ mode: dev ? 'development' : 'production' });
</script>

<main class="border-x border-dashed border-neutral-800">
	{#if $page.error}
		<slot />
	{:else}
		<Navbar />
		<slot />
		<Footer />
	{/if}
</main>
