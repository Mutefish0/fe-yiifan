import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import reduxAsyn from 'redux-asyn'

import App from './components/App'
import '../stylesheets/index.scss'

import { VISIT_WEBSITE } from './actions/user'

import env from './env'


let store = createStore(
  reducer,
  env.dev?
   compose(
    applyMiddleware(reduxAsyn),
    // redux dev-tool
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ):
  applyMiddleware(reduxAsyn)
)

store.dispatch(VISIT_WEBSITE)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)
