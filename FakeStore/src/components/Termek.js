import React, { useContext } from 'react';
import { KosarContext } from '../context/KosarContext';


function Termek(props) {
    const {kosarba}=useContext(KosarContext);
        function kosaram(e){
            console.log(e)
            kosarba(props.termek.e)

        }
    return (
        <div className="col-md-5"> {/* A Bootstrap rács használata */}
            <div className="card" style={{ width: "400px" }}>
                <img className="card-img-top img-fluid " src={props.termek.image} alt={props.termek.title} />
                <div className="card-body">
                    <h4 className="card-title">{props.termek.title}</h4>
                    <p className="card-text">{props.termek.description}</p>
                    <p className="card-text"><strong>Price: ${props.termek.price}</strong></p> {/* Ár hozzáadása */}
                    <a href="#" className="btn btn-primary" onClick={()=>kosaram(props.termek)} >
                        Kosárba</a>
                </div>
            </div>
        </div>
    );
}

export default Termek;
