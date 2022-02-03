'use strict'

const ccxt = require('ccxt')
const config = require('../../config')
const AsyncRetry = require('../../utils/async-retry')

/**
 * Create exchange client CCXT Object.
 * 
 * @param {string} exchange 
 * @returns {CCXT client}
 */
 exports.InitClientPrivate = async (exchange) => {
  let client = ''
  try {
    client = await AsyncRetry(await new ccxt[exchange]({
      apiKey: config.api_keys['cex'][exchange]['key'],
      secret: config.api_keys['cex'][exchange]['secret'],
      password: config.api_keys['cex'][exchange]['password'],
      enableRateLimit: true,
      rate_limit: config.api_keys['cex'][exchange]['rate_limit']
    }))
    await AsyncRetry(client.loadMarkets())
  } catch (e) { console.error(e) }

  return client
}

/**
 * Fetch balance from an exchange
 * 
 * @param {CCXT} client 
 * @returns {array || boolean}
 */
 exports.FetchBalance = async (client) => {
  if (client.has['fetchBalance']) {
    return await AsyncRetry(await client.fetchBalance())
  }
  console.log(`${client.id}: Does not have fetchBalance function.`)
  return false
}

/* [ORDERS] */

/**
 * Fetch Order from an exchange
 * Fetches a single order (open or close) by order id
 * 
 * @param {CCXT} client 
 * @returns {array || boolean}
 */
 exports.FetchOrder = async (client, orderid, symbol, params) => {
  if (client.has['fetchOrder']) {
    return await AsyncRetry(client.fetchOrder(orderid, symbol, params))
  }
  console.log(`${client.id}: Does not have fetchOrder function.`)
  return false
}

/**
 * Fetch Orders from an exchange
 * Fetches a list of all orders (either open or closed/canceled)
 * 
 * @param {CCXT} client 
 * @returns {array || boolean}
 */
 exports.FetchOrders = async (client, symbol, since, limit, params) => {
  if (client.has['fetchOrders']) {
    return await AsyncRetry(client.fetchOrders(symbol, since, limit, params))
  }
  console.log(`${client.id}: Does not have fetchOrders function.`)
  return false
}

/**
 * Fetch Open Orders from an exchange
 * Fetches a list of open orders
 * 
 * @param {CCXT} client 
 * @returns {array || boolean}
 */
 exports.FetchOpenOrders = async (client) => {
  if (client.has['fetchOpenOrders']) {
    return await AsyncRetry(client.fetchOpenOrders())
  }
  console.log(`${client.id}: Does not have fetchOpenOrders function.`)
  return false
}

/**
 * Fetch Closed Orders from an exchange
 * Fetches a list of closed orders
 * 
 * @param {CCXT} client 
 * @returns {array || boolean}
 */
 exports.FetchClosedOrders = async (client, symbol, since, limit, params) => {
  if (client.has['fetchClosedOrders']) {
    return await AsyncRetry(client.fetchClosedOrders())
  }
  console.log(`${client.id}: Does not have fetchClosedOrders function.`)
  return false
}

/**
 * Fetch MyTrades from an exchange
 * Fetches a list of all settled trades
 * 
 * @param {CCXT} client 
 * @param {string} market 
 * @param {string} since 
 * @param {string} limit 
 * @param {object} params 
 * @returns {array || false}
 */
 exports.FetchMyTrades = async (client, symbol, since, limit, params) => {
  if (client.has['fetchMyTrades']) {
    return await AsyncRetry(await client.fetchMyTrades(symbol, since, limit, params))
  }
  console.log(`${client.id}: Does not have fetchMyTrades function.`)
  return false
}

/* [TRANSACTION HISTORIES] */
/**
 * Fetch Transactions (Deposits and Withdrawals) from exchange.
 * 
 * @param {CCXT} client 
 * @returns {array || boolean}
 */
 exports.FetchTransactions = async (client) => {
  if (client.has['fetchTransactions']) {
    return await AsyncRetry(await client.fetchTransactions())
  }
  console.log(`${client.id}: Does not have fetchTransactions function.`)
  return false
}

/**
 * Fetch Deposits from an exchange
 * 
 * @param {CCXT} client 
 * @returns {array || boolean}
 */
 exports.FetchDeposits = async (client) => {
  if (client.has['fetchDeposits']) {
    return await AsyncRetry(client.fetchDeposits())
  }
  console.log(`${client.id}: Does not have fetchDeposits function.`)
  return false
}

/**
 * Fetch withdrawals
 * 
 * @param {CCXT object} client
 * @returns {array || false}
 */
 exports.FetchWithdrawals = async (client) => {
  if (client.has['fetchWithdrawals']) {
    return await AsyncRetry(client.fetchWithdrawals())
  }
  console.log(`${client.id}: Does not have fetchWithdrawals function.`)
  return false
}

/* [TRADING CALLS] */

/**
 * Creates a limit buy order
 * 
 * @param {CCXT Object} client
 * @param {string} symbol
 * @param {string} amount
 * @param {string} price
 * @returns {array || false}
 */
exports.CreateLimitBuyOrder = async (client, symbol, amount, price) => {
  if (client.has['createLimitBuyOrder']) {
    return await AsyncRetry(await client.createLimitBuyOrder(symbol, amount, price))
  }
  console.log(`${client.id}: Does not have createLimitBuyOrder function`)
  return false
}

/**
 * Creates a limit buy order
 * 
 * @param {CCXT Object} client
 * @param {string} symbol
 * @param {string} amount
 * @param {string} price
 * @returns {array || false}
 */
exports.CreateLimitSellOrder = async (client, symbol, amount, price) => {
  if (client.has['createLimitBuyOrder']) {
    return await AsyncRetry(await client.createLimitSellOrder(symbol, amount, price))
  }
  console.log(`${client.id}: Does not have createLimitSellOrder function`)
  return false
}

/**
 * Cancel an order by id
 * 
 * @params {CCXT Object} client
 * @returns {array || false}
 */
exports.CancelOrder = async (client, orderid, params) => {
  if (client.has['cancelOrder']) {
    return await AsyncRetry(await client.cancelOrder(orderid, params))
  }
  console.log(`${client.id}: Does not have cancelOrder function`)
  return false
}

/**
 * Cancels all open orders
 * 
 * @params {CCXT Object} client
 * @returns {array || false}
 */
exports.CancelAllOrders = async (client) => {
  if (client.has['cancelAllOrders']) {
    return await AsyncRetry(client.CancelAllOrders())
  }
  console.log(`${client.id}: Does not have cancelAllOrders function`)
  return false
}

/* [CROSS EXCHANGE] */

/**
 * Deposit
 */
exports.fetchDepositAddress = async (code, params) => {
  if (client.has['fetchDepositAddress']) {
    return await AsyncRetry(client.fetchDepositAddress(code, params))
  }
  console.log(`${client.id}: Does not have fetchDepositAddress function`)
  return false
}

exports.fetchDepositAddresses = async (code, params) => {
  if (client.has['fetchDepositAddresses']) {
    return await AsyncRetry(client.fetchDepositAddresses(code, params))
  }
  console.log(`${client.id}: Does not have fetchDepositAddresses function`)
  return false
}

exports.createDepositAddress = async (code, params) => {
  if (client.has['createDepositAddress']) {
    return await AsyncRetry(client.createDepositAddress(code, params))
  }
  console.log(`${client.id}: Does not have createLimitSellOrder function`)
  return false
}

/**
 * Withdraw
 */
exports.withdraw = async (code, params) => {
  if (client.has['withdraw']) {
    return await AsyncRetry(client.withdraw(code, params))
  }
  console.log(`${client.id}: Does not have createLimitSellOrder function`)
  return false
}

