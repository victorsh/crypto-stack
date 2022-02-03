'use strict'

const FetchClosedOrder = require('./primitives/fetch-closed-order')
const utils = require('../../../utils')

module.exports = async (clients) => {
  const closedOrders = {}
  await utils.AsyncForEach(clients, async client => {
    closedOrders[client.id] = await FetchClosedOrder(client)
  })

  return closedOrders
}
