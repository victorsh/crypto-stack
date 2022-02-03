import { combineReducers } from 'redux'

const initialState = {
  id: null
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'main':
      return action.payload
    default:
      return state
  }
}

const reducers = combineReducers({
  main: appReducer
})

export default reducers
