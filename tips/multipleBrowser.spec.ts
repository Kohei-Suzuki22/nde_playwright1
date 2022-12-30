import { test, Browser, expect } from '@playwright/test'
import Context from '@playwright/test'

test.describe('マルチブラウザ', () => {
  let context
  /**
   * parallel実行の時は、かくworkerにおいて、beforeAllが呼ばれるらしい。
   * 
   * なので、contextをbeforeAllで作ることによって、テストの高速化はできることがわかった。
   * つまり、4つのテストで、worker2つを例とすると、beforeAllは二回呼ばれ、2つのテストずつが別々のコンテキストを使うことになっていた。
   */
  test.beforeAll(async ({ browser }) => {
    // 共通で使うcontext(ブラウザObject)を作成。
    console.log('ここ呼ばれた。')
    context = await browser.newContext()
  })

  test('マルチブラウザタブを一つのページで使用', async ({ browser }) => {
    test.slow()
    // 共通で使うcontext内のタブを複数生成。

    /**
     *  contextを共通化すると、videoがうまく取れないようなので、実行速度的には速いがvideoが取れないというデメリットがあるよう。
     *  スクリーンショットなら撮れる。
     * */
    const page1 = await context.newPage()
    const page2 = await context.newPage()
    const page3 = await context.newPage()

    // そのコンテキスト上のページオブジェクト一覧。
    const all_pages = context.pages()
    await page1.goto('https://www.example.com')
    await page2.goto('https://www.example.com')
    await page3.goto('https://www.example.com')
  })

  test('マルチブラウザタブを一つのページで使用2', async ({ browser }) => {
    test.slow()

    // 共通で使うcontext内のタブを複数生成。
    const page4 = await context.newPage()
    const page5 = await context.newPage()
    const page6 = await context.newPage()

    // そのコンテキスト上のページオブジェクト一覧。
    const all_pages = context.pages()

    await page4.goto('https://www.example.com')
    await page5.goto('https://www.example.com')
    await page6.goto('https://www.example.com')
  })

  test('マルチブラウザタブを一つのページで使用3', async ({ browser }) => {
    test.slow()

    // 共通で使うcontext内のタブを複数生成。
    const page7 = await context.newPage()
    const page8 = await context.newPage()
    const page9 = await context.newPage()

    // そのコンテキスト上のページオブジェクト一覧。
    const all_pages = context.pages()

    await page7.goto('https://www.example.com')
    await page8.goto('https://www.example.com')
    await page9.goto('https://www.example.com')
  })

  test('マルチブラウザタブを一つのページで使用4', async ({ browser }) => {
    test.slow()

    // 共通で使うcontext内のタブを複数生成。
    const page10 = await context.newPage()
    const page11 = await context.newPage()
    const page12 = await context.newPage()

    // そのコンテキスト上のページオブジェクト一覧。
    const all_pages = context.pages()

    await page10.goto('https://www.example.com')
    await page11.goto('https://www.example.com')
    await page12.goto('https://www.example.com')
  })
})
