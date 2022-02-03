import React from 'react'
// import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { Button, Link } from '@material-ui/core'

const NavBar = () => {
  const history = useHistory()
  return (
    <div>
      <button onClick={() => history.push('/')}>Home</button>
      <button onClick={() => history.push('/balances')}>Balances</button>
      <button onClick={() => history.push('/projects')}>Projects</button>
      <button onClick={() => history.push('/about')}>About</button>
    </div>
  )
}

export default NavBar