import { expect } from '@playwright/test';
import { test } from '@src/fixtures/test';
import { config } from '@src/config/config';
import { MicrosoftExcel } from '@src/pages/microsoft-excel.page';
import { getCurrentDateForLocale } from '@src/utils/utils';

test.use({ email: config.email, password: config.password });

test.describe('Excel Online', () => {
	test('TODAY() Function test', async ({ login, page }) => {
		const excel = new MicrosoftExcel(page);
		const currentDate = getCurrentDateForLocale('en-GB');
		const cell = 'A10';

		await excel.createBlankWorkbook();
		await excel.selectCell(cell);
		await excel.typeFormula('=TODAY()');
		await excel.commitCellEdit();
		await excel.selectCell(cell);

		await page.waitForTimeout(5000);

		const cellContent = await excel.getActiveCellContent();

		expect(cellContent).toBe(currentDate);
	});
});
