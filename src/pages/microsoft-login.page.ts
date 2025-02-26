import type { Page, Locator } from '@playwright/test';

export class MicrosoftLogin {
	readonly btnSignIn: Locator;
	readonly btnNext: Locator;
	readonly txtEmail: Locator;
	readonly txtPassword: Locator;
	readonly btnHeaderSignIn: Locator;
	readonly lblStaySignedIn: Locator;
	readonly btnNo: Locator;

	constructor(readonly page: Page) {
		this.txtEmail = this.page.getByRole('textbox', { name: /email|phone/i });
		this.txtPassword = this.page.getByTestId('i0118');
		this.btnSignIn = this.page.getByRole('button', { name: 'Sign in' });
		this.btnNext = this.page.getByRole('button', { name: 'Next' });
		this.btnHeaderSignIn = this.page.getByTestId('0100');
		this.lblStaySignedIn = this.page.getByRole('heading', { name: 'Stay signed in?' });
		this.btnNo = this.page.getByRole('button', { name: 'No' });
	}

	async login(email: string, password: string): Promise<void> {
		await this.btnHeaderSignIn.click();
		await this.txtEmail.fill(email);
		await this.btnNext.click();
		await this.txtPassword.fill(password);
		await this.btnSignIn.click();

		// Skip 'Stay signed in?'
		await this.lblStaySignedIn.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
		if (await this.lblStaySignedIn.isVisible()) await this.btnNo.click();
	}
}
