'use strict'

const axios = require('axios')
const base_url = require('./base_url')
const config = require('../../../config')

// Covalenthq
exports.getAccountBalances = async (account, env, net) => {
  try {
    return await axios.get(`${base_url}${chain_ids[env][net]}/address/${account}/balances_v2/`, {
      params: {
        key: config.api_keys.explorers.covalent.key
      }
    })
  } catch (e) { console.error(e) }
}

exports.getBlock = async (env, net, block) => {
  try {
    return await axios.get(`${base_url}${chain_ids[env][net]}/blocks_v2/${block}/`, {
      params: {
        key: config.api_keys.explorers.covalent.key
      }
    })
  } catch (e) { console.error(e) }
}

exports.getBlocks = async (env, net, start, end) => {
  try {
    return await axios.get(`${base_url}${chain_ids[env][net]}/blocks_v2/${start}/${end}/`, {
      params: {
        key: config.api_keys.explorers.covalent.key
      }
    })
  } catch (e) { console.error(e) }
}

const chain_ids = {
  'main': {
    'ethereum': '137',
    'polygonmatic': '43114',
    'avalanche': '43114',
    'binancesmartchain': '56',
    'fantom': '250',
    'rsk': '30',
    'arbitrum': '42161',
    'palm': '11297108109'
  },
  'test': {
    'ethereum': '42', // KOVAN
    'polygonmatic': '80001', // MUMBAI
    'avalanche': '43113', // FUJI
    'smartchain': '97',
    'moonbasealpha': '1287',
    'fantom': '4002',
    'rsk': '31',
    'arbitrum': '421611',
    'palm': '11297108099'
  } 
}

const action_types = {
  'account': {
    'balances': 'balances_v2',
    'portfolio': 'portfolio_v2',
    'transactions': 'transactions_v2',
    'transfers': 'transfers_v2'
  },
  'block': {

  },
  'events': {

  }
}

/*
/v1/{chain_id}/address/{address}/balances_v2/

/v1/{chain_id}/block_v2/{block_height}/
/v1/{chain_id}/block_v2/{start_date}/{end_date}/

/v1/{chain_id}/events/address/{address}/
/v1/{chain_id}/events/topics/{topic}/

/v1/{chain_id}/tokens/{address}/token_holders_changes/
/v1/{chain_id}/tokens/{address}/token_holders/
/v1/{chain_id}/tokens/{contract_address}/nft_metadata/{token_id}/

/v1/{chain_id}/tokens/{contract_address}/nft_token_ids/
*/