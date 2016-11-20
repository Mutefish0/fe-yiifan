import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Webhead from './common/Webhead'
import Navi from './common/Navi'

const Frame = ({children}) => (
  <div className='root'>
    <Webhead />
    <Navi />
    { children }
  </div>
)

const Article = _ => (
  <div>
    文章
  </div>
)

const App = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Frame}>
      <IndexRoute component={Article} />
      <Route path='article' component={Article} />
    </Route>
  </Router>
)

export default App
