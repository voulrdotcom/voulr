<script>
	import '../app.css';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	// tanstack query
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: false,
				retry: false
			}
		}
	});
</script>

<QueryClientProvider client={queryClient}>
	<slot />
</QueryClientProvider>
