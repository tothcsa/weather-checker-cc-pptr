module.exports = function (config) {
  let input
  input = process.env.INPUT ? process.env.INPUT : config.input
  input = input || config.default
  return input
}
