import { dev } from '$app/environment';
import { FetchTransport, createClient } from '@rspc/client';
import type { Procedures } from '$lib/types/bindings';

export const client = createClient<Procedures>({
	transport: new FetchTransport(`${dev ? 'http://localhost:8080' : 'https://app.voulr.com'}/rspc`)
});
