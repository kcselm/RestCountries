import React from 'react'

const Search = () => {
  return (
    <div className="form-inline my-2 my-lg-0">
      <div className="mb-4">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" name="search"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </div>
    </div>
  )
}

export default Search