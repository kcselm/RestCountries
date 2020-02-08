import React, { Component } from 'react'

const Context = React.createContext()

export class Provider extends Component {
  state = {
    counties: ["USA", "Canada"],
    searchTerm:  ""
  }

  // getSearchTerm = () => {
  //   this.setState({})
  // }

  // async componentDidMount() {
  //   try {
  //     const response = await fetch(`https://restcountries.eu/rest/v2/name/united`)
  //     if (!response.ok) {
  //       throw Error(response.statusText)
  //     }
  //     const data = await response.json()
  //     console.log(data)
  //   } catch (error) {
  //     console.log(error)
  //   }  
  // }

  render() {
    return (
      <Context.Provider value={this.state}>
        { this.props.children }
      </Context.Provider>
      )
  }
}

export const Consumer = Context.Consumer