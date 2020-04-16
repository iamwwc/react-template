import React from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import { Home } from '../components/routes'
const Router = HashRouter

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
            <Switch>
              <Route exact path="/" component={Home} ></Route>
            </Switch>
          </Router>
        </React.Fragment>
      )
    }
  }
)