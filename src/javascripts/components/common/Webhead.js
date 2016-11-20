import React from 'react'
import { connect } from 'react-redux'

import WeiboSvg from '../modules/WeiboSvg'
import GithubSvg from '../modules/GithubSvg'
import ZhihuSvg from '../modules/ZhihuSvg'
import QQSvg from '../modules/QQSvg'
import LoginSvg from '../modules/LoginSvg'
import LogoutSvg from '../modules/LogoutSvg'
import Modal from '../modules/Modal'
import Signin from './Signin'

const Webhead = ({ user }) => (
  <div className="common-webhead">
    <Modal className="sign-in-out" component={Signin}>
      { user.signin? LogoutSvg: LoginSvg }
    </Modal>
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

export default connect(state => ({
  user: state.user
}))(Webhead)
