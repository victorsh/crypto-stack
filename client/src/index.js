import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { store } from './store/store'
import history from './history'

import App from './App'
import Threed from './lib/threed/threed'

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

/* Mount threejs canvas to <Body> after load */
document.addEventListener('DOMContentLoaded', () => {
  const threed = new Threed()
  threed.init()
})