import { z } from 'zod';

export const user = z.object({
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
