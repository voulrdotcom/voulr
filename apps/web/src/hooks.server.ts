import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';
import { ZodError } from 'zod';
import { sequence } from '@sveltejs/kit/hooks';
import jwt from 'jsonwebtoken';
import { error } from '@sveltejs/kit';
import { PrismaClient } from '@voulr/database';

const p = new PrismaClient();

const first: Handle = createTRPCHandle({
    router,
    createContext,
    onError: ({ error }) => {
        if (error.code === 'BAD_REQUEST' && error.cause instanceof ZodError) {
            error.message = JSON.parse(error.message)[0].message;
        }
    },
    // @ts-ignore
    responseMeta: ({ ctx, type }) => {
        if (ctx && (type === 'mutation' || type === 'query')) {
            const { cookies } = ctx;
            return {
                headers: {
                    'set-cookie': cookies
                        .getAll()
                        .map(({ name, value }) => cookies.serialize(name, value, { path: '/' }))
                }
            };
        }
        return {};
    }
});

const second = (async ({ event, resolve }) => {
    let accessToken = event.cookies.get('ACCESS_TOKEN');
    const refreshToken = event.cookies.get('REFRESH_TOKEN');

    // refresh accesstoken if needed
    if (refreshToken && !accessToken) {
        const { userId } = <jwt.RefreshToken>jwt.verify(refreshToken, process.env.JWT_SECRET as string);
        const { username, email, plan } = await p.user.findFirstOrThrow({ where: { id: userId } });
        event.cookies.set(
            'ACCESS_TOKEN',
            jwt.sign({ username, email, plan }, process.env.JWT_SECRET as string, {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
            }),
            { path: '/' }
        );
        accessToken = event.cookies.get('ACCESS_TOKEN');
    }

    // set user from access token
    if (accessToken) {
        const { username, email, plan } = <jwt.AccessToken>(
            jwt.verify(accessToken, process.env.JWT_SECRET as string)
        );
        event.locals.user = { username, email, plan };
    }

    // procteced routing
    const publicRoutes = ['/', '/login', '/register'];
    if (!event.locals.user && !publicRoutes.includes(event.url.pathname)) {
        throw error(401, 'UNAUTHORIZED');
    }

    const response = await resolve(event);
    return response;
}) satisfies Handle;

export const handle = sequence(first, second);
