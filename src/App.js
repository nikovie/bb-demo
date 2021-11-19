import React, { useState, useEffect } from "react"
import axios from "axios"
import Picker from "./components/countryPicker"
import Details from "./components/viewDetails"

const App = () => {
  const [countries, updateCountries] = useState([])
  const [selected, updateSelected] = useState()
  const [selectedProperty, updateSelectedProperty] = useState()

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        updateCountries(response.data)
      })
  }, [])

  return (
    <div className="row container">
      <div className="col-sm-4">
        <Picker 
          options={countries}
          selected={countries[selected]}
          updateSelected={updateSelected}
          selectProperty={updateSelectedProperty}
        />
      </div>
      <div className="col-sm-8">
        <Details 
          country={selected}
          details={countries[selected]}
          property={selectedProperty}
        /> 
      </div>
      
    </div>
  );
}

export default App;
