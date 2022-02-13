const { I } = inject()

module.exports = {

  selectors: {
    cookiesModal: '#consent_blackbar',
    cookiesAgree: '#truste-consent-button',
    cookiesRequiredOnly: '#truste-consent-required'
  },

  async acceptCookies (allCookies = false) {
    const selector = allCookies ? this.selectors.cookiesAgree : this.selectors.cookiesAgree
    I.waitForVisible(selector)
    I.click(selector)
    I.waitForInvisible(this.selectors.cookiesModal)
  },

  async waitForTimeout (n = 5000) {
    I.usePuppeteerTo(`wait for timeout: ${n} ms`, async ({ page }) => {
      await page.waitForTimeout(n)
    })
  }

}
