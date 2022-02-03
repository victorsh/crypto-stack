'use strict'

const utils = require('../../utils')

module.exports = async (mongoClient, db) => {
  const database = utils.AsyncRetry(await mongoClient.db(db))
  const res = utils.AsyncRetry(await database.dropDatabase())
  
  return res
}
