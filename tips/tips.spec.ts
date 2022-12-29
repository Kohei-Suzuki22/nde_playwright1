import { test, expect } from '@playwright/test'

test.describe('Tips & Tricks Section', () => {
  test('TestInfo Object', async ({ page }, testInfo) => {
    await page.goto('https://www.example.com')
    // テストの各種設定や情報などが見れる。
    console.log(testInfo)

    // テストのタイトルが見れる。  ※ test('TestInfo Object')の 'TestInfo Object'の部分。
    console.log(testInfo.title)

    // テストの期待ステータスをみる。
    console.log(testInfo.expectedStatus)

    //
  })
})


// testInfoが持っている情報

    
    // <ref *1> TestInfoImpl {
    //   _addStepImpl: [Function (anonymous)],
    //   _test: TestCase {
    //     title: 'TestInfo Object',
    //     _only: false,
    //     _requireFile: '/Users/kohei/source-code/playwright_code/node_playwright1/tips/tips.spec.ts',
    //     fn: [AsyncFunction (anonymous)] { [Symbol(signature)]: [Array] },
    //     results: [],
    //     location: {
    //       file: '/Users/kohei/source-code/playwright_code/node_playwright1/tips/tips.spec.ts',
    //       line: 4,
    //       column: 3
    //     },
    //     parent: Suite {
    //       title: 'Tips & Tricks Section',
    //       _only: false,
    //       _requireFile: '/Users/kohei/source-code/playwright_code/node_playwright1/tips/tips.spec.ts',
    //       suites: [],
    //       tests: [Array],
    //       location: [Object],
    //       parent: [Suite],
    //       _use: [],
    //       _skipped: false,
    //       _entries: [Array],
    //       _hooks: [],
    //       _timeout: undefined,
    //       _retries: undefined,
    //       _annotations: [],
    //       _modifiers: [],
    //       _parallelMode: 'default',
    //       _projectConfig: undefined,
    //       _loadError: undefined,
    //       _fileId: '43bb1b5ad4e606db76e3',
    //       _type: 'describe'
    //     },
    //     expectedStatus: 'passed',
    //     timeout: 0,
    //     annotations: [],
    //     retries: 0,
    //     repeatEachIndex: 0,
    //     _testType: TestTypeImpl { fixtures: [Array], test: [Function] },
    //     id: '43bb1b5ad4e606db76e3-c2a4cf1aea03742cb03b',
    //     _workerHash: 'runChromium-7effd949a9daf909037d8ea7548272e746c49aac-repeat0',
    //     _pool: FixturePool {
    //       digest: '7effd949a9daf909037d8ea7548272e746c49aac',
    //       registrations: [Map]
    //     },
    //     _projectId: 'Chromium',
    //     _alreadyInheritedAnnotations: false,
    //     _annotateWithInheritence: [Function: _annotateWithInheritence]
    //   },
    //   _timeoutManager: TimeoutManager {
    //     _defaultSlot: { timeout: 60000, elapsed: 221.628999710083 },
    //     _runnable: { type: 'test' },
    //     _fixture: undefined,
    //     _timeoutRunner: TimeoutRunner {
    //       _running: [Object],
    //       _timeout: 60000,
    //       _elapsed: 221.63899981975555
    //     }
    //   },
    //   _startTime: 929621748.802,
    //   _startWallTime: 1672301089208,
    //   _hasHardError: false,
    //   _onTestFailureImmediateCallbacks: Map(0) {},
    //   _didTimeout: false,
    //   repeatEachIndex: 0,
    //   retry: 0,
    //   workerIndex: 0,
    //   parallelIndex: 0,
    //   project: {
    //     _id: 'Chromium',
    //     _fullConfig: {
    //       forbidOnly: false,
    //       fullyParallel: true,
    //       globalSetup: null,
    //       globalTeardown: null,
    //       globalTimeout: 0,
    //       grep: /.*/,
    //       grepInvert: null,
    //       maxFailures: 0,
    //       metadata: {},
    //       preserveOutput: 'always',
    //       projects: [Array],
    //       reporter: [Array],
    //       reportSlowTests: [Object],
    //       configFile: '/Users/kohei/source-code/playwright_code/node_playwright1/playwright.config.ts',
    //       rootDir: '/Users/kohei/source-code/playwright_code/node_playwright1',
    //       quiet: false,
    //       shard: null,
    //       updateSnapshots: 'missing',
    //       version: '1.28.1',
    //       workers: 4,
    //       webServer: null,
    //       _webServers: [],
    //       _globalOutputDir: '/Users/kohei/source-code/playwright_code/node_playwright1',
    //       _configDir: '/Users/kohei/source-code/playwright_code/node_playwright1',
    //       _storageDir: '/Users/kohei/source-code/playwright_code/node_playwright1/.playwright-storage',
    //       _maxConcurrentTestGroups: 0,
    //       _ignoreSnapshots: false,
    //       _workerIsolation: 'isolate-pools'
    //     },
    //     _fullyParallel: true,
    //     _expect: { timeout: 15000 },
    //     grep: /.*/,
    //     grepInvert: null,
    //     outputDir: '/Users/kohei/source-code/playwright_code/node_playwright1/test-results',
    //     repeatEach: 1,
    //     retries: 0,
    //     metadata: undefined,
    //     name: 'Chromium',
    //     testDir: '/Users/kohei/source-code/playwright_code/node_playwright1',
    //     _setup: [],
    //     _respectGitIgnore: true,
    //     snapshotDir: '/Users/kohei/source-code/playwright_code/node_playwright1',
    //     snapshotPathTemplate: '{snapshotDir}/{testFileDir}/{testFileName}-snapshots/{arg}{-projectName}{-snapshotSuffix}{ext}',
    //     testIgnore: [],
    //     testMatch: /.spec.ts/,
    //     timeout: 60000,
    //     use: {
    //       headless: true,
    //       viewport: [Object],
    //       actionTimeout: 30000,
    //       ignoreHTTPSErrors: true,
    //       screenshot: 'off',
    //       browserName: 'chromium'
    //     }
    //   },
    //   config: {
    //     forbidOnly: false,
    //     fullyParallel: true,
    //     globalSetup: null,
    //     globalTeardown: null,
    //     globalTimeout: 0,
    //     grep: /.*/,
    //     grepInvert: null,
    //     maxFailures: 0,
    //     metadata: {},
    //     preserveOutput: 'always',
    //     projects: [ [Object], [Object], [Object] ],
    //     reporter: [ [Array] ],
    //     reportSlowTests: { max: 5, threshold: 15000 },
    //     configFile: '/Users/kohei/source-code/playwright_code/node_playwright1/playwright.config.ts',
    //     rootDir: '/Users/kohei/source-code/playwright_code/node_playwright1',
    //     quiet: false,
    //     shard: null,
    //     updateSnapshots: 'missing',
    //     version: '1.28.1',
    //     workers: 4,
    //     webServer: null,
    //     _webServers: [],
    //     _globalOutputDir: '/Users/kohei/source-code/playwright_code/node_playwright1',
    //     _configDir: '/Users/kohei/source-code/playwright_code/node_playwright1',
    //     _storageDir: '/Users/kohei/source-code/playwright_code/node_playwright1/.playwright-storage',
    //     _maxConcurrentTestGroups: 0,
    //     _ignoreSnapshots: false,
    //     _workerIsolation: 'isolate-pools'
    //   },
    //   title: 'TestInfo Object',
    //   titlePath: [ 'tips/tips.spec.ts', 'Tips & Tricks Section', 'TestInfo Object' ],
    //   file: '/Users/kohei/source-code/playwright_code/node_playwright1/tips/tips.spec.ts',
    //   line: 4,
    //   column: 3,
    //   fn: [AsyncFunction (anonymous)] { [Symbol(signature)]: [ 'page' ] },
    //   expectedStatus: 'passed',
    //   duration: 0,
    //   annotations: [],
    //   attachments: [],
    //   status: 'passed',
    //   stdout: [],
    //   stderr: [],
    //   snapshotSuffix: 'darwin',
    //   outputDir: '/Users/kohei/source-code/playwright_code/node_playwright1/test-results/tips-tips-Tips-Tricks-Section-TestInfo-Object-Chromium',
    //   snapshotDir: '/Users/kohei/source-code/playwright_code/node_playwright1/tips/tips.spec.ts-snapshots',
    //   errors: [],
    //   currentStep: undefined,
    //   _testStorage: JsonStorage { _testInfo: [Circular *1] }
    // }

