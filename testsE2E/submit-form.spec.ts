import { test, expect } from '@playwright/test'

test.describe('フィードバックフォーム', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#feedback')
  })

  test('フィードバックフォームをリセットする', async ({ page }) => {
    await page.type('#name', 'some name')
    await page.type('#email', 'some email@email.com')
    await page.type('#subject', 'some subject')
    await page.type('#comment', 'some nice comment about the application')
    await page.click('input[name="clear"]') 

    const nameInput = await page.locator('#name')
    const commentInput = await page.locator("#comment")
    await expect(nameInput).toBeEmpty()
    await expect(commentInput).toBeEmpty()
  })

  test('フィードバックフォームを送信する', async({page}) =>{
    await page.type('#name','some name')
    await page.type('#email', 'some email@email.com')
    await page.type('#subject', 'some subject')
    await page.type('#comment', 'some nice comment about the application')
    await page.click('input[type="submit"]')
    await page.waitForSelector('#feedback-title')
  })

})
