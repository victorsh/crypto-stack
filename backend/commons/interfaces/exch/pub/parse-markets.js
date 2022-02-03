'use strict'

const utils = require('../../../utils')
const config = require('../../../config')
const LoadMarkets = require('./primitives/load-markets')

module.exports = async (clients) => {
  const parsed_markets = {}

  if (typeof config.markets === 'undefined') {
    config.markets = {}
  }
  
  await utils.AsyncForEach(clients, async client => {
    config.markets[client.id] = await LoadMarkets(client)
    parsed_markets[client.id] = {}
    
    config.markets[client.id].forEach(market => {
      if (config.base_currencies.includes(market.base)) {
        parsed_markets[client.id][market.symbol] = market
      }
    })
  })

  return parsed_markets
}