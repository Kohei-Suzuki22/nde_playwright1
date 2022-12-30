import { test, expect } from '@playwright/test'

const people = ['Mike', 'Judy', 'Peter', 'Elon', 'Alice']

/**
 * ループで実行すると並列実行できないと思っていたが、出来る。
 * 
 * ループでテストを実行しても、同時並列でテストを起動してくれる。
 */


for (const name of people) {
  test(`forLoop Test ${name}`, async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.type('#searchTerm', `${name}`)
    await page.waitForTimeout(3000)
  })
}
