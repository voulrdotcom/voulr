import { t } from '$lib/trpc/t';
import { z } from 'zod';
import { hash, verify } from 'argon2';
import jwt from 'jsonwebtoken';

const registerSchema = z.object({
	username: z
		.string({ required_error: 'Username is required.' })
		.trim()
		.min(4, { message: 'Username must be at least 4 characters.' })
		.max(16, { message: 'Username must be less than 16 characters.' })
		.regex(/^[a-zA-Z0-9]+$/, {
			message: 'Username must only contain letters and numbers.'
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
		.regex(/[A-Z]/, { message: 'Password must contain an uppercase letter.' })
		.regex(/[0-9]/, { message: 'Password must contain a number.' })
		.regex(/^(?:(?!.*\s).)*$/, { message: 'Password must not contain whitespace.' })
});

const loginSchema = z.object({
	usernameOrEmail: z
		.string({ required_error: 'Username/email is required.' })
		.trim()
		.min(4, { message: 'Username/email must be at least 4 characters.' })
		.max(64, { message: 'Username/email must be less than 64 characters.' }),
	password: z
		.string({ required_error: 'Password is required.' })
		.trim()
		.min(8, { message: 'Password must be at least 8 characters.' })
		.max(64, { message: 'Password must be less than 64 characters.' })
		.regex(/[a-z]/, { message: 'Password must contain a lowercase letter.' })
		.regex(/[A-Z]/, { message: 'Password must contain an uppercase letter.' })
		.regex(/[0-9]/, { message: 'Password must contain a number.' })
		.regex(/^(?:(?!.*\s).)*$/, { message: 'Password must not contain whitespace.' })
});
export const auth = t.router({
	register: t.procedure
		.input(registerSchema)
		.query(async ({ input: { username, email, password }, ctx: { p, cookies } }) => {
			const user = await p.user.create({
				data: {
					username,
					email,
					password: await hash(password)
				}
			});

			cookies.set(
				'ACCESS_TOKEN',
				jwt.sign({ username, email, plan: user.plan }, process.env.JWT_SECRET as string, {
					expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
				}),
				{ path: '/' }
			);

			cookies.set(
				'REFRESH_TOKEN',
				jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, {
					expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN
				}),
				{ path: '/' }
			);

			return { success: true };
		}),
	login: t.procedure
		.input(loginSchema)
		.query(async ({ input: { usernameOrEmail, password }, ctx: { p, cookies } }) => {
			const user = await p.user.findFirst({
				where: {
					OR: [{ username: usernameOrEmail }, { email: usernameOrEmail }]
				}
			});

			if (!user || !(await verify(user.password, password))) {
				throw new Error('Credentials are invalid');
			}

			cookies.set(
				'ACCESS_TOKEN',
				jwt.sign(
					{ username: user.username, email: user.email, plan: user.plan },
					process.env.JWT_SECRET as string,
					{ expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
				),
				{ path: '/' }
			);

			cookies.set(
				'REFRESH_TOKEN',
				jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, {
					expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN
				}),
				{ path: '/' }
			);
			return { success: true };
		})
});
