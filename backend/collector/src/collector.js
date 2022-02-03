'use strict'

const commons = require('tinker-bot-commons')

module.exports = async (client, mongoClient, market) => {
  const starttime = Date.now()
  const coin = market.substring(0, market.indexOf('/')).toUpperCase()
  const base = market.substring(market.indexOf('/') + 1)

  // GET MARKET DATA FOR SELECTED COINS
  // CHECK IF LAST DATAPOINT IS SAME!!!
  const tick = await commons.Interfaces.exch.FetchTicker(cleint, market)
  const orderbook = await commons.Interfaces.exch.FetchOrderbook(client, market)

  try {
    const database = mongoClient.db('timeseries')
    const exchange_coll = database.collection(`${client.id}_${coin}_${base}`)
    const data = {
      timestamp: Date.now(),
      exchange_market: `${client.id}_${market}`,
      tick: tick,
      orderbook: orderbook
    }

    await exchange_coll.insertOne(data)
  } catch (e) {
    console.error(e)
  }

  const exectime = Date.now() - starttime
  console.log(" execution time: " + exectime + " timestamp: " + Date.now())

  await setTimeout(await bot, timeout, client, mongoClient, market)
}
