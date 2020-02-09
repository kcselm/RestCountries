import React, { Component } from 'react'

import Countries from './Countries'
import Summary from './Summary'

// const Search = () => {
class Search extends Component {
  state = {
    searchTerm: "",
    countriesList: [],
    totalCountries: 0,
    regions: [],
    subregions: []
  }

  onChange = e => {
    this.setState({ 
      [e.target.name]: e.target.value,
      totalCountries: 0,
      regions: [],
      subregions: []
    })  
  }
  
  // addElementsToState = () => {
  //   console.log("countryNames")
  //   // console.log(this.props.countriesList.name)
  // }

  submitRequest = async () => {
    try {
      const response = await fetch(`https://restcountries.eu/rest/v2/name/${this.state.searchTerm}`)
      if (!response.ok) {
        throw Error(response.statusText)
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