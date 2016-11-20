import { combineReducers } from 'redux'
import article from './article'
import user from './user'
import delegate from './delegate'

const reducer = combineReducers({
  delegate,
  article,
  user
})

export default reducer
