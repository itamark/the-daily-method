import React, { Component } from 'react'
export default class Method extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.method.title}</h1>
        <h3>{this.props.method.summary}</h3>
      </div>
    )
  }
}
