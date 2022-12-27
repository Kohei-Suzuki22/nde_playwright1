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

  test('Simple API Test - Assert Invalid Endpoint', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/no-exsisting-endpoint`)
    expect(response.status()).toBe(404)
  })

  test('GET Request - Get User Detail', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/1`)
    const responseBody = await response.json()

    expect(response.status()).toBe(200)
    expect(responseBody.data.id).toBe(1)
    expect(responseBody.data.first_name).toBe('George')
    expect(responseBody.data.last_name).toBe('Bluth')
    // toBeTruthy()は、 [false, 0, '', null, undefined, NaN] のいずれかでなければtrueとなる。
    expect(responseBody.data.email).toBeTruthy()
  })

  test('Post Request - Create New User', async ({ request }) => {
    const response = await request.post(`${baseUrl}/user`, {
      data: {
        id: 100,
      },
    })

    const responseBody = await response.json()

    // post時のレスポンスボディは、dataに入っているわけではないので、　responseBody.data.id ではなく、responseBody.idでアクセスできる。

    expect(responseBody.id).toBe(100)
    expect(responseBody.createdAt).toBeTruthy()
  })

  test('Post Request - Login', async ({ request }) => {
    const response = await request.post(`${baseUrl}/login`, {
      data: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      },
    })

    const responseBody = await response.json()

    expect(response.status()).toBe(200)
    expect(responseBody.token).toBeTruthy()
  })


  test('Post Request - Login Fail', async ({ request }) => {
    const response = await request.post(`${baseUrl}/login`, {
      data: {
        email: 'eve.holt@reqres.in',
      },
    })

    const responseBody = await response.json()

    expect(response.status()).toBe(400)
    expect(response.statusText()).toBe('Bad Request')
    expect(responseBody.error).toBe('Missing password')
  })
})
