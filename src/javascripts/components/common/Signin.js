import React from 'react'
import { connect } from 'react-redux'

import { SIGNIN } from '../../actions/user'

import CloseSvg from '../modules/CloseSvg'

const Signin = ({ close, user, signin }) => {
  let inputPassword
  return(
    <div className="common-signin">
      <button className="close" onClick={close}>
        {CloseSvg}
      </button>
      <img className="avatar" src={user.avatar}/>
      <div className="nickname">{ user.nickname }</div>
      <div className="sign">
        <input
          type="password"
          ref={node => inputPassword = node}
          onKeyUp={e => {
            if(e.keyCode == 13) signin(inputPassword.value)
          }}
        />
        <button onClick={e => signin(inputPassword.value)} />
      </div>
    </div>
  )
}
export default connect(
  state =>  ({user: state.user}),
  dispatch => ({
    signin: password => dispatch({...SIGNIN,password})
  })
)(Signin)
