import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { CREATE_ARTICLE, EDIT_ARTICLE } from '../../actions/article'
import MarkdownIt from 'markdown-it'

let md = MarkdownIt()

class MarkdownEditor extends React.Component {
  static defaultProps = {
    obtainHtmlReceiver: _ => _,
    obtainSrcTextReveiver: _ => _,
    defaultValue: ''
  }

  constructor(props) {
    super(props)
    this.state = {
      mode: 'write', // preview
    }
    this.srcText = this.props.defaultValue

    this.props.obtainHtmlReceiver(this.obtainHtml.bind(this))
    this.props.obtainSrcTextReceiver(this.obtainSrcText.bind(this))
  }

  obtainHtml() {
    return md.render(this.srcText)
  }

  obtainSrcText() {
    return this.srcText
  }

  render() {
    return (
      <div className="markdown-editor">
        <div className="menu">
          <span
            className={`nav-write ${this.state.mode == 'write' && 'active' || ''}`}
            onClick={e => this.setState({mode: 'write'})}
          >
            <i className="fa fa-pencil"/> 编辑
          </span>
          <span
            className={`nav-preview ${this.state.mode == 'preview' && 'active' || ''}`}
            onClick={() => this.setState({mode: 'preview'})}
          >
            <i className="fa fa-eye"/> 预览
          </span>
        </div>
        {
          this.state.mode == 'write' &&
          <textarea
            className="write"
            defaultValue={this.srcText}
            onChange={e => this.srcText = e.target.value}
          /> ||
          <div
            className="preview"
            dangerouslySetInnerHTML={{__html: md.render(this.srcText)}}
          >
          </div>
        }
      </div>
    )
  }
}

const ArticleEdit = ({ isNew, oldArticle, create, edit }) => {
  let titleInput, obtainSrcText
  return (
    <div className="view-article-edit">
      <input
        className="title"
        type="text"
        placeholder="标题"
        defaultValue={ !isNew && oldArticle.title || '' }
        ref={ n => titleInput = n }
      /> <br/>
      <MarkdownEditor
        obtainSrcTextReceiver={ ost => obtainSrcText = ost }
        defaultValue={oldArticle.content}
      />
      <div className="action">
        <span
          className="submit"
          onClick={
            () => {
              isNew && create(titleInput.value, obtainSrcText()) ||
              edit(oldArticle._id, titleInput.value, obtainSrcText())
            }
          }
        >
          { isNew && '创建' || '修改' }
        </span>

        <Link className="cancel" to="/article" > 取消 </Link>
      </div>

    </div>
  )
}

export default connect(
  (state, ownProps) => ({
    isNew: ownProps.params.id === undefined,
    oldArticle: state.article.list.filter(article => article._id == ownProps.params.id)[0]
  }),
  dispatch => ({
    create: (title, content) => dispatch({...CREATE_ARTICLE, title, content}),
    edit: (id, title, content) => dispatch({...EDIT_ARTICLE, id, title, content})
  })
)(ArticleEdit)
