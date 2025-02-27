import { test as base } from '@playwright/test';
import { MicrosoftLogin } from '@src/pages/microsoft-login.page';

export const test = base.extend<CustomFixture>({
	email: ['', { option: true }],
	password: ['', { option: true }],
	login: async ({ page, email, password }, use) => {
		const microsoftLogin = new MicrosoftLogin(page);
		await page.goto('/');
		await microsoftLogin.login(email, password);
		await use(undefined);
	},
});
