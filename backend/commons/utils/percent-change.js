'use strict'

/**
 * Parse market base symbol
 * 
 * @param {number} startPrice
 * @param {number} endPrice
 */
module.exports = (startPrice, endPrice) => {
  return ((endPrice - startPrice) / Math.abs(startPrice)) * 100
}
