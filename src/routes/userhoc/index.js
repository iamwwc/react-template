import React from 'react'
import { useStore } from 'react-redux'
import { connect } from "react-redux";
import api from '@/utils/api'
const client = api('apibs.chaochaogege.net')

// used by staff and consumer
export default function reused(role) {
  class Component extends React.Component{
    render() {
      return (
        <div>{role} panel</div>
      )
    }
  
    async componentWillMount() {
      let { code, data } = await client.fetchUser('/staff')
      this.props.dispatch({ type: 'SET_STAFF' })
    }
  }

  return connect()(Component)
}
