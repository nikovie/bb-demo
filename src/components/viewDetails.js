import React from 'react'

const Details = ({ country, details, property }) => {
  // console.log(`country selected`, country)
  // console.log(`country details`, details)
  // console.log(`country property`, property)

  if (!country) {
    return (
      <div>
        Please select country to continue...
      </div>
    )
  }
  return (
    <div className="country">
      <div className="details">
        <h1>{details.name.common}</h1>
        <span className="official">{details.name.official}</span>
      </div>
      <div>
        <img src={details.flags.png} alt={`Flag of ${details.name.common} `} className="flag" />
      </div>
      <div className="mt3 b1 bt">
        { !property 
          ? "Select property to view more details" 
          : <div className="">
            <span>Selected property: {property}</span>
            <pre>{JSON.stringify(details[property], null, 2)}</pre>
          </div>
        }
      </div>
      
    </div>
  )
}

export default Details
