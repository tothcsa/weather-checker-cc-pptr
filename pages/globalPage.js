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
  }

}
