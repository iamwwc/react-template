import React from "react";
import { Link } from 'react-router-dom'
import { Button } from 'antd'

export default class extends React.Component {
  render() {
    return (
      <div id="nav-root">
        <div id="nav-links">
          <Link to="/">
            <Button className="link" type="primary">主页</Button>
          </Link>
          <Link to="/user/staff">
            <Button className="link" type="primary">人员管理</Button>
          </Link>
          <Link to="/rooms">
            <Button className="link" type="primary">房间配置</Button>
          </Link>
          <Link to="/test">
            <Button className="link" type="primary">测试面板</Button>
          </Link>
        </div>
      </div>
    )
  }
}