import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Webhead from './common/Webhead'
import Navi from './common/Navi'
import Article from './views/Article'
import Picture from './views/Picture'
import Music from './views/Music'
import Todo from './views/Todo'

const Frame = ({children}) => (
  <div className='root'>
    <Webhead />
    <Navi />
    { children }
  </div>
)

const App = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Frame}>
      <IndexRoute component={Article} />
      <Route path='/article' component={Article} />
      <Route path='/picture' component={Picture} />
      <Route path='/music' component={Music} />
      <Route path='/todo' component={Todo} />
    </Route>
  </Router>
)

export default App
