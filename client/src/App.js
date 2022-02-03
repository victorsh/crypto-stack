// https://stackoverflow.com/questions/39342195/intercept-handle-browsers-back-button-in-react-router
// https://stackoverflow.com/questions/47495696/react-router-how-to-restore-state-after-browser-back-button
// https://stackoverflow.com/questions/61939358/how-to-intercept-back-button-in-a-react-spa-using-function-components-and-react

import React, { useContext, useEffect, useState } from 'react'
import {
  useHistory, BrowserRouter, Route, RouteComponentProps, withRouter,
  Switch, Link as RouterLink } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './store/actions'
// libs
import web3i from './lib/crypto/eth/interfaces/web3/web3i'
// pages
import Home from './pages/Home'
import Balances from './pages/Balances'
import About from './pages/About'
import Projects from './pages/Projects'
// import ReactThreeTest from './pages/ThreeFibersTest'
import ThreeTest from './pages/ThreeTest'
// css
import './scss/styles.scss'

const App = () => {
  const history = useHistory()
  const rstate = useSelector((rstate) => rstate)
  const dispatch = useDispatch()
  const { appState } = bindActionCreators(actions, dispatch)

  useEffect(() => {
    appState({...rstate.main, status: 'landing'})
    return () => {
    }
  }, []) //empty array causes this effect to only run on mount

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/balances'>
            <Balances />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/three'>
            <ThreeTest />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

const PageOne = () => {
  const history = useHistory()

  return (
    <div>
      <button onClick={(e) => doSomething(e)}>Do</button>
      <button onClick={() => history.push('/two')}>go to two</button>
    </div>
  )
}

const PageTwo = () => {
  const history = useHistory()
  const rstate = useSelector((rstate) => rstate)
  const dispatch = useDispatch()
  const { appState } = bindActionCreators(actions, dispatch)

  return (
    <div>
      page 2
      <button onClick={() => history.push('/')}>go to one</button>
      <div>{rstate.main.status}</div>
    </div>
  )
}