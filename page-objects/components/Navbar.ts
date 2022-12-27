import { Locator, Page } from '@playwright/test'

export class Navbar{
  readonly page: Page
  readonly accountSummary: Locator
  readonly accountActivity: Locator
  readonly transferFunds: Locator
  readonly payBills: Locator
  readonly myMoneyApp: Locator
  readonly onlineStatements: Locator

  constructor(page: Page){
    this.page = page
    this.accountSummary = page.locator("#acount_summary_tab")
    this.transferFunds = page.locator('#transfer_funds_tab')
    this.payBills = page.locator('#pay_bills_tab')
    this.myMoneyApp = page.locator('#money_map_tab')
    this.onlineStatements = page.locator('#online_statements_tab')
  }

  async clickOnTab(tabName){
    this[tabName].click()

  }
}