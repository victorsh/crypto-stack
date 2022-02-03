'use strict'
const { MongoClient } = require('mongodb')
const commons = require('../commons')
const Collector = require('./collector')

;(async () => {
  const base_currencies = ['USD', 'USDT', 'BTC', 'ETH', 'BNB']
  const exchanges = ['binanceus', 'bittrex', 'coinbasepro']

  // INIT DB
  const local_mongodb_url = 'mongodb://localhost:27017'
  const mongoClient = await commons.Interfaces.Db.InitMongo(local_mongodb_url)

  // INIT CLIENTS
  const clients = await commons.ExchOps.InitClientsPriv(commons.config.private_exchanges)
  
  // PARSE MARKETS
  const markets = await commons.ExchOps.ParseMarkets(clients)

  // RUN COLLECTORS
  // clients.forEach(client => {
  //   markets[client.id].forEach(market => {
  //     // console.log(market)
  //     Collector(client, mongoClient, market)
  //   })
  // })
})()
