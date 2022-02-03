'use strict'

const config = require('../../../config')

module.exports = async (client) => {
  Object.entries(client.markets).forEach(market => {
    if (market.includes(config.select_markets)) {
      console.log(market)
    }
  })
}