import { createClient, FetchTransport } from '@rspc/client';
import type { Procedures } from '$lib/types/bindings';
import { dev } from '$app/environment';

export const client = createClient<Procedures>({
    transport: new FetchTransport(`${dev ? 'http://localhost:8080' : 'https://voulr.com'}/rspc`)
});
