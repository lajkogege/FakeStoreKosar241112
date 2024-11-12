import React from 'react';
import { KosarContext } from '../context/KosarContext';


function Termek(props) {
    
    return (


        <div className="col-md-5"> {/* A Bootstrap rács használata */}
            <div className="card" style={{ width: "400px" }}>
                <img className="card-img-top img-fluid " src={props.image} alt={props.title} />
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text"><strong>Price: ${props.price}</strong></p> {/* Ár hozzáadása */}
                    <a href="#" className="btn btn-primary" >
                        Kosárba</a>
                </div>
            </div>
        </div>
    );
}

export default Termek;
