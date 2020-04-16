import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'


class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div>count : {this.count}</div>
          <button onClick={() => this.countClickHandler()}>
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