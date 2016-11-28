import React from 'react'
import { connect } from 'react-redux'
import { parseDate } from './Article'
import MarkdownIt from 'markdown-it'

let md = MarkdownIt()

const ArticleDetail = ({ article }) => (
  <div className="view-article-detail">
    <div className="title">{ article.title }</div>
    <div
      className="content"
      dangerouslySetInnerHTML={{__html: md.render(article.content)}}>
    </div>
    <div className="foot">
      <span className="date"> 编辑于 { parseDate(article.date) }</span>
    </div>
  </div>
)

export default connect(
  (state, { params }) => ({
    article: state.article.list.filter(article => article._id == params.id)[0]
  })
)(ArticleDetail)
