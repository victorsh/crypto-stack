'use strict'

const express = require('express')
const app = express()
const commons = require('../commons')
const port = 3002

app.get('/', async (req,res) => {
    /**
   * PRIVATE
   */

  // Initialize Exchanges and Load Markets
  const clients_priv = await commons.interfaces.exch.priv.InitClientsPriv(commons.config.private_exchanges)

  const data = await commons.interfaces.explorers.covalent.MaticAccountDetails(commons.config.eth_accounts[0])
  console.log(data.data.data.items)

  await commons.explorers.algoexplorer
  return res.send(`Hello from Tinker Bot!`)
})

app.get('/covalent/:addr', (req, res) => {
  return res.send(`Covalen ADDR: ${req.params.addr}`)
})

// Cex
app.get('/init-cex', async (req, res) => {
  const clients_priv = await commons.interfaces.exch.priv.InitClientsPriv(commons.config.private_exchanges)
  const clients_pub = await commons.interfaces.exch.pub.InitClientsPub(commons.config.public_exchanges)
  // await commons.utils.AsyncForEach(clients_pub, async client => {
  //   const tickers = await commons.exchops.FetchAllTickers(client)
  //   const tickers = await commons.exchops.FetchSelectTickers(client)
  // })
  // Fetch Balances of Initialized Exchanges
  await commons.utils.AsyncForEach(clients_priv, async (client) => {
    console.log('Fetching Balance of :' + client.id)
    const balance = await commons.interfaces.exch.priv.FetchParseBalance(client)
    console.log(balance)
  })
  res.send('cex started')
})

app.get('/stop-cex', (req, res) => {
  res.send('cex stopped')
})

app.listen(port, () => {
  console.log(`Listening from port ${port}`)
})

