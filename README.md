# weather-checker-cc-pptr

Weather checker with CodeceptJS and Puppeteer

## Requirements

- Node

## How to install?

- Clone this project.
- Step into the project directory.
- Run: `npm install`.

## How to run?

- Step into the project directory.
- Run: `npm test`.

## Where is the test file?

- `./tests/search_test.js`

## What are the test steps?

- Opens the homepage,
- Accepts the cookies.

## Expected output

When you run the test, you'll get a similar output in case of pass:

```bash
search --
  Open main page
    I am on page "/"
    I accept cookies
    I wait for timeout 2000
    I type city
    I get number of elements "meta[name="description"][content*="London"]"
    I assert equal 1, 1
    I get number of elements "meta[property="og:title"][content*="London"]"
    I assert equal 1, 1
    I get number of elements "meta[property="og:description"][content*="London"...
    I assert equal 1, 1
    I see in title "London"
    I see "London", "[class*="LocationCard"]"
    I get number of elements "section[aria-label*="London"]"
    I assert equal 3, 3
    I see "London", "[class*="LocationCard"]"
    I get number of elements "section[title*="London"]"
    I assert equal 2, 2
    I see "London", "[id*="TodayWeatherCard"] h2"
    I see "London", "[id*="todayDetails"] h2"
  √ OK in 17948ms
```
