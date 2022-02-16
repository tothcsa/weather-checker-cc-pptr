const { I } = inject()

module.exports = {

  selectors: {
    header: '[aria-label="Menu"]',
    // searchInput: '[aria-label="searchInput"]',
    firstResult: '#LocationSearch_listbox-0'
  },

  async searchCity (input = 'London') {
    try {
      I.waitForVisible(this.selectors.header)
      I.click(this.selectors.header)

      I.type(input)

      I.waitForVisible(this.selectors.firstResult, 60)
      I.click(this.selectors.firstResult)
    } catch (error) {
      console.log(error)
    }
  }
}
