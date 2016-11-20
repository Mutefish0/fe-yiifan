import { SET_DELEGATE, TRIGGER_DELEGATE } from '../actions/delegate'

let initialState = new Map()

const delegate = (state = initialState, action) => {
  switch (action.type) {
    case SET_DELEGATE.type:
      state.set(action.path, action.delegate)
      return state
    case TRIGGER_DELEGATE.type:
      state.has(action.path) && state.get(action.path)(action.param)
      return state
    default:
      return state
  }
}

export default delegate
