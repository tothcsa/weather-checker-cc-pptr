const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure')

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS)

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins()

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://weather.com/',
      show: true,
      windowSize: '1900x1000',
      waitForTimeout: 10000
    }
  },
  include: {
    I: './steps_file.js',
    globalPage: './pages/globalPage.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'weather-checker-cc-pptr',
  plugins: {
    stepTimeout: {
      enabled: true,
      timeout: 30
    }
  }
}
