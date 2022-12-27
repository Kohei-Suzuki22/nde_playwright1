import { test, expect } from '@playwright/test'

/**
 * このテストは一番最初の実行は失敗する(スナップショットがないタイミング)。
 *
 * 一番最初に失敗した際に、スナップショットが自動でディレクトリに保存される。
 * 二回目からの実行はスナップショットがあるので、一回目の失敗時に生成されたスナップショットを参照してテストを実行する。
 * 二回目の場合は、1回目のスナップショットが正となり、二回目移行は一回目と同じ画面構成になるかを検証できる。
 *
 *    ※注意: headlessモードで撮ったスナップショットと、headedモードで撮ったスナップショットで微妙なずれがあるため、
 *          一回目と二回目でモードを変えてしまうとテスト失敗することがあるっぽい。(firefoxが怪しい。)
 *
 * 表示に関するテストはこれだけでいいかも。
 * 
 * 
 *    ※ 一回目のスクショが正とされるが、UIが変えた場合は、テストが失敗になってしまう。
 *      このような場合は、対象のテストで扱うスクショを更新する必要があるので、以下のコマンドを実行する。
 * 
 *      npx playwright test --update-snapshots　
 */
test.describe('回帰的ビジュアルテスト example', () => {
  test('フルページsnapshotテスト', async ({ page }) => {
    await page.goto('http://www.example.com')
    await page.waitForLoadState()
    expect(await page.screenshot()).toMatchSnapshot('homepage.png')
  })

  test('要素単体のsnaphotテスト', async ({ page }) => {
    await page.goto('httPs://www.example.com')
    const pageElement = await page.locator('h1')
    expect(await pageElement.screenshot()).toMatchSnapshot('page-title.png')
  })
})
