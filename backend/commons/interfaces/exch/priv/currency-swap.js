'use strict'

const config = require('../../../config')
const utils = require('../../../utils')
const FetchTicker = require('../pub/primitives/fetch-ticker')

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
module.exports = async (client, sell_currency, sell_amount, buy_currency) => {
  
  // EX) ETH -> BTC
  // Pair ETH/BTC
  if (market_exists(client, sell_currency, buy_currency)) {
    const market = `${sell_currency}/${buy_currency}`
    const ticker = await FetchTicker(client, market)
    console.log('Done: ' + market)
    
    // await interfaces.exch.priv.LimitSellOrder(client, market, sell_amount, ticker['last'][0])
    return true
  } else if (market_exists(client, sell_currency, buy_currency)) {
    const market = `${sell_currency}/${buy_currency}`
    const ticker = await FetchTicker(client, market)
    const buy_amount = sell_amount
    console.log('Done: ' + market)

    // await interfaces.exch.priv.LimitBuyOrder(client, market, buy_amount, ticker['last'][0])
    return true
  }


  /**
   * EX) MKR -> ALGO
   * MKR/ALGO || ALGO/MKR? NO
   * MKR/USD, MKR/BTC :: ALGO/USD, ALGO/EUR, ALGO/GBP, ALGO/BTC? (USD)
   */
  config.base_currencies.forEach(async base => {
    const sell_market = `${sell_currency}/${base}`
    const buy_market = `${buy_currency}/${base}`
    
    if (market_exists(client, sell_currency, base) && market_exists(client, buy_currency, base)) {
      const sell_ticker = await FetchTicker(client, sell_market)
      // await interfaces.exch.priv.LimitSellOrder(client, sell_market, sell_amount, sell_ticker['last'][0])
      const buy_ticker = await FetchTicker(client, buy_market)
      // await interfaces.exch.priv.LimitBuyOrder(client, buy_market, buy_amount, buy_ticker['last'][0])
      return true
    }
  })

  /** TODO
   * EX) CVC -> ALGO
   * -- CVC -> USDC -> USD -> ALGO
   * CVC/ALGO || ALGO/CVC? NO
   * ALGO/USD, ALGO/EUR, ALGO/GBP, ALGO/BTC :: CVC/USDC? NO
   * USDC -> USD, EUR, GBP? USD
   * CONVERT ALGO -> USD
   * COVERT USD -> USDC
   * CONVERT USDC -> CVC
   */
  const middle_base_pair = await matching_base_pair(client, sell_currency, buy_currency) // [sell market, buy market, middle market]
  
  if (middle_base_pair) {
    // SELL
    const mmATicker = await interfaces.exch.pub.FetchTicker(client, middle_base_pair[0])
    const mmBTicker = await interfaces.exch.pub.FetchTicker(client, middle_base_pair[1])
    const mmMTicker = await interfaces.exch.pub.FetchTicker(client, middle_base_pair[2])
    // await interfaces.exch.priv.LimitSellOrder(client, middle_base_pair[0], sell_amount, sell_ticker['last'][0])
  }

  return false
}

const matching_base_pair = async (client, currencyA, currencyB) => {
  const currencyA_markets = [] // SELL
  const currencyB_markets = [] // BUY
  // USD, USDC, USDT, BTC, ETH, BNB
  config.base_currencies.forEach(async base => {
    if (market_exists(client, currencyA, base)) {
      // ALGO/USD, ALGO/USDT, ALGO/BTC, ALGO/ETH
      currencyA_markets.push(`${currencyA}/${base}`)
    }
    if (market_exists(client, currencyB, base)) {
      // CVC/USDC
      currencyB_markets.push(`${currencyB}/${base}`)
    }
  })

  currencyA_markets.forEach(marketA => { // SELL
    currencyB_markets.forEach(marketB => { // BUY
      if (market_exists(client, utils.ParseMarketBase(marketA), utils.ParseMarketBase(marketB))) {
        // FIND: USD/USDC
        return [marketA, marketB, `${utils.ParseMarketBase(marketA)}/${utils.ParseMarketBase(marketB)}`]
      }
      if (market_exists(client, utils.ParseMarketBase(marketB), utils.ParseMarketBase(marketA))) {
        return [marketA, marketB, `${utils.ParseMarketBase(marketB)}/${utils.ParseMarketBase(marketA)}`]
      }
    })
  })

  return false
}

// Assumes Market is already loaded
const market_exists = (client, currency, base) => {
  return typeof client.markets[`${currency}/${base}`] !== 'undefined'
}
