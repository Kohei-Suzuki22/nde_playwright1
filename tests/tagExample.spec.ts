import { test, expect } from '@playwright/test'



test.only('アサーション　@タグ', async ({ page }) => {
    await page.goto('https://example.com')
    await expect(page).toHaveURL('https://example.com')
    await expect(page).toHaveTitle('Example Domain')
  
    const exsistElement = page.locator('h1')
    await expect(exsistElement).toBeVisible()
  
    await expect(exsistElement).toHaveText('Example Domain')
    //locatorが存在する数を検証。 選択肢がある場合などは使えるかも。
    await expect(exsistElement).toHaveCount(1)
  
    const nonexsistElement = page.locator('h5')
    await expect(nonexsistElement).not.toBeVisible()
  })
