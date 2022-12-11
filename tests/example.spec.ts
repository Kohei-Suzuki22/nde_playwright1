import { test, expect } from '@playwright/test'

test('Simple Basic test', async ({ page }) => {
  await page.goto('https://www.example.com')
  const pageTitle = await page.locator('h1')
  await expect(pageTitle).toContainText('Example Domain --FAIL')
})
