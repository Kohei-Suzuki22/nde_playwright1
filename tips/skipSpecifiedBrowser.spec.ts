import { test, expect } from '@playwright/test'

test.describe('Tips & Tricks', () => {
  test('Test Skip Specified Browser', async ({ page, browserName }) => {
    // テストを実行するブラウザ名
    console.log(browserName)
    console.log('testObject', test)
    test.skip(
      browserName === 'chromium',
      'chromeで動作する機能がまだ未開発のため'
    )
    await page.goto('https://www.example.com')
  })
})
