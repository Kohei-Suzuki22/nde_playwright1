import { test, expect } from '@playwright/test'

test('ページのスクリーンショットを撮る', async ({ page }) => {
  await page.goto('https://example.com')
  await page.screenshot({ path: './screenshots/page.png', fullPage: true })
})

test('DOM要素のスクリーンショットを撮る', async ({ page }) => {
    await page.goto('https://example.com')
    const locator = page.locator('h1')
    await locator.screenshot({path: './screenshots/locator.png'})
})
