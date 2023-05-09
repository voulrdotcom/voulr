import { t } from '$lib/trpc/t';
import { p } from '$lib/prisma/p';
import { z } from 'zod';

const registerSchema = z.object({
    username: z
        .string({ required_error: 'Username is required.' })
        .trim()
        .min(4, { message: 'Username must be at least 4 characters.' })
        .max(16, { message: 'Username must be less than 16 characters.' })
        .regex(/^[a-za-z0-9_]+$/, {
            message: 'Username must only contain letters, numbers, and underscores.'
        }),
    email: z
        .string({ required_error: 'Email is required.' })
        .email({ message: 'Email must be valid.' }),
    password: z
        .string({ required_error: 'Password is required.' })
        .trim()
        .min(8, { message: 'Password must be at least 8 characters.' })
        .max(64, { message: 'Password must be less than 64 characters.' })
        .regex(/[a-z]/, { message: 'Password must contain a lowercase letter.' })
        .regex(/[a-z]/, { message: 'Password must contain an uppercase letter.' })
        .regex(/[0-9]/, { message: 'Password must contain a number.' })
        .regex(/^(?:(?!.*\s).)*$/, { message: 'Password must not contain whitespace.' })
});

const loginSchema = z.object({
    usernameOrEmail: z
        .string({ required_error: 'Username or email is required.' })
        .trim()
        .min(4, { message: 'Username or email must be at least 4 characters.' })
        .max(64, { message: 'Username or email must be less than 64 characters.' }),
    password: z
        .string({ required_error: 'Password is required.' })
        .trim()
        .min(8, { message: 'Password must be at least 8 characters.' })
        .max(64, { message: 'Password must be less than 64 characters.' })
        .regex(/[a-z]/, { message: 'Password must contain a lowercase letter.' })
        .regex(/[a-z]/, { message: 'Password must contain an uppercase letter.' })
        .regex(/[0-9]/, { message: 'Password must contain a number.' })
        .regex(/^(?:(?!.*\s).)*$/, { message: 'Password must not contain whitespace.' })
});
export const auth = t.router({
    register: t.procedure.input(registerSchema).query(async ({ input }) => {
        return { success: true };
    }),
    login: t.procedure.input(loginSchema).query(async ({ input }) => {
        return { success: true };
    })
});
