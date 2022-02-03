import React, { useContext, useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../store/actions'

const Balances = () => {
  const rstate = useSelector((rstate) => rstate)
  const dispatch = useDispatch()
  const { appState } = bindActionCreators(actions, dispatch)

  return (
    <div>
      <div>
        Cex Balances
        <div>Bittrex</div>
        <div>Coinbase</div>
      </div>
      <div>
        Blockchain
        <div>Ethereum</div>
        <div>Matic</div>
        <div>Algo</div>
      </div>
    </div>
  )
}

export default Balances
