'use strict'

const FetchBalance = require('./primitives/fetch-balance')

module.exports = async (client) => {
  const parsed_balance = {}
  const balance = await FetchBalance(client)

  delete balance.info
  delete balance.free
  delete balance.used
  delete balance.total

  Object.entries(balance).forEach(market => {
    if (market[1]['total'] > 0) {
      parsed_balance[market[0]] = market[1]
    }
  })

  return parsed_balance
}
