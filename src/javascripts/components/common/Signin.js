import React from 'react'
import { connect } from 'react-redux'

import CloseSvg from '../modules/CloseSvg'
/*
class Toast extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  render() {
    return (
      <div>{ this.props. }</div>
    )
  }

}
*/

const Signin = ({ close, user, test }) => (
  <div className="common-signin">
    <button className="close" onClick={close}>
      {CloseSvg}
    </button>
    <img className="avatar" src={user.avatar}/>
    <div className="nickname">{ user.nickname }</div>
    <div className="sign">
      <input type="password" />
      <button onClick={test}></button>
    </div>

  </div>
)

import { TRIGGER_DELEGATE } from '../../actions/delegate'

export default connect(
  state =>  ({user: state.user}),
  dispatch => ({
    test: () => dispatch({
      ...TRIGGER_DELEGATE,
      path: 'state.user.delegate.test'
    })
  })
)(Signin)
