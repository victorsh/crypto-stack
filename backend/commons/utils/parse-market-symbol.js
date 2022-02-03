'use strict'

/**
 * Parse market symbol
 * 
 * @param {String} market EX BTC/USD -> BTC
 */
module.exports = (market) => {
  return market.substring(0, market.indexOf('/')).toUpperCase()
}
