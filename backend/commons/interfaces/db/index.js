'use strict'

exports.FindAll = require('./find-all')
exports.InitMongo = require('./init-mongo')
exports.InsertOne = require('./insert-one')
exports.RemoveCollection = require('./remove-collection')
exports.RemoveDatabase = require('./remove-database')

// const { MongoClient } = require('mongodb')
// const url = 'mongodb://localhost:27017'

// module.exports = async url => {
//   const mongoClient = await new MongoClient(url)
//   await mongoClient.connect()
//   return mongoClient 
// }
// class MongoDB {
//   database = null
//   collection = null
//   client = null

//   constructor() {
//     return (async () => {
//       await this.init()
//       return this
//     })()
//   }
  
//   async init() {
//     this.client = new MongoClient(url, { useUnifiedTopology: true })

//     try {
//       await this.client.connect()

//       this.database = await this.client.db('timeseries')
//       this.collection = await this.database.collection('exchanges')
//       let bittrex = { name: 'bittrex' }
//       const result = await this.collection.insertOne(bittrex)

//       console.log(await this.client.db('admin').command({ ping: 1}))
//     } catch (e) {
//       console.log(e)
//     }
//   }

//   async showDBs() {
//     let adminDB = await this.database.admin()
//     let res = await adminDB.listDatabases()
//     console.log(res)
//   }

//   async createDB(name) {
//     this.database = await this.client.db(name)
//   }

//   async dropDB(name) {
//     this.database.dropDatabase(name)
//   }

//   async createCollection(name) {
//     this.collection = await this.database.collection(name)
//   }

//   async find(entry) {
//     const exchange = await this.collection.findOne(entry)
//     console.log(exchange)
//   }

//   async insertOne(entry) {
//     const result = await this.collection.insertOne(entry)
//   }
// }

// module.exports = MongoDB