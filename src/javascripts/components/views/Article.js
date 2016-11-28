import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { REQUEST_ARTICLES, DELETE_ARTICLE } from '../../actions/article'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import MarkdownIt from 'markdown-it'

let md = MarkdownIt()


export function parseDate(timestamp) {
  let date = new Date(timestamp)
  return [
    date.getFullYear(),
    '年',
    date.getMonth() + 1,
    '月',
    date.getDate(),
    '日 ',
    date.getHours(),
    ':',
    date.getMinutes().toString().replace(/^(\d)$/,'0$1')
  ].join('')
}


const Item = ({ className, article, signin, deleteArticle }) => (
  <div className={`item ${className || ''}`}>
    <Link to={`/article/detail/${article._id}`} className="title">{ article.title }</Link>
    <div
      className="content"
      dangerouslySetInnerHTML={{__html: md.render(article.content)}}>
    </div>
    <div className="foot">
      <Link
        className="edit"
        style={{display: signin && 'inline' || 'none'}}
        to={`/article/edit/${article._id}`}
      >
        <i className="fa fa-edit"/> 编辑文章
      </Link>
      <span
        className="delete"
        style={{display: signin && 'inline' || 'none'}}
        onClick={() => deleteArticle(article._id)}
       >
        <i className="fa fa-eraser"/> 删除文章
      </span>
      <span className="date"> 编辑于 { parseDate(article.date) }</span>
    </div>
    <div className="mask"></div>
  </div>
)


const Article = ({ articles,
                  isRequesting,
                  signin,
                  deleteArticle
                }) => (
  <div className="view-article">
    <Link
      to="/article/create"
      className="create"
      style={{display: signin && 'block' || 'none'}}
    >
      <i className="fa fa-plus" /> 创建文章
    </Link>
    <ReactCSSTransitionGroup
      transitionName="article-item"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={800}
    >
    { articles.map((article, index) => (
      <Item
        article={article}
        key={article._id}
        signin={signin}
        deleteArticle={deleteArticle}
      />
    )) }
    </ReactCSSTransitionGroup>
  </div>
)

export default connect(
  state => ({
    articles: state.article.list,
    requesting: state.article.isRequesting,
    signin: state.user.signin
  }),
  dispatch => {
    //每次挂载时都获取一次 (React-Router路由时会重新挂载组件)
    dispatch(REQUEST_ARTICLES)
    return {
      deleteArticle: id => dispatch({...DELETE_ARTICLE, id})
    }
  }
)(Article)
