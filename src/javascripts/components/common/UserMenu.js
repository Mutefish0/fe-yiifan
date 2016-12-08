import React from 'react'
import { connect } from 'react-redux'
import { SIGNOUT } from '../../actions/user'
import { browserHistory } from 'react-router'

const UserMenu = ({ dispatch }) => (
  <ul className="common-usermenu">
    <li className="btn-setting" onClick={e => browserHistory.push('/setting')}>
      <i className="fa fa-cog" /> 设置
    </li>
    <li className="btn-signout" onClick={e => dispatch(SIGNOUT)}>
      <i className="fa fa-power-off" /> 登出
    </li>
  </ul>
)

export default connect()(UserMenu)
