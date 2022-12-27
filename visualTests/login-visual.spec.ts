import { test } from '@playwright/test'
import { HomePage } from '../page-objects/HomePage'
import { LoginPage } from '../page-objects/LoginPage'

test.describe('ログインページvisual Tests', () => {
  let homePage: HomePage
  let loginPage: LoginPage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    loginPage = new LoginPage(page)

    await homePage.visit()
    await homePage.clickOnSignIn()
  })

  test('ログインフォーム', async ({ page }) => {
    await loginPage.snapshotLoginForm()
  })

  test('ログインエラーメッセージ', async ({ page }) => {
    await loginPage.login('Fail', 'some invalid password')
    await loginPage.snapshotErrorMessage()
  })
})
