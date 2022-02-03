import React from 'react'
import { connect } from 'react-redux'
import { appState } from '../store/actions'

class TT extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.main)
  }
  componentDidMount() {
    console.log(this.props.main)
  }
  doit() {
    console.log('do it')
    console.log('yes!')
    this.props.appState({...this.props.main, status: 'TT'})
  }

  render() {
    return (
      <div>
        {this.props.main.status}
        <button onClick={() => this.doit()}>doit</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const main = state.main
  return { main }
}

export default connect(mapStateToProps, { appState })(TT)
