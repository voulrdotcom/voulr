import { createClient, FetchTransport } from '@rspc/client';
import type { Procedures } from './bindings';
import { SERVER_LOCAL, SERVER_SITE } from '@voulr/constants';
import { dev } from '$app/environment';

export const client = createClient<Procedures>({
    transport: new FetchTransport(`${dev ? SERVER_LOCAL : SERVER_SITE}/rspc`)
});
