import React from 'react'
import { Button, Form } from "react-bootstrap";

const Picker = ({ options, selected, updateSelected, selectProperty }) => {

  return (
    <div>
      <div>
        <span>Country</span>
        <Form.Select 
          onChange={({target}) => updateSelected(target.value)}
        >
          <option></option>
          { options
            .map((country, idx) => 
              <option 
                key={idx}
                value={idx}
              >
                {country.name.common}
              </option> )
          }
        </Form.Select>
      </div>
      <div>
        <span>Property</span>
        <Form.Select 
          disabled={ !selected ? true : false }
          onChange={({target}) => selectProperty(target.value)}
        >
          <option></option>
          { !selected 
            ? null 
            : <>
              {Object.keys(selected).map(property => {
                return <option key={property}>{property}</option>
              })}
          </> }
          
        </Form.Select>
      </div>
    </div>
  )
}

export default Picker
