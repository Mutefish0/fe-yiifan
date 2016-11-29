import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { REQUEST_ARTICLES, DELETE_ARTICLE } from '../../actions/article'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'

let md = MarkdownIt({
  linkfy: true,
  breaks: true,
  highlight: function (str, lang) {
   if (lang && hljs.getLanguage(lang)) {
     try {
       return hljs.highlight(lang, str).value;
     } catch (__) {}
   }

   return ''; // use external default escaping
 }
})

export function Mdrender(srcText) {
  let rendered = md.render(srcText)
  //a标签在新窗口打开
  rendered = rendered.replace(/<a (\S*?)>/g,'<a $1 target=\"_blank\">')
  return rendered
}


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
    <div className="content-wraper">
      <div
        className="content"
        dangerouslySetInnerHTML={{__html: Mdrender(article.content)}}
      >
      </div>
      <div className="mask">
        <Link className="btn-detail" to={`/article/detail/${article._id}`}>
          <i className="fa fa-ellipsis-h fa-2x"/>
        </Link>
      </div>
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
  dispatch => ({
    deleteArticle: id => dispatch({...DELETE_ARTICLE, id})
  })
)(Article)
