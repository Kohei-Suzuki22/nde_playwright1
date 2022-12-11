import { test, expect } from '@playwright/test'

test.describe('前提の共通化', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com')
  })

  test('ページのスクリーンショットを撮る', async ({ page }) => {
    await page.screenshot({ path: './screenshots/page.png', fullPage: true })
  })

  test('DOM要素のスクリーンショットを撮る', async ({ page }) => {
    const locator = page.locator('h1')
    await locator.screenshot({ path: './screenshots/locator.png' })
  })
})
