import { combineReducers } from 'redux'
import article from './article'
import user from './user'
import global from './global'

const reducer = (state, action) => combinedReducer(global(state, action), action)

const combinedReducer = combineReducers({
  article,
  user
})

export default reducer
