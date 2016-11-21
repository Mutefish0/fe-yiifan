import post from '../apis'

import { TRIGGER_DELEGATE } from './delegate'

export const VISIT_WEBSITE = {
  type: 'VISIT_WEBSITE',
  asyn: async function({ href }) {
    let resp = await post('/visit-website-user', { href })
    if(resp.ok == 1) return {
      ...VISIT_WEBSITE_SUCCESS,
      user: resp.data
    }
    else return VISIT_WEBSITE_FAILED
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
    if(resp.ok == 1) return SIGNIN_SUCCESS
    else return SIGNIN_FAILED
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
    if(resp.ok == 1) return SIGNIN_SUCCESS
    else return SIGNIN_FAILED
  }
}

export const SIGNOUT = {
  type: 'SIGNOUT',
  asyn: async function() {
    let resp = await post('/sign-out')
    if(resp.ok == 1) return SIGNOUT_SUCCESS
  }
}

export const SIGNOUT_SUCCESS = {
  type: 'SIGNOUT_SUCCESS'
}
