import { test, expect } from '@playwright/test'
import { assert } from 'console'
import { loadHomepage, assertTitle } from '@common_modules/helpers'
import { getRandomNumber, getRandomString } from '@utils/data-helpers'

test('ベーシック', async ({ page }) => {
  await page.goto('https://www.example.com')
  const pageTitle = await page.locator('h1')
  const randomNum = await getRandomNumber()
  const randomString = await getRandomString()
  await assert(randomNum > 0)
  await assert(randomString.length > 0)
  await expect(pageTitle).toContainText('Example Domain')
})

test('クリック', async ({ page }) => {
  await page.goto('http://zero.webappsecurity.com/index.html')
  await page.click('#signin_button')
  await page.click('text=Sign in')

  await expect(page.locator('.alert-error')).toHaveText(
    'Login and/or password are wrong.'
  )
})

// .onlyを使うと、これだけを実行することになる。(※　このファイルの中でonlyは有効なため、他のファイルも一緒に実行するときは、他のファイルはonlyの効果を受けない。)
test('入力', async ({ page }) => {
  await page.goto('http://zero.webappsecurity.com/index.html')
  await page.click('#signin_button')

  await page.type('#user_login', 'some username')
  await page.locator('#user_password').type('some password')

  await page.click('text=Sign in')

  await expect(page.locator('.alert-error')).toContainText(
    'Login and/or password are wrong.'
  )
})

// .onlyを複数つけると、onlyをつけたものだけ実行するようになる。
test('アサーション', async ({ page }) => {
  await page.goto('https://example.com')
  await expect(page).toHaveURL('https://example.com')
  await expect(page).toHaveTitle('Example Domain')

  const exsistElement = page.locator('h1')
  await expect(exsistElement).toBeVisible()

  await expect(exsistElement).toHaveText('Example Domain')
  //locatorが存在する数を検証。 選択肢がある場合などは使えるかも。
  await expect(exsistElement).toHaveCount(1)

  const nonexsistElement = page.locator('h5')
  await expect(nonexsistElement).not.toBeVisible()
})

// describeの前にonly,skipなどは使えない。
// parallelは、configで定義する他に、describeに付けることもできる。
test.describe.parallel('describeを使ってテストをまとめることができる', () => {
  // .onlyを使うと、これだけを実行することになる。
  test('入力', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button')

    await page.type('#user_login', 'some username')
    await page.locator('#user_password').type('some password')

    await page.click('text=Sign in')

    await expect(page.locator('.alert-error')).toContainText(
      'Login and/or password are wrong.'
    )
  })

  // .onlyを複数つけると、onlyをつけたものだけ実行するようになる。
  test('アサーション', async ({ page }) => {
    await page.goto('https://example.com')

    // page.pause(): このタイミングで、playwright inspectorが開かれる。debugで便利。
    await page.pause()

    await expect(page).toHaveURL('https://example.com')
    await expect(page).toHaveTitle('Example Domain')

    const exsistElement = page.locator('h1')
    await expect(exsistElement).toBeVisible()

    await expect(exsistElement).toHaveText('Example Domain')
    //locatorが存在する数を検証。 選択肢がある場合などは使えるかも。
    await expect(exsistElement).toHaveCount(1)
    await page.pause()

    const nonexsistElement = page.locator('h5')
    await expect(nonexsistElement).not.toBeVisible()
  })
})

test('共通モジュールとして別ファイルを読み込む', async ({ page }) => {
  await loadHomepage(page)
  // vscodeのデバッグ実行を使えばdebuggerで止められる。
  debugger
  await assertTitle(page)
})
