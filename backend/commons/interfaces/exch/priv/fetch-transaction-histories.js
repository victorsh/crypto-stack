'use strict'

const utils = require('../../../utils')
const { FetchWithdrawals, FetchDeposits } = require('.')

module.exports = async (clients) => {
  const transactions = {}
  await utils.AsyncForEach(clients, async client => {
    transactions[client.id] = {}
    transactions[client.id]['withdrawals'] = await FetchWithdrawals(client)
    transactions[client.id]['deposits'] = await FetchDeposits(client)
  })

  return transactions
}
