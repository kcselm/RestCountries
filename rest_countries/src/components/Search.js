import React, { Component } from 'react'

import Error from './Error'
import Countries from './Countries'
import Summary from './Summary'

// const Search = () => {
class Search extends Component {
  state = {
    searchTerm: "",
    countryName: true,
    countryCode: false,
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

  changeSearch = e => {
    // if (this.state.countryCode === false) {
      this.setState({
        // [e.target.name
        countryCode: !this.state.countryCode,
        countryName: !this.state.countryName
        // countriesList: !this.state.countriesList
      })
  }

  onClick = () => {
    this.postData()
    this.submitRequest()
  }

  postData = async () => {
    let searchBy
    if (this.state.countryName === true) {
      searchBy = "name"
    } else if ((this.state.countryCode === true)) {
      searchBy = "alpha"
    }
    const settings = {  
      method: "POST",
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json',
      // }, 
      body: searchBy
    }
    console.log(searchBy)
    try {
      const response = await fetch(`http://192.168.1.124/backend/index.php`, settings)
      const data = await response.json()
      console.log("post data", data)
      return data
    } catch(error) {
      console.log("post error", error)
    }

  }
  
  submitRequest = async () => {
    try {
      // const response = await fetch(`https://restcountries.eu/rest/v2/${searchBy}/${this.state.searchTerm}`)
      const response = await fetch("http://192.168.1.124/backend/index.php")
      if (response.status === 404 || response.status === 400) {
        this.setState({error: "Invalid Search"})
        console.log("response", response)
        throw Error(response.statusText)
      } else {
        this.setState({error: ""})
      }
      // let data = []
      // data = await data.push(response.json())
      const data = await response.json()
      console.log("data", data)
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
        <div className="form-group">
          <div className="custom-control custom-radio">
            <input 
            type="radio" 
            id="countryName" 
            name="searchBy" 
            className="custom-control-input" 
            checked={this.state.countryName}
            onChange={this.changeSearch}
            />
            <label className="custom-control-label" htmlFor="countryName">Country Name</label>
          </div>
          <div className="custom-control custom-radio">
            <input 
            type="radio" 
            id="countryCode" 
            name="searchBy" 
            className="custom-control-input" 
            checked={this.state.countryCode}
            onChange={this.changeSearch}
            />
            <label className="custom-control-label" htmlFor="countryCode">Country Code</label>
          </div>
        </div>

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
            onClick={this.onClick}
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