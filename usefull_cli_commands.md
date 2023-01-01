#　便利な CLI コマンドオプション

## テスト実行

- ブラウザ指定

```
npx playwrigth test --browser=firefox
npx playwright test --browser=all
```

- タグ指定

  - 指定のタグを実行

  ```
  npx playwrigth test --grep @tagName
  ```

  - 指定のタグ以外を実行

  ```
  npx playwrigth test --grep-invert @tagName
  ```

- config ファイルの指定と読み込み

  - playwright.config.ts の設定を読み込む場合

  ```
  npx playwright test -c playwright.config.ts
  ```

  - XXXX.config.ts の設定を読み込む場合

  ```
  npx playwright test -c XXXX.config.ts
  ```

- プロジェクトの指定(config ファイルに記載したプロジェクト)

```
npx playwright test --project=ProjectName
```

- report の出力

```
npx playwright test --reporter=(html|junit|json|dot|line)
```

- アサーションでスクリーンショットを用いる場合、既存のスクリーンショットを消して、新たにスクリーンショットを撮り直す。

```
npx playwright test --update-snapshots　
```

- 失敗した時だけ、リトライする。成功時は一回で終わる。

```
npx playwright test retry.spec.ts --retries=3
```

- スマホ版ブラウザで画面を開く

```
npx playwright open https://www.wikipedia.org --device='iPhone SE'
```

- 対象ページの pdf ファイルを生成

```
 npx playwright pdf https://www.example.com export_pdf/example.com.pdf
```

- スクリーンショットの取得

```
npx playwright screenshot twitter.com screenshots/twitter-image.png
```

- ブラウザ上のカラースキーマを指定(例: ダークモード)

```
 npx playwright open twitter.com  --color-scheme=dark
```

- タイムゾーンの指定

```
npx playwright open --timezone="Europe/Rome" google.com
```

- 表示言語の指定

```
npx playwright open --lang='it-IT' google.com
```

- geolocation(位置情報)の指定

```
npx playwright open --geolocation='40.121, 10.123' google.com
```

- [テストを複数マシンで分割する方法](https://playwright.dev/docs/test-parallel#shard-tests-between-multiple-machines)

```
# shardを分割することによって、指定した割合ずつテストを実行できる。
# これを実行した際に出されるレポートは別々に出され、一つに統合されていないことに注意。



npx playwright test --shard=1/3
npx playwright test --shard=2/3
npx playwright test --shard=3/3
```

- テストレポートをカスタマイズする
```
# --reporter= XXX の　XXXにカスタマイズ設定の書かれたファイルを指定する。
npx playwright test test-for-custom-report/sample.spec.ts --reporter=reporter.ts 
```

## テスト全容の確認

```
npx playwright test --list  # テスト実行対象のリスト一覧を確認できる。
```

```
npx playwright test --list --reporter=json  ＃＃テスト実行対象一覧とその設定を確認できる。
```
