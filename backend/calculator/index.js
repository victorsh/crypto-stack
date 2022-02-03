'use strict'

const indicators = require('technicalindicators')
const { MongoClient } = require('mongodb')
const { chain } = require('mathjs')
const calculator = require('./src/calculator')

/**
 * 26 Indicators with sample data
 */
const calculations = async () => {
  console.log('calculate')

  // Accumulation Distribution Line (ADL): supply and demand
  const ADL_input = {high:[], low:[], close:[], volume:[]}
  await indicators.ADL.calculate(ADL_input)


  // Average Directional Index (ADX)
  // Average True Range (ATR): volatility
  // Awesome Oscillator (AO): market momentum
  // Bollinger Bands (BB): volatility
  // Commodity Channel Index (CCI)
  // Force Index (FI)
  // Know Sure Thing (KST)
  // Moneyflow Index (MFI)
  // Moving Average Convergence Divergence (MACD)
  // On Balance Volume (OBV)
  // Parabolic Stop and Reverse (PSAR)
  // Rate of Change (ROC)
  // Relative Strength Index (RSI)
  // Simple Moving Average (SMA)
  // Stochastic Oscillator (KD)
  // Stochastic RSI (StochRSI)
  // Triple Exponentially Smoothed Average (TRIX)
  // Typical Price
  // Volume Weighted Average Price (VWAP)
  // Volume Profile (VP)
  // Exponential Moving Average (EMA)
  // Weighted Moving Average (WMA)
  // Wilder’s Smoothing (Smoothed Moving Average, WEMA)
  // WilliamsR (W%R)
  // Ichimoku Cloud

  // SMA
  const period = 5
  // const values = [1,2,3,4,5,6,7,8,9]
  const values = [280, 288, 266, 295, 302, 310]
  const sma = await indicators.SMA.calculate({period: period, values: values, reversedInput: false})
  console.log(sma)
}

;(async () => {
  const url = ''
  const mongoClient = new MongoClient(url)
  calculations()
})()
