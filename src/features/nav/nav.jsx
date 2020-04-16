import React from "react";
import { Link } from 'react-router-dom'
import { Button } from 'antd'

export default class extends React.Component {
  render() {
    return (
      <div id="nav-root">
        <div id="nav-links">
          <Link to="/">
            <Button className="link" type="primary">Home</Button>
          </Link>
          <Link to="/user/staff">
            <Button className="link" type="primary">Staff</Button>
          </Link>
        </div>
      </div>
    )
  }
}