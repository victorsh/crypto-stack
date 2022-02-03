'use strict'

const utils = require('../../../utils')

/**
 * Fetches all tickers by looping over all market symbols for a single client
 * 
 * @param {CCXT Client} client 
 * @returns {Array || Boolean}
 */
module.exports = async (client) => {
  if (client.has['fetchTicker']) {
    const tickers = {}
    await utils.AsyncForEach(Object.entries(client.symbols), async (symbol) => {
      const ticker = await client.fetchTicker(market)
      tickers[symbol] = ticker
    })

    return tickers
  }

  return false
}
