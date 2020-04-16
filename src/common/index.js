import React from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import { Home,Staff } from '../routes'
import Nav from '../features/nav'
const Router = BrowserRouter

export default connect(state => {
  return {
    ...state.plus
  }
})(
  class extends React.Component {
    render() {
      return (
        <React.Fragment>
          <Router>
            <Nav></Nav>
            <div className="display-content">
              <Switch>
                <Route exact path="/" component={Home} ></Route>
                <Route path="/user/staff" component={Staff}></Route>
              </Switch>
            </div>
          </Router>
        </React.Fragment>
      )
    }
  }
)