'use strict'

const events = require('events')
const eventEmitter = new events.EventEmitter()

let runLoop = true

const looper = async (i) => {
  console.log('loopin: ', i)
  await new Promise(res => setTimeout(res, 1000))
  if (runLoop) {
    looper(i+1)
  }
}

;(async () => {
  looper(0)
  console.log('Out of looper.')
  setTimeout(() => {
    eventEmitter.emit('stop-loop')
  }, 5000)
  eventEmitter.on('stop-loop', () => runLoop = false)
})()
