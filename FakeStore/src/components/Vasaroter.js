import React from 'react'
import Termek from './Termek'

function Vasaroter(props) {
    /*itt végig map-elünk a termékListán*/
    return (
        <div className='row'>
          {props.lista.map((termek, index) => (
            <Termek
              key={index} 
              termek={termek}
            />
          ))}
        </div>
      );}

export default Vasaroter
