Feature('search')

Scenario('Open main page', ({ I }) => {
  I.amOnPage('/')
  I.acceptCookies()
})

Scenario('Search on main page', ({ I }) => {
  I.waitForTimeout(2000)
  I.searchCity()
  I.waitForTimeout()
})
