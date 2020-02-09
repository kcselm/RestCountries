import React, { Component } from 'react'
// import { Consumer } from '../context'
// import Search from './Search'
import Country from './Country'

class Countries extends Component {
  render() {
    return (
      <div>
        {this.props.countriesList.map(country => (
          <Country 
          key={country.numericCode} 
          country={country}/>
        ))}
      </div>

    )
  }
}

export default Countries