import { test, expect } from '@playwright/test'

test.describe('Tips & Tricks', () => {
  test('Test Fixme Annotation', async ({ page, browserName }) => {
    // test.fixme(situation, description)
    test.fixme(
      browserName === 'chromium',
      'テストが不安定であるため、修正が必要。'
    )
    await page.goto('https://www.example.com')
  })
})
