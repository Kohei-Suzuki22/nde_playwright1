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
