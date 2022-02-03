'use strict'

const InitClientPub = require('./primitives/init-client-pub')
const utils = require('../../../utils')

/**
 * Initializes all exchanges with private and public keys
 * Loads Market Data 
 * 
 * @param {Array} exchanges Array of exchanges
 */
module.exports = async (exchanges) => {
  const clients = []
  
  await utils.AsyncForEach(exchanges, async (exchange) => {
    const client = await InitClientPub(exchange)
    clients.push(client)
  })

  return clients
}
