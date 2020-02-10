import React, { Component } from 'react'

import Error from './Error'
import Countries from './Countries'
import Summary from './Summary'

// const Search = () => {
class Search extends Component {
  state = {
    searchTerm: "",
    countriesList: [],
    totalCountries: 0,
    regions: [],
    subregions: [], 
    error: ""
  }

  onChange = e => {
    this.setState({ 
      [e.target.name]: e.target.value,
      totalCountries: 0,
      regions: [],
      subregions: []
    })  
  }

  submitRequest = async () => {
    try {
      const response = await fetch(`https://restcountries.eu/rest/v2/name/${this.state.searchTerm}`)
      if (response.status === 404) {
        this.setState({error: "Invalid Search"})
        throw Error(response.statusText),
        console.log(response.statusText)
      } else {
        this.setState({error: ""})
      }
      const data = await response.json()
      this.setState({
        countriesList: data,
        totalCountries: data.length,
        regions: data.map(region => region.region),
        subregions: data.map(subregion => subregion.subregion)
      })
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
        {/* <React.Fragment /> */}
        <Error message={this.state.error}/>
        <Countries countriesList={this.state.countriesList}/>
        <Summary 
        total={this.state.totalCountries}
        regions={this.state.regions}
        subregions={this.state.subregions}
        />
      </React.Fragment>
    )
  }
}

export default Search