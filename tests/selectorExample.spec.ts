import { test, expect } from '@playwright/test'

/**
 * selectorの代表的な指定方法の例
 */
test.skip('selector example', async ({ page }) => {
  // テキストセレクターを指定
  await page.click('text=some text')

  // cssセレクターを指定
  await page.click('button')
  await page.click('#id')
  await page.click('.class')

  // visibleなcssセレクターを指定
  await page.click('.submit-button:visible')

  // 組み合わせ ex: id=username かつ class=fistの要素
  await page.click('#username .first')

  // XPathで指定。(あんま使わないと思う)
  await page.click('//button')
})
