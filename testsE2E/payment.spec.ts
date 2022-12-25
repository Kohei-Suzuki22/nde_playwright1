import { test, expect } from '@playwright/test'
import { HomePage } from '../page-objects/HomePage'
import { LoginPage } from '../page-objects/LoginPage'

test.describe('新規支払い', () => {
  let homePage: HomePage
  let loginPage:  LoginPage
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    loginPage = new LoginPage(page)

    await homePage.visit()
    await homePage.clickOnSignIn()

    await loginPage.login('username','password')
    await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')

  })

  test('新規支払いの送信が可能であること', async ({ page }) => {
    await page.click('#pay_bills_tab')
    await page.selectOption('#sp_payee', 'apple')
    await page.click('#sp_get_payee_details')
    await page.waitForSelector('#sp_payee_details')
    await page.selectOption('#sp_account', '6')
    await page.type('#sp_amount', '5000')
    await page.type('#sp_date', '2021-11-09')
    await page.type('#sp_description', 'some random message')
    await page.click('#pay_saved_payees')

    const message = await page.locator('#alert_content > span')

    await expect(message).toBeVisible()
    await expect(message).toContainText(
      'The payment was successfully submitted'
    )
  })
})
