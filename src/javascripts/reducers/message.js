/*
state = {
  type: 'DELETA_ARTICLE_SUCCESS',
  msg: '删除文章成功',
  style: 'success'        // success failed
}
*/
import {
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILED,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAILED,
  EDIT_ARTICLE_SUCCESS,
  EDIT_ARTICLE_FAILED
} from '../actions/article'

import {
  SIGNIN_SUCCESS,
  SIGNIN_FAILED,
  SIGNOUT_SUCCESS
} from '../actions/user'

const message = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ARTICLE_SUCCESS.type:
      return {
        type: DELETE_ARTICLE_SUCCESS.type,
        msg:  action.msg || '删除成功',
        style: 'success'
      }
    case DELETE_ARTICLE_FAILED.type:
      return {
        type: DELETE_ARTICLE_FAILED.type,
        msg: action.msg || '删除失败',
        style: 'failed'
      }
    case CREATE_ARTICLE_SUCCESS.type:
      return {
        type: CREATE_ARTICLE_SUCCESS.type,
        msg: action.msg || '创建成功',
        style: 'success'
      }
    case CREATE_ARTICLE_FAILED.type:
      return {
        type: CREATE_ARTICLE_FAILED.type,
        msg: action.msg || '创建失败',
        style: 'failed'
      }
    case EDIT_ARTICLE_SUCCESS.type:
      return {
        type: EDIT_ARTICLE_SUCCESS.type,
        msg: action.msg || '修改生效',
        style: 'success'
      }
    case EDIT_ARTICLE_FAILED.type:
      return {
        type: EDIT_ARTICLE_FAILED.type,
        msg: action.msg || '编辑失败',
        style: 'failed'
      }
    case SIGNIN_SUCCESS.type:
      return {
        type: SIGNIN_SUCCESS.type,
        msg: '登录成功',
        style: 'success'
      }
    case SIGNIN_FAILED.type:
      return {
        type: SIGNIN_FAILED.type,
        msg: '登录失败',
        style: 'failed'
      }
    case SIGNOUT_SUCCESS.type:
      return {
        type: SIGNOUT_SUCCESS.type,
        msg: '登出成功',
        style: 'success'
      }
    default:
      return state
  }
}

export default message
