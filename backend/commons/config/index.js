'use strict'

module.exports = {
  mongo_url: 'mongodb://localhost:27017',
  api_keys: require('./api-keys'),
  public_exchanges: ['bittrex', 'coinbasepro'],
  private_exchanges: ['bittrex', 'coinbasepro'],
  balance_excludes: ['free', 'used', 'total'],
  base_currencies: ['USD', 'USDC', 'USDT', 'BTC', 'ETH', 'BNB', 'BUSD', 'DAI'],
  base_currencies: ['USDC'],
  select_markets: ['BTC', 'ETH', 'ALGO', 'DOT', 'ATOM', 'RVN', 'NXS', 'HIVE'],
  eth_accounts: ['0x91d11B033B7a25e2D826D4499C464a88E7b4dA6a']
}
