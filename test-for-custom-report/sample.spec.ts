import { test, expect } from '@playwright/test'

test('test for custom reporter', async ({ page }) => {
  await page.goto('https://playwright.dev/')
  const title = page.locator('.navbar__inner .navbar__title')
  await expect(title).toHaveText('Playwright')
})
