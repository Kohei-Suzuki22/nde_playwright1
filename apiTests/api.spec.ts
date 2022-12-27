import { test, expect } from '@playwright/test'

test.describe.parallel('API Testing', () => {
  const baseUrl = 'https://reqres.in/api'

  /**
   * playwrightを使って、APIテストをすることができる。
   * 
   * https://playwright.dev/docs/api/class-apiresponse にレスポンスに対するアサーションが載っている。
   * 
   */
  test('Simple API Test - Assert Response Status', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/2`)

    // レスポンスボディをjsonで取得。
    const responseBody = await response.json()
    // レスポンスボディをテキストで取得。
    const responseBodyText = await response.text()
    // レスポンスステータスを取得。(async ではないので注意。)
    const responseStatus = response.status()
    // レスポンスステータスをテキストで取得。　例: 200-299ならばOK  (asyncではないので注意)
    const responseStatusText = response.statusText()


    expect(response.status()).toBe(200)
  })

  test('Simple API Test - Assert Invalid Endpoint', async({request}) =>{
    const response = await request.get(`${baseUrl}/users/no-exsisting-endpoint`)
    expect(response.status()).toBe(404)
  })
})
