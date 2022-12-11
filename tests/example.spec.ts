import { test, expect } from '@playwright/test'

test('Simple Basic test', async ({ page }) => {
  await page.goto('https://www.example.com')
  const pageTitle = await page.locator('h1')
  await expect(pageTitle).toContainText('Example Domain')
})

test('Clickin on Elements', async({page}) =>{
  await page.goto('http://zero.webappsecurity.com/index.html')
  await page.click('#signin_button')
  await page.click('text=Sign in')

  await expect(page.locator('.alert-error')).toHaveText('Login and/or password are wrong.')
})