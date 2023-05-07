import { t } from '$lib/trpc/t';
import { z } from 'zod';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const SES = new SESClient({
    apiVersion: '2010-12-01',
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ''
    }
});

const userSchema = z.object({
    email: z
        .string({ required_error: 'Email is required' })
        .email({ message: 'Email must be valid' }),
    password: z
        .string({ required_error: 'Password is required' })
        .trim()
        .min(8, { message: 'Password must be at least 8 characters' })
        .max(64, { message: 'Password must be less than 64 characters' })
        .regex(/[a-z]/, { message: 'Password must contain a lowercase letter.' })
        .regex(/[A-Z]/, { message: 'Password must contain an uppercase letter.' })
        .regex(/[0-9]/, { message: 'Password must contain a number.' })
        .regex(/^(?:(?!.*\s).)*$/, { message: 'Password must not contain whitespace.' })
});

export const auth = t.router({
    register: t.procedure.input(userSchema).query(async ({ input }) => {
        return { success: true };
    })
});
