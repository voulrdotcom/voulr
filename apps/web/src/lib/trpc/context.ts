import type { RequestEvent } from '@sveltejs/kit';
import type { inferAsyncReturnType } from '@trpc/server';
import { PrismaClient } from '@prisma/client';

const p = new PrismaClient();

export async function createContext(event: RequestEvent) {
    return {
        p
    };
}

export type Context = inferAsyncReturnType<typeof createContext>;
