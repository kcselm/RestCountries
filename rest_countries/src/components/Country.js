import React from 'react'

 const Country = props => {
  const { country } = props
  return (
    <div>
      <div className="card border-primary mb-3">
        <h4 className="card-header ">{country.name}</h4>
        <div className="card-body">
          <h6 className="card-text">Alpha Code 2: {country.alpha2Code}</h6>
          <h6 className="card-text">Alpha Code 3: {country.alpha3Code}</h6>
          <img src={country.flag} className="img-fluid img-thumbnail mb-2" alt={`${country.name}'s flag image'`}/>
          <h6 className="card-text">Region: {country.region}</h6>
          <h6 className="card-text">Subregion: {country.subregion}</h6>
          <h6 className="card-text">Population: {new Intl.NumberFormat().format(country.population)}</h6>
          <h6 className="card-text list-inline">Languages: {country.languages.map((language, i) => (
            <li key={i} className="list-inline-item">{language.name} </li>
          ))}
          </h6>

        </div>
      </div>
    </div> 
  )
}

export default Country