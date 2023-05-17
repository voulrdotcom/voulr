import type { RequestEvent } from '@sveltejs/kit';
import type { inferAsyncReturnType } from '@trpc/server';
import { PrismaClient } from '@voulr/database';

const p = new PrismaClient();

export async function createContext(event: RequestEvent) {
    return {
        cookies: event.cookies,
        p
    };
}

export type Context = inferAsyncReturnType<typeof createContext>;
