import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions'

const Balance = () => {
  const rstate = useSelector((rstate) => rstate)
  const dispatch = useDispatch()
  const { appState } = bindActionCreators(actions, dispatch)
  
  return (
    rstate.main.account !== 'landing' ?
      <div className="balance">
        <span>Balance</span>
        <span>{rstate.main.balance} {rstate.main.standardUnit}</span>
      </div>
    : ''
  )
}

export default Balance
