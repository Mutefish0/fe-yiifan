import React from 'react'
import Loading from '../modules/Loading'
import { connect } from 'react-redux'
import { parseDate } from './Article'
import { Mdrender } from './Article'

const ArticleDetail = ({ article }) => {
  if(article) return (
    <div className="view-article-detail">
      <div className="title">{ article.title }</div>
      <div
        className="content"
        dangerouslySetInnerHTML={{__html: Mdrender(article.content)}}>
      </div>
      <div className="foot">
        <span className="date"> 编辑于 { parseDate(article.date) }</span>
      </div>
    </div>
  )
  else return (
    <div className="view-article-detail-loadig">
      <Loading />
    </div>
  )
}

export default connect(
  (state, { params }) => ({
    article: state.article.list.filter(article => article._id == params.id)[0]
  })
)(ArticleDetail)
