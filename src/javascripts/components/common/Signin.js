import React from 'react'
import { connect } from 'react-redux'

import { SET_DELEGATE } from '../../actions/delegate'
import { SIGNIN } from '../../actions/user'

import CloseSvg from '../modules/CloseSvg'
import Toast from '../modules/Toast'

const SigninMessage = ({ param }) => {
  if(param == 'SUCCESS') return (
    <div className="signin-message-sucess">登录成功</div>
  )
  else return (
    <div className="signin-message-failed">登录失败</div>
  )
}

const Signin = ({ close, user, setMessageDelegate, signin }) => {
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
      <Toast
      toastReceiver={toast => setMessageDelegate(toast)}
      afterToast = {param => {
        //关闭弹层
        if(param == 'SUCCESS') close()
      }}
      component={SigninMessage}
      />
    </div>
  )
}
export default connect(
  state =>  ({user: state.user}),
  dispatch => ({
    setMessageDelegate: delegate => dispatch({
      ...SET_DELEGATE,
      path: 'state.user.delegate.signinMessage',
      delegate
    }),
    signin: password => dispatch({
      ...SIGNIN,
      password
    })
  })
)(Signin)
