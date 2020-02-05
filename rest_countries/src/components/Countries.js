import React, { Component } from 'react'
import { Consumer } from '../context'

class Countries extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value)
          return <h1>countries</h1>
        }}
      </Consumer>
    )
  }
}

export default Countries