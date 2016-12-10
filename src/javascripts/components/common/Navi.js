import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { REQUEST_ARTICLES } from '../../actions/article'

class Navi extends React.Component {
  static defaultProps = {
    dispatch: _ => _
  }

  update() {
    this.forceUpdate()
  }

  render() {
    return (
     <div className="common-navi">
       <Link
         to="/article"
         className={`navi-item ${window.location.pathname=='/'? 'navi-item-active': ''}`}
         activeClassName="navi-item-active"
         onClick={_ => this.props.dispatch(REQUEST_ARTICLES)}
       >
         文章
       </Link>

       <Link
        to="/picture"
        className="navi-item"
        activeClassName="navi-item-active"
        onClick={this.update.bind(this)}
      >
         图库
       </Link>

       <Link
        to="/music"
        className="navi-item"
        activeClassName="navi-item-active"
        onClick={this.update.bind(this)}
      >
         音乐
       </Link>

       <Link
        to="/todo"
        className="navi-item"
        activeClassName="navi-item-active"
        onClick={this.update.bind(this)}
       >
         备忘
       </Link>
     </div>
   )
  }
}

export default connect()(Navi)
