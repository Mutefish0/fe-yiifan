import React from 'react'
import { Link } from 'react-router'

const Navi = () => (
  <div className="common-navi">
    <Link
      to="/article"
      className={`navi-item ${window.location.pathname=='/'? 'navi-item-active': ''}`}
      activeClassName="navi-item-active"
    >
      文章
    </Link>

    <Link to="/picture" className="navi-item" activeClassName="navi-item-active">
      图库
    </Link>

    <Link to="/music" className="navi-item" activeClassName="navi-item-active">
      音乐
    </Link>

    <Link to="/todo" className="navi-item" activeClassName="navi-item-active">
      备忘
    </Link>
  </div>
)

export default Navi
