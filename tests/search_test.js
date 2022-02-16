Feature('search')

Scenario('Open main page', async ({ I, searchFragment }) => {
  await I.amOnPage('/')
  await I.acceptCookies()
  await I.waitForTimeout(2000)

  await I.typeCity()

  // EXPECTATIONS:
  // check of header:
  await I.assertEqual(await I.getNumberOfElements('meta[name="description"][content*="London"]'), 1)
  await I.assertEqual(await I.getNumberOfElements('meta[property="og:title"][content*="London"]'), 1)
  await I.assertEqual(await I.getNumberOfElements('meta[property="og:description"][content*="London"]'), 1)
  // await I.assertEqual(await I.getNumberOfElements('meta[property="og:url"][content*="London"]'), 1)
  await I.seeInTitle('London')

  // check of body:
  // I.see - Checks that a page contains a visible text.
  await I.see('London', '[class*="LocationCard"]')
  await I.assertEqual(await I.getNumberOfElements('section[aria-label*="London"]'), 3)
  await I.see('London', '[class*="LocationCard"]')
  await I.assertEqual(await I.getNumberOfElements('section[title*="London"]'), 2)

  // TodayWeatherCard
  await I.see('London', '[id*="TodayWeatherCard"] h2')
  // todayDetails
  await I.see('London', '[id*="todayDetails"] h2')
})
