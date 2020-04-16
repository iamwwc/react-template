import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <div className="user-panel"></div>
    )
  }

  async fetchUser() {

  }

  async componentWillMount() {
    await this.fetchUser() 
  }
}