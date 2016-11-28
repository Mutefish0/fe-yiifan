import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Webhead from './common/Webhead'
import Navi from './common/Navi'
import Message from './common/Message'
import Article from './views/Article'
import ArticleDetail from './views/ArticleDetail'
import ArticleEdit from './views/ArticleEdit'
import Picture from './views/Picture'
import Music from './views/Music'
import Todo from './views/Todo'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Frame = ({children}) => (
  <div className='root'>
    <Webhead />
    <Navi />
    { children }
    <Message />
  </div>
)

const App = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Frame}>
      <IndexRoute component={Article} />
      <Route path='/article' component={Article} />
      <Route path='/article/detail/:id' component={ArticleDetail} />
      <Route path='/article/edit/:id' component={ArticleEdit} />
      <Route path='/article/create' component={ArticleEdit} />
      <Route path='/picture' component={Picture} />
      <Route path='/music' component={Music} />
      <Route path='/todo' component={Todo} />
    </Route>
  </Router>
)

export default App
