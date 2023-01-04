import { test } from '@playwright/test'
import { Navbar } from '@page-objects/components/Navbar'
import { HomePage } from '@page-objects/HomePage'
import { LoginPage } from '@page-objects/LoginPage'
import { PaymentPage } from '@page-objects/PaymentPage'

test.describe('新規支払い', () => {
  let homePage: HomePage
  let loginPage:  LoginPage
  let paymentPage: PaymentPage
  let navbar: Navbar

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    loginPage = new LoginPage(page)
    paymentPage = new PaymentPage(page)
    navbar = new Navbar(page)

    await homePage.visit()
    await homePage.clickOnSignIn()

    await loginPage.login('username','password')
    await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')

  }) 

  test('新規支払いの送信が可能であること', async ({ page }) => {

    navbar.clickOnTab('payBills')
    await paymentPage.createPayment()
    await paymentPage.assertSuccessMessage()
  })
})
