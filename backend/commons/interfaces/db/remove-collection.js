'use strict'

const utils = require('../../utils')

module.exports = async (mongoClient, db, col) => {
  const database = utils.AsyncRetry(await mongoClient.db(db))
  const collection = utils.AsyncRetry(await database.collection(col))
  const res = utils.AsyncRetry(await mongoClient.collection.drop())
  
  return res
}
