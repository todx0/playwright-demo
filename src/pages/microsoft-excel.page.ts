import type { Page, Locator, FrameLocator } from '@playwright/test';

export class MicrosoftExcel {
	readonly iframe: FrameLocator;

	readonly btnCreateBlankWorkbook: Locator;
	readonly txtCellInput: Locator;
	readonly txtFormulaBar: Locator;
	readonly btnCommitEdit: Locator;
	readonly txtGridContent: Locator;
	readonly btnGotIt: Locator;
	readonly currentCellWrapper: Locator;

	constructor(readonly page: Page) {
		this.iframe = this.page.frameLocator('iframe[name="WacFrame_Excel_0"]');
		this.currentCellWrapper = this.iframe.locator('#m_excelWebRenderer_ewaCtl_readoutElementWrapper');
		this.txtCellInput = this.iframe.getByRole('combobox', { name: 'Name Box' });
		this.btnCommitEdit = this.iframe.getByRole('button', { name: 'commit edit' });

		this.btnCreateBlankWorkbook = this.page.getByTestId('0300');
		this.txtFormulaBar = this.page
			.locator('iframe[name="WacFrame_Excel_0"]')
			.contentFrame()
			.getByRole('textbox', { name: 'formula bar' })
			.locator('div');
	}

	async createBlankWorkbook() {
		await this.btnCreateBlankWorkbook.waitFor({ state: 'visible' });
		await this.btnCreateBlankWorkbook.click();
	}

	async selectCell(cell: string) {
		await this.txtCellInput.waitFor({ state: 'visible' });
		await this.txtCellInput.click();
		await this.txtCellInput.fill(cell);
		await this.page.keyboard.press('Enter');
	}

	async typeFormula(formula: string) {
		await this.txtFormulaBar.waitFor({ state: 'visible' });
		await this.txtFormulaBar.click();
		await this.page.keyboard.press('Control+A');
		await this.page.keyboard.press('Delete');
		await this.page.keyboard.type(formula, { delay: 50 });
	}

	async commitCellEdit() {
		await this.btnCommitEdit.waitFor({ state: 'visible' });
		await this.btnCommitEdit.click();
	}

	async getActiveCellContent() {
		await this.currentCellWrapper.waitFor({ state: 'attached' });
		const ariaLabel = await this.currentCellWrapper.locator('label').first().getAttribute('aria-label');
		const [cellContent] = ariaLabel.split(' . ');
		return cellContent;
	}
}
