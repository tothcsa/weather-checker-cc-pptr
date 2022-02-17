// const { argv } = require('yargs')
const container = require('codeceptjs').container
const input = container.plugins('searchParameters')

Feature('search')

Scenario(`Open main page, then search for ${input}`, async ({ I }) => {
  await I.amOnPage('/')
  // await I.acceptCookies()
  await I.waitForTimeout(5000)
  await I.typeCity(input)
})

Scenario('Check many things on result page', async ({ I }) => {
  // EXPECTATIONS:
  // check of header:
  await I.assertEqual(await I.getNumberOfElements(`meta[name="description"][content*="${input}"]`), 1)
  await I.assertEqual(await I.getNumberOfElements(`meta[property="og:title"][content*="${input}"]`), 1)
  await I.assertEqual(await I.getNumberOfElements(`meta[property="og:description"][content*="${input}"]`), 1)
  // await I.assertEqual(await I.getNumberOfElements('meta[property="og:url"][content*="London"]'), 1)
  await I.seeInTitle(input)

  // check of body:
  // I.see - Checks that a page contains a visible text.
  await I.see(input, '[class*="LocationCard"]')
  await I.assertEqual(await I.getNumberOfElements(`section[aria-label*="${input}"]`), 3)
  await I.see(input, 'h1')
  await I.assertEqual(await I.getNumberOfElements(`section[title*="${input}"]`), 2)

  // TodayWeatherCard
  await I.see(input, '[id*="TodayWeatherCard"] h2')
  // todayDetails
  await I.see(input, '[id*="todayDetails"] h2')
})
