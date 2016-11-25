import {
  REQUEST_ARTICLES,
  RECEIVE_ARTICLES,
  REQUEST_ARTICLES_FAILED,
  DELETE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_SUCCESS
} from '../actions/article'

let initialState = {
  list: [],
  isRequesting: false
}

const article = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ARTICLES.type:
      return {
        ...state,
        isRequesting: true
      }
    case RECEIVE_ARTICLES.type:
      return {
        ...state,
        list: action.articles,
        isRequesting: false
      }
    case REQUEST_ARTICLES_FAILED.type:
      return {
        ...state,
        isRequesting: false
      }
    case DELETE_ARTICLE_SUCCESS.type:
      return {
        ...state,
        list: state.list.filter(article => article._id != action.id)
      }
    default:
      return state
  }
}

export default article
