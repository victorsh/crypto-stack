'use strict'

const utils = require('../../utils')

module.exports = async (client, db, col, data={}) => {
  if (typeof client === 'undefined') return 'client undefined'
  if (typeof db === 'undefined') return 'database undefined'
  if (typeof col === 'undefined') return 'collection undefined'

  const database = await utils.AsyncRetry(await client.db(db))
  const collection = await utils.AsyncRetry(await database.collection(col))
  const response = await utils.AsyncRetry(await collection.find(data))

  return response
}
