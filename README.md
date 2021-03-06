# weather-checker-cc-pptr

Weather checker with CodeceptJS and Puppeteer

## Requirements

- Node

## Framework

- CodeceptJS [https://codecept.io/]
- codeceptjs-chai (for assertions) [https://www.npmjs.com/package/codeceptjs-chai]

## How to install?

- Clone this project.
- Step into the project directory.
- Run: `npm install`.

## How to run?

- Step into the project directory.
- Run: `npm test`.

### How to run with custom input?

- You can set input value with environmental variable
  - In the the project directory:
    - Run (on Windows): `set INPUT=Lund`
    - Then run: `npm test`
    - Then the test location is `Lund` in that test (and the following)
      - To remove: `set INPUT=`
      - Then the test location is `London` (default)
- You can set input value with CodeceptJS command
  - In the the project directory:
    - Run (on Windows): `npm test -- --override {\"plugins\":{\"searchParameters\":{\"input\":\"Lund\"}}}`
    - The test location is `Lund` in that test.
      - There is no need to remove.

Please pay attention for case sensitivity.  
_Default location: London._  
_Technical background: `./plugins/searchParameters.js`_  
_You can search for country specific locations as well (e.g): `set INPUT=London, OH`_

## Where is the test file?

- `./tests/search_test.js`

## What are the test steps?

The test

- opens the homepage,
- accepts the cookies (turned off),
- launches a search,
- does a few checks.

For more detailed steps take a look at the test file: `./tests/search_test.js`

## About the checking

After the search run, the test checks

- the meta tags in the header
  - it's important because those are not visual elements, so easy to miss them via a manual testing process.
- the title of the page
- the H1 tag of the page (main header)
- the H2 tags of the page (secondary headers)
- counts other required elements

In the test file it looks like this:

```javascript
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
```

## Expected output

When you run the test, you'll get a similar output in case of pass:

```text
search --
  Open main page, then search for Copenhagen
    I am on page "/"
    I wait for timeout 5000
    I type city "Copenhagen"
  ??? OK in 10183ms

  Check many things on result page
    I get number of elements "meta[name="description"][content*="Copenhagen"]"
    I assert equal 1, 1
    I get number of elements "meta[property="og:title"][content*="Copenhagen"]"
    I assert equal 1, 1
    I get number of elements "meta[property="og:description"][content*="Copenha...
    I assert equal 1, 1
    I see in title "Copenhagen"
    I see "Copenhagen", "[class*="LocationCard"]"
    I get number of elements "section[aria-label*="Copenhagen"]"
    I assert equal 3, 3
    I see "Copenhagen", "h1"
    I get number of elements "section[title*="Copenhagen"]"
    I assert equal 2, 2
    I see "Copenhagen", "[id*="TodayWeatherCard"] h2"
    I see "Copenhagen", "[id*="todayDetails"] h2"
  ??? OK in 1620ms
```
