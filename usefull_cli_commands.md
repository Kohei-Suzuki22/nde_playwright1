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



## テスト全容の確認

```
npx playwright test --list  # テスト実行対象のリスト一覧を確認できる。
```

```
npx playwright test --list --reporter=json  ＃＃テスト実行対象一覧とその設定を確認できる。
```

