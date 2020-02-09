import React from 'react'


const Summary = props => {
  let uniqueRegions = props.regions.filter((v, i , a) => a.indexOf(v) ===i)
  let uniqueSubregions = props.subregions.filter((v, i , a) => a.indexOf(v) ===i)

  return (
    <div className="card border-primary mb-3">
      <h4 className="card-header ">Summary</h4>
      <div className="card-body">
        <div className="card-text list-inline font-weight-bold">
          Total Countries: <span className="font-weight-normal">{props.total}</span>
        </div>
        <div className="card-text list-inline font-weight-bold">Total Regions: {uniqueRegions.map((region, i) => (
          <li key={i} className="list-inline-item font-weight-normal">{region}</li>
        ))}</div>
        <div className="card-text list-inline font-weight-bold">
          Total Subregions: {uniqueSubregions.map((subregion, i) => (
          <li key={i} className="list-inline-item font-weight-normal">{subregion}</li>
        ))}</div>
      </div>
    </div>
  )
}

export default Summary
