import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

// takes in reducers and default state
export const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk)
)
