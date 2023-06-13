import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	const user = event.locals.user;
	const routeId = event.route.id;

	// redirect on invalid or protected route
	if (routeId?.startsWith('/(protected)')) {
		if (!user) throw redirect(303, '/login');
		// if (!user.emailVerified) throw redirect(303, '/verify-email');
	}

	const response = await resolve(event);
	return response;
}) satisfies Handle;
