import test, { PlaywrightTestConfig } from '@playwright/test'

/**
 * テスト実行時に、このファイルをconfigとして読み取ることをコマンドで指定すると、
 * このconfigで実行される。
 *
 * そのため、playwright.config.tsというファイル名ではなく、別のファイルに別の設定を書き出すこともできる。
 * その場合は、テスト実行時にそのファイルをconfigとして読み取るコマンドを指定すればいい。
 *
 *  ex:    npx playwright:test -c playwright.config.ts
 */

const config: PlaywrightTestConfig = {
  // テストに対するタイムアウト。一つのテストが60秒以内に終わらなければならない。
  timeout: 60000,
  // retries: テストが失敗した際にリトライする回数
  retries: 0,
  // workerでは、各ファイルごとに並列実行(ファイル内にある複数テストは、並列ではない)だが、
  // fullyParallel は、各ファイルのその中の全てのテストを並列実行する。
  fullyParallel: true,

  //use: ブラウザに対するオプション
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    // 操作に対するタイムアウト。
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'off',
  },
  // projects: プロジェクトごとに設定を保存できる。defaultはconfigの一番上の階層の設定.
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
      // テストを実行するディレクトリを指定できる。
      testDir: './tests/',
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
      testDir: './tests/',
    },
    {
      name: 'Webkit',
      use: { browserName: 'webkit' },
      testDir: './tests/',
    },
  ],

  expect: {
    // アサーションに対するタイムアウト。
    timeout: 15000,
  },
}

export default config
