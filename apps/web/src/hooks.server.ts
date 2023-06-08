import type { Handle } from '@sveltejs/kit';
import { publicRoutes } from '$lib/constants/publicRoutes';
import { redirect } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
    if (!publicRoutes.includes(event.url.pathname)) {
        throw redirect(303, event.locals.user ? '/' : '/login');
    }

    const response = await resolve(event);
    return response;
}) satisfies Handle;
