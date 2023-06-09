import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
    if (event.url.pathname === '/login' || event.url.pathname === '/register') {
        throw redirect(303, '/');
    }

    const response = await resolve(event);
    return response;
}) satisfies Handle;
