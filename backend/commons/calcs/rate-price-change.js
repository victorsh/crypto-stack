'use strict'
const Decimal = require('decimal.js')
module.exports = async (pPrice, cPrice, pTime, cTime) => {
  pPrice = new Decimal(pPrice.toString())
  cPrice = new Decimal(cPrice.toString())
  pTime = new Decimal(pTime.toString())
  cTime = new Decimal(cTime.toString())
  
  let percentChange = cPrice.minus(pPrice).dividedBy(pPrice.abs()).times(100)
  const trending = percentChange >= 0 ? true : false
  percentChange = percentChange.abs()
  const deltaTime = cTime.minus(pTime)
  return [percentChange.dividedBy(deltaTime), trending]
}