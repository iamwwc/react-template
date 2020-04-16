import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'

import './index.sass'

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div>home panel</div>
        <div>count : {this.props.count}</div>
          <button className="click" onClick={() => this.props.countClickHandler()}>
        </button>
      </div>
    )
  }
}


function countClickHandler() {
  return {type: 'PLUS_COUNT'}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ countClickHandler }, dispatch)
}

function mapStateToProps(state) {
  return {
    count: state.plus.count
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)