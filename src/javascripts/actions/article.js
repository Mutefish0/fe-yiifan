import post from '../apis'
import { browserHistory } from 'react-router'

export const REQUEST_ARTICLES = {
  type: 'REQUEST_ARTICLES',
  asyn: async function() {
    let resp = await post('/fetch-all-articles')
    return resp.ok && {
      ...RECEIVE_ARTICLES,
      articles: resp.data
    } || REQUEST_ARTICLES_FAILED
  }
}

export const RECEIVE_ARTICLES = {
  type: 'RECEIVE_ARTICLES'
}

export const REQUEST_ARTICLES_FAILED = {
  type: 'REQUEST_ARTICLES_FAILED'
}

export const DELETE_ARTICLE = {
  type: 'DELETE_ARTICLE',
  asyn: async function({ id }) {
    let resp = await post('/delete-article', { id })
    return resp.ok && {...DELETE_ARTICLE_SUCCESS, id} || DELETE_ARTICLE_FAILED
  }
}

export const DELETE_ARTICLE_SUCCESS = {
  type: 'DELETE_ARTICLE_SUCCESS'
  //id:
}

export const DELETE_ARTICLE_FAILED = {
  type: 'DELETE_ARTICLE_FAILED'
}

export const CREATE_ARTICLE = {
  type: 'CREATE_ARTICLE',
  asyn: async function({ title, content }) {
    let resp = await post('/create-article', { title, content })
    return resp.ok && CREATE_ARTICLE_SUCCESS || CREATE_ARTICLE_FAILED
  }
}

export const CREATE_ARTICLE_SUCCESS = {
  type: 'CREATE_ARTICLE_SUCCESS',
  asyn: () => browserHistory.push('/article')
}

export const CREATE_ARTICLE_FAILED = {
  type: 'CREATE_ARTICLE_FAILED'
}

export const EDIT_ARTICLE = {
  type: 'EDIT_ARTICLE',
  asyn: async function({ id, title, content }) {
    let resp = await post('/edit-article', { id, title, content })
    return resp.ok && EDIT_ARTICLE_SUCCESS || EDIT_ARTICLE_FAILED
  }
}

export const EDIT_ARTICLE_SUCCESS = {
  type: 'EDIT_ARTICLE_SUCCESS',
  asyn: () => {
    browserHistory.push('/article')
    return REQUEST_ARTICLES
  }
}

export const EDIT_ARTICLE_FAILED = {
  type: 'EDIT_ARTICLE_FAILED'
}
