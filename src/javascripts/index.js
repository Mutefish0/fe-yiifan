import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import reduxAsyn from 'redux-asyn'

import App from './components/App'
import '../stylesheets/index.scss'

import { VISIT_WEBSITE } from './actions/user'





let store = createStore(
  reducer,
  compose(
    applyMiddleware(reduxAsyn),
    // redux dev-tool
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

store.dispatch({...VISIT_WEBSITE, href: window.location.href})

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)
