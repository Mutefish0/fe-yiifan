import { combineReducers } from 'redux'
import article from './article'
import user from './user'
import delegate from './delegate'
import message from './message'

const reducer = combineReducers({
  delegate,
  message,
  article,
  user
})

export default reducer
