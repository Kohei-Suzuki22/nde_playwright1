import { test, expect } from '@playwright/test'

test.describe('Tips & Tricks', () => {
  test('retry Test', async ({ page, browserName }) => {
    /**
     * テスト実行の際に、retriesを指定すれば、失敗した時のみ、リトライすることができる。
     * 成功した際は、リトライせず、一回で終わる。
     * node_playwright1 % npx playwright test retry.spec.ts --retries=3
     * 
     * 
     */

    await page.goto('httpsss//www.example.com')
  })
})
