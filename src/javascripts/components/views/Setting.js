import React from 'react'
import { connect } from 'react-redux'
import { UPDATE_PROFILE } from '../../actions/user'
import { Link } from 'react-router'

const Setting = ({ user, update }) => {
  let nicknameInput,
      avatarInput,
      introInput,
      sexInput,
      qqInput,
      weiboInput,
      zhihuInput,
      githubInput
  return (
    <div className="common-setting">
     <h2> 个人设置 </h2>
     <div className="setting-box">

       <div className="item-name"> 性别 </div>
       <select ref={n => sexInput = n} defaultValue={user.sex}>
        <option value="male"> 男 </option>
        <option value="female"> 女 </option>
       </select> <br/>

        <div className="item-name"> 昵称 </div>
        <input
          type="text"
          ref={n => nicknameInput = n}
          defaultValue={user.nickname}
        /> <br/>

        <div className="item-name"> 头像 </div>
        <input
          type="text"
          ref={n => avatarInput = n}
          defaultValue={user.avatar}
        /> <br/>

        <div className="item-name"> 简介 </div>
        <input
          type="text"
          ref={n => introInput = n}
          defaultValue={user.intro}
        /> <br/>

        <div className="item-name"> QQ </div>
        <input
          type="text"
          ref={n => qqInput = n}
          defaultValue={user.qq}
        /> <br/>

        <div className="item-name"> 微博 </div>
        <input
          type="text"
          ref={n => weiboInput = n}
          defaultValue={user.weibo}
        /> <br/>

        <div className="item-name"> 知乎 </div>
        <input
          type="text"
          ref={n => zhihuInput = n}
          defaultValue={user.zhihu}
        /> <br/>

        <div className="item-name"> Github </div>
        <input
          type="text"
          ref={n => githubInput = n}
          defaultValue={user.github}
        /> <br/>
     </div>

     <div className="action">
       <span
        className="btn-save"
         onClick={e => update({
           nickname: nicknameInput.value,
           avatar: avatarInput.value,
           intro: introInput.value,
           sex: sexInput.value,
           qq: qqInput.value,
           weibo: weiboInput.value,
           zhihu: zhihuInput.value,
           github: githubInput.value
         })}
       >
        保存
       </span>
       <Link className="cancel" to="/article"> 取消 </Link>
     </div>

    </div>
  )
}

export default connect(
  state => ({user: state.user}),
  dispatch => ({
    update: nextProfile => dispatch({...UPDATE_PROFILE,...nextProfile})
  })
)(Setting)
