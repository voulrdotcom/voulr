<script>
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	// vercel analytics
	inject({ mode: dev ? 'development' : 'production' });

	// tanstack query
	const queryClient = new QueryClient({
		//defaultOptions: {
		//	queries: {
		//		enabled: false,
		//		retry: false
		//	}
		//}
	});
</script>

<QueryClientProvider client={queryClient}>
	<slot />
</QueryClientProvider>
