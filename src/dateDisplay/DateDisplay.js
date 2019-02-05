import React, { Component } from 'react'
import months from '../constants/months'

export default class DateDisplay extends Component {
  render() {
    return (
      <div>
        {months[this.props.date.getMonth()]} {this.props.date.getDate()}, {this.props.date.getFullYear()}
      </div>
    )
  }
}
