import React from 'react'
import { connect } from 'react-redux'
import { CREATE_ARTICLE } from '../../actions/article'


const ArticleEdit = ({ params, create }) => {
  let isNew = !params.id
  let titleInput, contentInput
  return (
    <div>
      <input type="text" ref={ n => titleInput = n } /> <br/>
      <textarea type="text" ref={ n => contentInput = n } />
      <span onClick={ () => create(titleInput.value, contentInput.value) }>
        { isNew && '创建' || '修改' }
      </span>
    </div>
  )
}

export default connect(
  state => ({}),
  dispatch => ({
    create: (title, content) => dispatch({...CREATE_ARTICLE, title, content})
  })
)(ArticleEdit)
