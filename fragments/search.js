const { I } = inject()

module.exports = {

  selectors: {
    header: '[aria-label="Menu"]',
    // searchInput: '[aria-label="searchInput"]',
    firstResult: '#LocationSearch_listbox-0'
  },

  async searchCity (input = 'London') {
    I.waitForVisible(this.selectors.header)
    I.click(this.selectors.header)

    I.type(input)

    I.waitForVisible(this.selectors.firstResult)
    I.click(this.selectors.firstResult)
  }
}
