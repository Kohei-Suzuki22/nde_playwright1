import {test, expect} from '@playwright/test'


test.describe('検索結果', () => {
  
  test('検索結果が見つかる', async ({page}) =>{
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.type('#searchTerm','bank')
    await page.keyboard.press('Enter')

    /**
     *   selector の　「>」 と　「>>」の違い
     * 
     *   'XXX > YYY' は、CSSセレクターを階層的に取得する。
     *   'XXX >> YYY' は、CSSセレクターと、テキストセレクターなどを組み合わせて階層的に取得することができる。
     * 
     *   ※　li > text='hello' は無理だが、
     *      li >> text='hello' は可能。
     */

    const NumberOfLinks = await page.locator('li > a')
    await expect(NumberOfLinks).toHaveCount(2)
  })

})