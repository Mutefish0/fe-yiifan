import { combineReducers } from 'redux'
import article from './article'
import user from './user'
import message from './message'

const reducer = combineReducers({
  message,
  article,
  user
})

export default reducer
