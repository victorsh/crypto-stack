'use strict'

const InitClientPriv = require('./primitives/init-client-priv')
const AsyncForEach = require('../../../utils/async-for-each')

/**
 * Initializes all exchanges with private and public keys
 * Loads Market Data 
 * 
 * @param {Array} exchanges Array of exchanges
 */
module.exports = async (exchanges) => {
  const clients = []
  
  await AsyncForEach(exchanges, async (exchange) => {
    const client = await InitClientPriv(exchange)
    clients.push(client)
  })

  return clients
}
