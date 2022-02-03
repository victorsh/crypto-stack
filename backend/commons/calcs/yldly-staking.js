'use strict'
const Decimal = require('decimal.js')

module.exports = (init_algo) => {
  init_algo = new Decimal(init_algo)
  let algo_stake_pct = new Decimal(0.097)
  algo_stake_pct = algo_stake_pct.dividedBy(365)
  let yldly_stake_pct = new Decimal(0.287)
  yldly_stake_pct = yldly_stake_pct.dividedBy(365)
  
  let d1_algo = init_algo.times(algo_stake_pct)
  let algo_sum = init_algo
  for (let i = 0; i < 31; i++) {
    // add to yieldly
    // calculate yieldly sum
    algo_sum = algo_sum.plus(algo_sum.times(algo_stake_pct))
    console.log(algo_sum)
  }

  return algo_sum
}