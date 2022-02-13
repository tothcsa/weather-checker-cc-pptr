Feature('search')

Scenario('Open main page', ({ I }) => {
  I.amOnPage('/')
  I.acceptCookies()
  pause()
})
