#　便利なCLIコマンドオプション


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

-  configファイルの指定と読み込み

    - playwright.config.tsの設定を読み込む場合
    ```
    npx playwright test -c playwright.config.ts   
    ```
    
    - XXXX.config.tsの設定を読み込む場合
    ```
    npx playwright test -c XXXX.config.ts   
    ```

- プロジェクトの指定(configファイルに記載したプロジェクト)

```
npx playwright test --project=ProjectName
```


- reportの出力
```
npx playwright test --reporter=(html|junit|json|dot|line)
```

## テスト全容の確認

```
npx playwright test --list  # テスト実行対象のリスト一覧を確認できる。
```
```
npx playwright test --list --reporter=json  ＃＃テスト実行対象一覧とその設定を確認できる。
```