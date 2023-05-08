import { t } from '$lib/trpc/t';
import { user } from '$lib/schemas/user';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const SES = new SESClient({
	apiVersion: '2010-12-01',
	region: 'us-east-1',
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY || '',
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ''
	}
});

export const auth = t.router({
	register: t.procedure.input(user).query(async ({ input }) => {
		return { success: true };
	})
});
