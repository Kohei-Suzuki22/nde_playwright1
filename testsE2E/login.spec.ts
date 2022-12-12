import { test, expect } from '@playwright/test'

test.describe('Login / Logout Flow', () => {
  // Before Hook

  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/')
  })

  // Negative Senario
  test('Negative Scenario', async ({ page }) => {
    await page.click('#signin_button')
    await page.type('#user_login', 'invalid username')
    await page.type('#user_password', 'invalid password')
    await page.click('text=Sign in')

    await expect(page.locator('.alert-error')).toContainText(
      'Login and/or password are wrong.'
    )
  })

  // Positive Scenario
  test('Positive Scenario for login + logout', async ({ page }) => {
    await page.click('#signin_button')
    await page.type('#user_login', 'username')
    await page.type('#user_password', 'password')
    await page.click('text=Sign in')

    await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')
    
    await expect(page.locator('#account_summary_tab')).toBeVisible()
    
    page.pause()
    await page.goto('http://zero.webappsecurity.com/logout.html')
    await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')
  })
})
