import React from 'react'
import Termek from './Termek'

function Vasaroter(props) {
    /*itt végig map-elünk a termékListán*/
    return (
        <div className='row'>
          {props.lista.map((termek) => (
            <Termek
              key={termek.id} 
              title={termek.title}
              description={termek.description}
              image={termek.image}
              price={termek.price}
            />
          ))}
        </div>
      );}

export default Vasaroter
