import React, { useContext, useEffect, useState } from 'react'
import { ethers } from 'ethers'
import getWeb3 from '../lib/crypto/eth/interfaces/web3/metamask'
import abi from '../assets/abi/SampleNFT.json'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../store/actions'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'


const Home = () => {
  const rstate = useSelector((rstate) => rstate)
  const dispatch = useDispatch()
  const { appState } = bindActionCreators(actions, dispatch)

  useEffect(async () => {
    // appState({...rstate.main, status: 'landing'})
    console.log(abi)
    const web3 = await getWeb3()
    const accounts = await web3.eth.getAccounts()
    console.log(accounts[0])
    console.log('what?')
    const NFT = new web3.eth.Contract(abi.abi, '0x524ee635999964E8bF2416802E593AcabD6462d0')
    await NFT.methods.mint('0x294096D9d3081c060eB644C2B3a004C1862615aF', 'hello!')
    return () => {
    }
  }, []) //empty array causes this effect to only run on mount
  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}

export default Home
