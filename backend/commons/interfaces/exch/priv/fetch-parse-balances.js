'use strict'

const FetchParseBalance = require('./fetch-parse-balance')
const utils = require('../../../utils')

module.exports = async (clients) => {
  const balances = {}
  await utils.AsyncForEach(clients, async client => {
    const balance = await FetchParseBalance(client)
    balances[client.id] = balance
  })

  return balances
}
