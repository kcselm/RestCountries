import React, { Component } from 'react'

import Countries from './Countries'

// const Search = () => {
class Search extends Component {
  state = {
    searchTerm: "",
    countriesList: []
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value})  
    
  }

  submitRequest = async () => {
    try {
      const response = await fetch(`https://restcountries.eu/rest/v2/name/${this.state.searchTerm}`)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
      console.log(data)
      this.setState({countriesList: data})
      // console.log(response)
    } catch (error) {
      console.log(error)
    }  
  }

  render() {
    return (
      <React.Fragment>
        <div className="form-inline my-2 my-lg-0">
          <div className="mb-4">
            <input 
            className="form-control mr-sm-2" 
            type="text" 
            placeholder="" 
            name="searchTerm" 
            value={this.state.searchTerm}
            onChange={this.onChange}/>
            <button 
            className="btn btn-secondary my-2 my-sm-0" 
            type="submit"
            onClick={this.submitRequest}
            >Search</button>
          </div>
        </div>
        <Countries countriesList={this.state.countriesList}/>
      </React.Fragment>
    )
  }
}

export default Search