'use strict'

/**
 * Parse market base symbol
 * 
 * @param {String} market EX. BTC/USD -> USD
 */
module.exports = (market) => {
  return market.substring(market.indexOf('/') + 1)
}
