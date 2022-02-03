const axios = require('axios')
const base_url = require('./base_url')

// https://algoexplorerapi.io/health

exports.getHealth = async () => {
  try {
    return await axios.get(`${base_url}health`)
  } catch (e) { console.error(e) }
}

exports.getMetrics = async () => {
  try {
    return await axios.get(`${base_url}metric`)
  } catch (e) { console.error(e) }
}

exports.getAccount = async (address) => {
  try {
    return await axios.get(`${base_url}v2/accounts/${address}`)
  } catch (e) { console.error(e) }
}

exports.getUnconfirmedTransactions = async (address) => {
  try {
    return await axios.get(`${base_url}v2/accounts/${address}/transactions/pending`)
  } catch (e) { console.error(e) }
}

exports.getAsset = async (asset) => {
  try {
    return await axios.get(`${base_url}v2/assets/${asset}`)
  } catch (e) { console.error(e) }
}

exports.postTransaction = async () => {
  try {
    return await axios.get(`${base_url}v2/transactions`, { rawtxn: 'Some String'})
  } catch (e) { console.error(e) }
}

exports.getTransactionParams = async () => {
  try {
    return await axios.get(`${base_url}v2/transactions/params`)
  } catch (e) { console.error(e) }
}

exports.getTransactionPending = async (txid) => {
  try {
    return await axios.get(`${base_url}v2/transactions/pending${typeof txid === 'undefined' ? `/${txid}` : ''}`)
  } catch (e) { console.error(e) }
}

exports.getBlock = async (round) => {
  try {
    return await axios.get(`${base_url}v2/blocks/${round}`)
  } catch (e) { console.error(e) }
}

exports.waitRoundNodeStatus = async (round) => {
  try {
    return await axios.get(`${base_url}v2/status/wait-for-block-after/${round}`)
  } catch (e) { console.error(e) }
}

exports.getLedgerSupply = async () => {
  try {
    return await axios.get(`${base_url}v2/ledger/supply`)
  } catch (e) { console.error(e) }
}

exports.getStatus = async () => {
  try {
    return await axios.get(`${base_url}v2/status`)
  } catch (e) { console.error(e) }
}

exports.postTealCompile = async (contract) => {
  try {
    return await axios.get(`${base_url}v2/teal/compile`, contract, { 'headers': { 'content-type': 'application/json' } })
  } catch (e) { console.error(e) }
}