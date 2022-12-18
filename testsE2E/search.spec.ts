import {test, expect} from '@playwright/test'


test.describe('検索結果', () => {
  
  test('検索結果が見つかる', async ({page}) =>{
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.type('#searchTerm','bank')
    await page.keyboard.press('Enter')

    const NumberOfLinks = await page.locator('li > a')
    await expect(NumberOfLinks).toHaveCount(2)
  })

})