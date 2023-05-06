import type { Context } from '$lib/trpc/context';
import { initTRPC } from '@trpc/server';
import { auth } from '$lib/trpc/routes/auth';

export const t = initTRPC.context<Context>().create();

export const router = t.router({
    auth
});

export type Router = typeof router;
