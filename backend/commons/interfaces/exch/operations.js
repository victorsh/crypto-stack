'use strict'

const privates = require('./privates')
const publics = require('./publics')
const utils = require('../../utils')
const config = require('../../config')

//_______________
/*
    PRIVATES
*/
//_______________

/**
 * Intialize Private Clients
 * 
 * @param {array of strings} clients
 */
exports.InitClientsPrivate = async clients => {
  const pClients = []
  await utils.AsyncForEach(clients, async client => {
    const hold = await privates.InitClientPrivate(client)
    pClients.push(hold)
  })
  return pClients
}

/**
 * Fetch balances from all exchanges
 * 
 * @param {array of CCXT Objects} clients
 */
exports.FetchAllBalances = async clients => {
  const promises = []
  clients.rclients.forEach(client => {
    promises.push(privates.FetchBalance(client))
  })
  const raw_returns = await Promise.allSettled(promises)
  const parsed_rets = {}
  let i = 0
  Object.keys(clients.clients).forEach(client => {
    parsed_rets[client] = raw_returns[i].value
    i++
  })
  return parsed_rets
}

/**
 * 
 * @param {*} clients 
 * @returns 
 */
exports.FetchAllMyTrades = async clients => {
  const promises = []
  clients.rclients.forEach(client => {
    promises.push(privates.FetchMyTrades(client))
  })
  const raw_returns = await Promise.allSettled(promises)
  const parsed_rets = {}
  let i = 0
  Object.keys(clients.clients).forEach(client => {
    parsed_rets[client] = raw_returns[i].value
    i++
  })
  return parsed_rets
}

/**
 * Fetch Transactions from all exchanges
 * 
 * @param {array of CCXT Objects} clients
 */
exports.FetchAllTransactions = async clients => {
  const promises = []
  clients.rclients.forEach(client => {
    promises.push(privates.FetchTransactions(client))
  })
  const raw_returns = await Promise.allSettled(promises)
  const parsed_rets = {}
  let i = 0
  Object.keys(clients.clients).forEach(client => {
    parsed_rets[client] = raw_returns[i].value
    i++
  })
  return parsed_rets
}

/**
 * 
 * @param {*} clients 
 * @returns 
 */
exports.FetchAllDeposits = async clients => {
  const promises = []
  clients.rclients.forEach(client => {
    promises.push(privates.FetchDeposits(client))
  })
  const raw_returns = await Promise.allSettled(promises)
  const parsed_rets = {}
  let i = 0
  Object.keys(clients.clients).forEach(client => {
    parsed_rets[client] = raw_returns[i].value
    i++
  })
  return parsed_rets
}

/**
 * 
 * @param {*} clients 
 * @returns 
 */
exports.FetchAllWithdrawals = async clients => {
  const promises = []
  clients.rclients.forEach(client => {
    promises.push(privates.FetchWithdrawals(client))
  })
  const raw_returns = await Promise.allSettled(promises)
  const parsed_rets = {}
  let i = 0
  Object.keys(clients.clients).forEach(client => {
    parsed_rets[client] = raw_returns[i].value
    i++
  })
  return parsed_rets
}

/**
 * 
 * @param {*} clients 
 * @returns 
 */
exports.FetchAllClosedOrders = async clients => {
  const promises = []
  clients.rclients.forEach(client => {
    promises.push(privates.FetchClosedOrders(client))
  })
  const raw_returns = await Promise.allSettled(promises)
  const parsed_rets = {}
  let i = 0
  Object.keys(clients.clients).forEach(client => {
    parsed_rets[client] = raw_returns[i].value
    i++
  })
  return parsed_rets
}

/**
 * 
 * @param {*} clients 
 * @returns 
 */
exports.FetchAllOpenOrders = async clients => {
  const promises = []
  clients.rclients.forEach(client => {
    promises.push(privates.FetchOpenOrders(client))
  })
  const raw_returns = await Promise.allSettled(promises)
  const parsed_rets = {}
  let i = 0
  Object.keys(clients.clients).forEach(client => {
    parsed_rets[client] = raw_returns[i].value
    i++
  })
  return parsed_rets
}

/**
 * Determine how to exchange
 * 
 * EX) ETH -> BTC
 * Pair ETH/BTC
 * 
 * EX) MKR -> ALGO
 * MKR/ALGO || ALGO/MKR? NO
 * MKR/USD, MKR/BTC :: ALGO/USD, ALGO/EUR, ALGO/GBP, ALGO/BTC? (USD)
 * 
 * EX) CVC -> ALGO
 * -- CVC -> USDC -> USD -> ALGO
 * CVC/ALGO || ALGO/CVC? NO
 * ALGO/USD, ALGO/EUR, ALGO/GBP, ALGO/BTC :: CVC/USDC? NO
 * USDC -> USD, EUR, GBP? USD
 * CONVERT ALGO -> USD
 * COVERT USD -> USDC
 * CONVERT USDC -> CVC
 * 
 * @param {ccxt} client CCXT Private Exchange Client
 * @param {String} sell_currency The currency to be swapped from
 * @param {Number} sell_amount the amount of currency to be swapped from
 * @param {String} buy_currency the currency to be swapped to
 */
exports.CurrencySwap = async (client, sell_currency, sell_amount, buy_currency) => {}

/*_______________
-----------------
    PUBLICS
_________________*/


/**
 * Intialize Private Clients
 * 
 * @param {array of strings} clients
 */
 exports.InitClientsPublic = async clients => {
  const pClients = []
  await utils.AsyncForEach(clients, async client => {
    const hold = await publics.InitClientPublic(client)
    pClients.push(hold)
  })
  return pClients
}