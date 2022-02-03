import { store } from '../store/store'
import history from '../history'

const goit = () => {
  const state = store.getState()
  console.log('hello', state)
  store.dispatch({type: 'main', payload: {...state.main, status: 'hello'}})
  const state2 = store.getState()
  console.log('hello2', state2)
  // history.push('/two')
}

export default goit