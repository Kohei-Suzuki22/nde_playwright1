import {test, expect} from '@playwright/test'
import { HomePage } from '../page-objects/HomePage'


test.describe('検索結果', () => {
  
  test('検索結果が見つかる', async ({page}) =>{
    let homePage: HomePage = new HomePage(page)
    await homePage.visit()
    await homePage.searchFor('bank')

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