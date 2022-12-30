import { test, expect } from '@playwright/test'

test.describe('Tips & Tricks', () => {
  test('マウス操作', async ({ page }) => {
    await page.goto('https://www.example.com')
    await page.mouse.move(0, 0)
    await page.mouse.down()
    await page.mouse.move(0, 100)
    await page.mouse.up()
  })
})
