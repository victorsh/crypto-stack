'use strict'

const ccxt = require('ccxt')
const AsyncRetry = require('../../utils/async-retry')
const config = require('../../config')

/**
 * Creates ccxt client
 * 
 * @param {string} exchange
 * @returns {CCXT Object}
 */
 exports.InitClientPublic = async (exchange) => {
  const client = await AsyncRetry(await new ccxt[exchange]({
    enableRateLimit: true,
    rate_limit: config.api_keys['cex'][exchange]['rate_limit']
  }))
  await AsyncRetry(await client.loadMarkets())
  return client
}

/* [FETCH/LOAD MARKET DATA] */

/**
 * Fetch exchange currencies
 * 
 * @param {CCXT} client
 * @returns {array || boolean}
 */
 exports.FetchCurrencies = async client => {
  if (client.has['fetchCurrencies']) {
    return await AsyncRetry(await client.fetchCurrencies())
  }
  console.log(`${client.id}: Does not have fetchCurrencies function`)
  return false
}

/**
 * Load exchange markets
 * 
 * @param {CCXT} client
 * @returns {array || boolean}
 */
 exports.LoadMarkets = async client => {
  if (client.has['loadMarkets']) {
    return await AsyncRetry(await client.loadMarkets())
  }
  console.log(`${client.id}: Does not have loadMarkets function`)
  return false
}

/**
 * Fetch exchange markets
 * 
 * @param {CCXT} client
 * @returns {array || boolean}
 */
 exports.FetchMarkets = async client => {
  if (client.has['fetchMarkets']) {
    return await AsyncRetry(await client.fetchMarkets())
  }
  console.log(`${client.id}: Does not have fetchMarkets function`)
  return false
}

/* [FETCH SYMBOL DATA] */

/**
 * Fetch the OrderBook of a market symbol
 * 
 * @param {CCXT} client 
 * @param {string} market 
 * @returns {array || boolean}
 */
 exports.FetchOrderBook = async (client, market) => {
  if (client.has['fetchOrderBook']) {
    return await AsyncRetry(await client.fetchOrderBook(market))
  }
  console.log(`${client.id}: Does not have fetchOrderBook function.`)
  return false
}

/**
 * Fetch bids and asks of symbol
 * 
 * @param {*} client 
 * @param {*} symbol 
 * @param {*} period 
 * @param {*} since 
 * @param {*} limit 
 * @returns 
 */
exports.FetchBidsAsks = async client => {
  if (client.has['fetchBidsAsks']) {
    return await AsyncRetry(await client.fetchBidsAsks(market))
  }
  console.log(`${client.id}: Does not have fetchBidsAsks function.`)
  return false
}

/**
 * Fetch the OHLCV of a market symbol
 * 
 * @param {CCXT Object} client
 * @param {string} symbol 
 * @param {string} period 
 * @param {string} since 
 * @param {string} limit 
 * @returns {array || false}
 */
 exports.FetchOHLCV = async (client, symbol, period, since, limit) => {
  if (client.has['fetchOHLCV']) {
    return await AsyncRetry(await client.fetchOHLCV(symbol, period, since, limit))
  }
  console.log('Client does not support fetch ohlcv')
  return false
}

/**
 * Fetch trades on market symbol
 * 
 * @param {CCXT Object} client
 * @param {*} symbol
 * @param {*} period
 * @param {*} since
 * @param {*} limit
 * @returns {array || boolean}
 */
 exports.FetchTrades = async (client, symbol, period, since, limit) => {
  if (client.has['fetchTrades']) {
    return await AsyncRetry(await client.fetchTrades(symbol, period, since, limit))
  }
  console.log(`${client.id}: Does not have fetchTrades function.`)
  return false
}

/**
 * Fetch the ticker of market symbol
 * 
 * @param {CCXT Object} client
 * @param {string} symbol
 * @returns {array || false}
 */
 exports.FetchTicker = async (client, symbol) => {
  if (client.has['fetchTicker']) {
    return await AsyncRetry(await client.fetchTicker(symbol))
  }
  console.log(`${client.id}: Does not have fetchTicker function.`)
  return false
}

/**
 * Fetch all tickers available for exchange.
 * 
 * @param {CCXT} client 
 * @returns {array || boolean}
 */
 exports.FetchTickers = async client => {
  if (client.has['fetchTickers']) {
    return await AsyncRetry(await client.fetchTickers())
  }
  console.log(`${client.id}: Does not have fetchTickers function`)
  return false
}
