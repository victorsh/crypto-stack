'use strict'

const utils = require('../../../utils')
const config = require('../../../config')
const FetchOrderbook = require('./primitives/fetch-orderbook')

module.exports = async (clients) => {
  const OrderBooks = {}
  await utils.AsyncForEach(clients, async client => {
    OrderBooks[client] = {}
    const markets = ['ALGO/USD', 'ATOM/USD', 'BTC/USD']
    await utils.AsyncForEach(markets, async market => {
      await FetchOrderbook(client, 'ALGO/USD')
    })
  })

  return OrderBooks
}
