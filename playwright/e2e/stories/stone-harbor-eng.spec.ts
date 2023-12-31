import { expect, test } from '@playwright/test'

test.describe('Full test of the English Stone Harbor demo', () => {
    test('Checks that Stone Harbor English works', async ({ page }) => {
        await page.goto('/stone-harbor')
        await page.getByRole('link').filter({ hasText: 'clothes' }).click()
        await page.getByRole('link').filter({ hasText: 'ring' }).click()
        await page.getByRole('link').filter({ hasText: 'Nancy?' }).click()
        await page.getByRole('link').filter({ hasText: 'Nadine?' }).click()
        await page.getByRole('link').filter({ hasText: 'appearance' }).click()
        await page.getByRole('link').filter({ hasText: 'sunburn' }).click()
        await expect(page.getByText('pick up some cues')).toBeVisible()
        await expect(page.getByText('time outdoors')).toBeVisible()
        await expect(page.getByText('His ring also')).toBeVisible()
        await page.getByRole('link').filter({ hasText: 'card' }).click()
        await expect(page.getByText('which you flip over')).toBeVisible()
        await page.getByRole('link').filter({ hasText: 'glove' }).click()
        await page.getByRole('link').filter({ hasText: 'glove' }).click()
        await expect(page.getByText('and everything changes')).toBeVisible()
        await expect(page.locator('img[alt*="small, cluttered"]')).toBeVisible()
        await page.getByRole('link').filter({ hasText: 'knickknacks' }).click()
        await page.getByRole('link').filter({ hasText: 'photograph' }).click()
        await expect(page.getByText('personal effects')).toBeVisible()
        await expect(page.getByText('You examine the picture')).toBeVisible()
        await page.getByRole('link').filter({ hasText: 'angry glove' }).click()
        await expect(page.getByText('Healey was murdered')).toBeVisible()
    })
})
