import { test, expect } from '@playwright/test'
import { FeedbackPage } from '../page-objects/FeedbackPage'
import { HomePage } from '../page-objects/HomePage'

test.describe('フィードバックフォーム', () => {
  let feedbackpage: FeedbackPage
  let homePage: HomePage
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    feedbackpage = new FeedbackPage(page)
    await homePage.visit()
    await homePage.clickOnFeedbackLink()
  })

  test('フィードバックフォームをリセットする', async ({ page }) => {

    const nameInput = await page.locator('#name')
    const commentInput = await page.locator('#comment')
    await expect(nameInput).toBeEmpty()
    await expect(commentInput).toBeEmpty()

    await feedbackpage.fillForm(
      'name',
      'email@email.com',
      'subject',
      'nice comment about the application'
    )
    await feedbackpage.resetForm()
    await feedbackpage.assertReset()
  })

  test('フィードバックフォームを送信する', async ({ page }) => {
    await feedbackpage.fillForm(
      'name',
      'email@email.com',
      'subject',
      'nice comment about the application'
    )
    await feedbackpage.submitForm()
    await feedbackpage.feedbackFormSent()
  })
})
