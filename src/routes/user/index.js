import React from 'react'
import { Button } from 'antd'
import { Link, Switch, Route } from 'react-router-dom'
import UserHOC from '../userhoc'

const consumer = UserHOC('consumer')
const staff = UserHOC('staff')

export default class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="btn-links">
          <Link to="/user/consumer"><Button className="link" type="primary">旅客</Button></Link>
          <Link to="/user/staff"><Button className="link" type="primary">员工</Button></Link>
        </div>
        <div>
          <Switch>
            <Route path="/user/consumer" component={consumer}></Route>
            <Route path="/user/staff" component={staff}></Route>
          </Switch>
        </div>
      </React.Fragment>
    )
  }
}