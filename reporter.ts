import {
  FullConfig,
  FullResult,
  Reporter,
  Suite,
  TestCase,
  TestResult,
} from '@playwright/test/reporter'
import * as fs from 'fs'

/**
 * テストレポートのカスタマイズをするクラス。
 * 
 * Reporterを implomentsすることで、カスタマイズできる。
 * ※　ただし、出力するレポートは、htmlのようにリッチな構成にするのは難しいと感じるため、playwrightが提供しているhtml出力の方が優秀に感じる。
 */
export default class MyReporter implements Reporter {
  // onBeginは、すべてのテストが始まる前に一度だけ実行される。
  onBegin(config: FullConfig<{}, {}>, suite: Suite): void {
    console.log('onBegin-------------------------------')
    console.log(`suite ${suite}`)
    console.log(`suite.allTests() ${suite.allTests()}`)
    console.log(`Execution of ${suite.allTests().length}`)
  }
  // 各テストが実行される前に実行される。
  onTestBegin(test: TestCase, result: TestResult): void {
    console.log('onTestBegin--------------------------------')
    console.log(`test ${test}`)
    console.log(`Execution of ${test.title} started.`)
  }

  // 各テストが終了したタイミングで実行される。
  onTestEnd(test: TestCase, result: TestResult): void {
    const execTime = result.duration

    const data = {
      test: test.title,
      status: result.status,
      executionTime: execTime,
      errors: result.errors,
    }

    const dataToString = JSON.stringify(data, null, 2)
    console.log('onTestEnd------------------')
    console.log('test', test)
    console.log('result', result)
    console.log('dataToString', dataToString)
    fs.writeFileSync('custom-report/test-result.json', dataToString)
  }

  // すべてのテストが終わった後に一度だけ実行される。
  onEnd(result: FullResult): void | Promise<void> {
    console.log('onEnd---------------------------------------------')
    console.log(`Execution finished with status of ${result}`)
    console.log(`Execution finished with status of ${result.status}`)
  }
}
