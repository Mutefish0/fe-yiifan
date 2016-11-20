import React from 'react'
import { connect } from 'react-redux'

import { SIGNOUT } from '../../actions/user'

import WeiboSvg from '../modules/WeiboSvg'
import GithubSvg from '../modules/GithubSvg'
import ZhihuSvg from '../modules/ZhihuSvg'
import QQSvg from '../modules/QQSvg'
import LoginSvg from '../modules/LoginSvg'
import LogoutSvg from '../modules/LogoutSvg'
import Modal from '../modules/Modal'
import Signin from './Signin'

let openModal

const Webhead = ({ user, signout }) => {
  return (
    <div className="common-webhead">
      <Modal
        openReceiver={open => openModal = open}
        component={Signin}
      />

    <span onClick={ user.signin? signout: openModal } className="sign-in-out">
        { user.signin? LogoutSvg: LoginSvg }
      </span>

      <div className="user-profile">
          <div className="avatar">
            <img className="source" src={user.avatar} />
            { user.sex &&
              <img
                className="sex"
                src={ user.sex == 'male'? '/images/male.png': '/images/female.png'}
              />
            }
          </div>
          <div className="nickname">{ user.nickname }</div>
          <div className="intro">{ user.intro }</div>
          <div className="links">
             { user.qq &&
               <a
                href={`tencent://AddContact/?fromId=50&fromSubId=1&subcmd=all&uin=${user.qq}`}
               >
               { QQSvg }
               </a>
             }
             { user.weibo && <a href={user.weibo} target="_blank">{ WeiboSvg }</a> }
             { user.github && <a href={user.github} target="_blank">{ GithubSvg }</a> }
             { user.zhihu && <a href={user.zhihu} target="_blank">{ ZhihuSvg }</a> }
         </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    user: state.user
  }),
  dispatch => ({
      signout: _ => dispatch(SIGNOUT)
  })
)(Webhead)
