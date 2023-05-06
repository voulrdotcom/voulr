import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';
import { ZodError } from 'zod';

export const handle: Handle = createTRPCHandle({
    router,
    createContext,
    onError: ({ error }) => {
        if (error.code === 'BAD_REQUEST' && error.cause instanceof ZodError) {
            error.message = JSON.parse(error.message)[0].message;
        }
    }
});
