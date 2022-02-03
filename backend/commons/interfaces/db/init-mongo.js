'use strict'

const { MongoClient } = require('mongodb')
const utils = require('../../utils')

module.exports = async (url) => {
  const mongoClient = await utils.AsyncRetry(await new MongoClient(url, { useUnifiedTopology: true }))
  await utils.AsyncRetry(await mongoClient.connect())

  return mongoClient 
}
