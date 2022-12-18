import { test, expect } from '@playwright/test'

test.describe('送金と支払い', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button')
    await page.type('#user_login', 'username')
    await page.type('#user_password', 'password')
    await page.click('text=Sign in')
    await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')

  })

  test('送金', async ({ page }) => {
    await page.click('#transfer_funds_tab')

    /**
     * selectOptionで、selectタブの選択肢を選択することができる。
     * 
     * page.locator('selector').selectOption(Value) : Valueが一致しているものを選択できる。
     * page.locator('selector).selectOption({ label: LabelName }) ラベル名(画面表示名)で選択することもできる。
     * 
     */  
    await page.selectOption('#tf_fromAccountId', '2')
    await page.selectOption('#tf_toAccountId', '3')
    await page.type('#tf_amount', '500')
    await page.type('#tf_description', 'Test message')
    await page.click('#btn_submit')

    
    const borderHeader = await page.locator('h2.board-header')
    await expect(borderHeader).toContainText('Verify')
    await page.click('#btn_submit')

    const message = await page.locator('.alert-success')
    await expect(message).toContainText(
      'You successfully submitted your transaction.'
    )


  })
})
