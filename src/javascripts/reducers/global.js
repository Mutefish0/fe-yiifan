import { SET_HANDLER, TRIGGER_HANDLER } from '../actions/global'

/* 后续可以添加Cache优化性能 */
function getDirectoryAndHandlerName(state, path) {
  let pathArray = path.split('.').splice(1)
  let handlerName = pathArray.pop()
  let directory = state
  for(let i = 0; i < pathArray.length; i++)
    directory = directory[pathArray[i]]
  return [directory, handlerName]
}

function getHandler(state, path) {
  let pathArray = path.split('.').splice(1)
  let handler = state
  for(let i = 0; i < pathArray.length; i++)
    handler = handler[pathArray[i]]
  return handler
}

const global = (state, action) => {
  if(action.type == SET_HANDLER.type) {
    //set handler
    let [directory, handlerName] = getDirectoryAndHandlerName(state, action.path)
    directory[handlerName] = action.handler
  }
  else if(action.type == TRIGGER_HANDLER.type) {
    //call handler
    let handler = getHandler(state, action.path)
    handler(action.param)
  }

  return state
}

export default global
