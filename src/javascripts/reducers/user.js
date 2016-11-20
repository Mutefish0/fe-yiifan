import { VISIT_WEBSITE_SUCCESS, SIGNIN_SUCCESS, SIGNOUT_SUCCESS } from '../actions/user'

let initialState = {
  signin: false,
  nickname: undefined,
  avatar: '/images/avatar-default.png',
  sex: undefined,
  intro: undefined,
  weibo: undefined,
  github: undefined,
  zhihu: undefined
}

const user = (state = initialState, action) => {
  switch(action.type) {
    case VISIT_WEBSITE_SUCCESS.type:
      let user = action.user
      return {
        ...state,
        signin: state.signin,
        ...user
      }
    case SIGNIN_SUCCESS.type:
      return {...state, signin: true}
    case SIGNOUT_SUCCESS.type:
      return {...state, signin: false}
    default: return state
  }
}

export default user
