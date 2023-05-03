<script>
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<Navbar />
<slot />
<Footer />
