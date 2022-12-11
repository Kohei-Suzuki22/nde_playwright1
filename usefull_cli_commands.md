#　便利なCLIコマンドオプション


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
