'use strict'

import React, { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../store/actions'

import { w3cwebsocket } from 'websocket'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const ThreeTest = () => {
  let client = null
  const rstate = useSelector(rstate => rstate)
  const dispatch = useDispatch()
  const { appState } = bindActionCreators(actions, dispatch)

  useEffect(async () => {
    try {
      client = new w3cwebsocket('ws://localhost:8085/', 'echo-protocol')
    } catch (e) { console.log(e) }
    
    appState({...rstate.main, status: 'three-test'})

    client.onerror = () => {
      const sendNumber = () => {
        if (client.readyState === client.OPEN) {
          const number = Math.round(Math.random() * 0xFFFFFF)
          client.send(number.toString())
          setTimeout(sendNumber, 1000)
        }
      }
      sendNumber()
    }

    client.onclose = () => {
      console.log('echo-protocol Client Closed')
    }

    client.onmessage = async (e) => {
      if (e.data[0] === 'j') {
        console.log('yes')
        let data = {}
        data = await JSON.parse(e.data.substr(2))
        console.log(data)
      }
      else if (typeof e.data === 'string') {
        console.log(e.data)
        await new Promise(res => { setTimeout(res, 1000)})
        client.send('hi')
      }
    }

    client.onopen = async () => {
      await new Promise(res => { setTimeout(res, 1000)})
      client.send('hi')
    }
    
    return () => {
    }
  }, [])

  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}

export default ThreeTest
