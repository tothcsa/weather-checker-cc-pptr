// in this file you can append custom step methods to 'I' object
const { globalPage } = inject()

module.exports = function () {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    async acceptCookies (allCookies = false) {
      await globalPage.acceptCookies(allCookies)
    }

  })
}
