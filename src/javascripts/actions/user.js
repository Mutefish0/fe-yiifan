import post from '../apis'
import { browserHistory } from 'react-router'

import { TRIGGER_DELEGATE } from './delegate'

export const VISIT_WEBSITE = {
  type: 'VISIT_WEBSITE',
  asyn: async function({ href }) {
    let resp = await post('/visit-website-user', { href })
    return resp.ok && {
        ...VISIT_WEBSITE_SUCCESS,
        user: resp.data
      } ||
      VISIT_WEBSITE_FAILED
  }
}


export const VISIT_WEBSITE_SUCCESS = {
  type: 'VISIT_WEBSITE_SUCCESS',
  //user:
  asyn: _ => CHECK_SIGNIN
}

export const VISIT_WEBSITE_FAILED = {
  type: 'VISIT_WEBSITE_FAILED'
}

export const SIGNIN = {
  type: 'SIGNIN',
  asyn: async function({ password }) {
    let resp = await post('/sign-in', { password })
    return resp.ok && SIGNIN_SUCCESS || SIGNIN_FAILED
  }
}

export const SIGNIN_SUCCESS = {
  type: 'SIGNIN_SUCCESS',
  asyn: {
    ...TRIGGER_DELEGATE,
    path: 'state.user.delegate.signinMessage',
    param: 'SUCCESS'
  }
}

export const SIGNIN_FAILED = {
  type: 'SIGNIN_FAILED',
  asyn: {
      ...TRIGGER_DELEGATE,
      path: 'state.user.delegate.signinMessage',
      param: 'FAILED'
    }
}

export const CHECK_SIGNIN = {
  type: 'CHECK_SIGNIN',
  asyn: async function() {
    let resp = await post('/check-sign-in')
    return resp.ok && SIGNIN_SUCCESS || SIGNIN_FAILED
  }
}

export const SIGNOUT = {
  type: 'SIGNOUT',
  asyn: async function() {
    let resp = await post('/sign-out')
    return resp.ok && SIGNOUT_SUCCESS || undefined
  }
}

export const SIGNOUT_SUCCESS = {
  type: 'SIGNOUT_SUCCESS',
  asyn: () => browserHistory.push('/article')
}
