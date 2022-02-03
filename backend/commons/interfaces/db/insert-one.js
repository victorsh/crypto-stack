'use strict'

const utils = require('../../utils')

module.exports = async (client, db, col, data) => {
  const database = utils.AsyncRetry(await client.db(db))
  const collection = utils.AsyncRetry(await database.collection(col))
  const response = await utils.AsyncRetry(await collection.insertOne(data))

  return response
}
