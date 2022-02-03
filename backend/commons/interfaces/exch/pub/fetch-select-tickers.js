'use strict'

const utils = require('../../../utils')
const config = require('../../../config')

module.exports = async (client) => {
  const tickers = {}
  await utils.AsyncForEach(Object.entries(client.symbols), async (symbol) => {
    const base = symbol.substr(0, symbol.indexOf('/'))
    const quote = symbol.substr(symbol.indexOf('/') + 1, symbol.length)
    if (config.select_markets.includes(base) || config.select_markets.includes(quote)) {
      const ticker = await client.fetchTicker(symbol)
      tickers[symbol] = ticker
    }
  })

  return tickers
}
