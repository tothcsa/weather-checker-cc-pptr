const Helper = require('@codeceptjs/helper')

let pptr

const selectors = {
  header: '[aria-label="Menu"]',
  // header: 'div[class*="MainMenuHeader"]',
  // searchInput: '[aria-label="searchInput"]',
  firstResult: '#LocationSearch_listbox-0',
  cookiesModal: '#consent_blackbar',
  cookiesAgree: '#truste-consent-button',
  cookiesRequiredOnly: '#truste-consent-required'
}

class PageHelper extends Helper {
  // before/after hooks
  /**
   * @protected
   */
  _before () {
    pptr = this.helpers.Puppeteer
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
  async querySelectorAll (selector) {
    const selectors = await pptr.usePuppeteerTo(`Query selector (all): ${selector}`, async ({ page }) => {
      await page.waitForSelector(selector)
      const sel = await page.$$(selector)
      return sel
    })
    return selectors
  }

  async getNumberOfElements (selector) {
    const el = await this.querySelectorAll(selector)
    return el.length
  }

  async typeCity (input = 'London') {
    await pptr.usePuppeteerTo(`Search for: ${input}`, async ({ page }) => {
      await this.waitForAndClick(selectors.header)
      await page.keyboard.type(input)
      await this.waitForAndClick(selectors.firstResult)
      await pptr.waitForInvisible(selectors.firstResult, 60)
    })
  }

  async acceptCookies (allCookies = true) {
    await this.waitForAndClick(selectors.cookiesAgree)
    await pptr.waitForInvisible(selectors.cookiesModal, 60)
  }

  async waitForTimeout (n = 5000) {
    await pptr.usePuppeteerTo(`wait for timeout: ${n} ms`, async ({ page }) => {
      await page.waitForTimeout(n)
    })
  }

  async waitForAndClick (el) {
    await pptr.waitForElement(el)
    await pptr.click(el)
  }
}

module.exports = PageHelper
