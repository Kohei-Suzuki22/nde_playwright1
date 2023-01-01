const path = require('path')
const { mergeHTMLReports } = require('playwright-merge-html-reports')

/**
 * このファイルを node(ts-node)で実行すると、指定したレポートが一つのレポートとしてマージされる。
 * 
 * ※ しかし、複数繰り返すと 出力先のディレクトリが消え、no such file or directory となるため、不安定な印象だったため、使えないかもしれない。
 *   スクリーンショットなどが一緒にマージされるのかは試していないのでわからない。
 */
mergeHTMLReports(
  [
    path.resolve(process.cwd(), './test-report/apiTests'),
    path.resolve(process.cwd(), './test-report/e2eTests'),
    path.resolve(process.cwd(), './test-report/visualTests'),
  ],
  { outputFolderName: './test-merge-report', outputBasePath: process.cwd() }
)
