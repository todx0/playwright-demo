import 'dotenv/config';

export function getConfig(): Config {
	const email = process.env.EMAIL;
	const password = process.env.PASSWORD;

	if (!email) throw new Error('Please provide EMAIL environment variable.');
	if (!password) throw new Error('Please provide PASSWORD environment variable.');

	return { email, password };
}

export const config: Config = getConfig();
