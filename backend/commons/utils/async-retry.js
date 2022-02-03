'use strict'

const retry = require('async-await-retry')

module.exports = async (fn) => {
  const config = {
    retriesMax: 5, interval: 1000, exponential: true, factor: 3, jitter: 300
  }
  try {
    const res = await retry(async () => {
      return new Promise((resolve) => {
        resolve(fn)
      })
    }, null, config)

    return res
  } catch (e) {
    console.error(e)
    return false
  }
}