import React, { Component } from 'react'

 class Error extends Component {
  render() {
    return (
      <div>
        <h2 className="text-danger">{this.props.message}</h2>
      </div>
    )
 }
}

export default Error