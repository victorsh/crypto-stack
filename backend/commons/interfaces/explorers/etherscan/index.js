'use strict'

const axios = require('axios')
const base_url = require('./base_url')

module.exports = async () => {
   try {
      return await axios(`${base_url.main_url}`)
   } catch (e) { console.error(e) }
}

/*
https://api.etherscan.io/api
   ?module=account
   &action=balance
   &address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae
   &tag=latest
   &apikey=YourApiKeyToken
*/