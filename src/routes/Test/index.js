import React from "react";
import { connect } from "react-redux";

import './index.sass'

class Test extends React.Component {
  render() {
    return (
      <div className="home">
        <div>Test panel</div>
        <div>count : {this.props.count}</div>
          <button className="click" onClick={() => this.props.dispatch({type: 'PLUS_COUNT'})}>
        </button>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    count: state.plus.count
  }
}

export default connect(
  mapStateToProps
)(Test)