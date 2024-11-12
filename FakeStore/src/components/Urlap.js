import React, { useContext, useState } from 'react';
import { ApiContext } from '../context/ApiContext';

export default function Urlap() {
    //adatKüldés
    const { postAdat } = useContext(ApiContext);

    // Az űrlapadatokhoz tartozik egy saját state, itt tároljuk az űrlap mezők adatait
    const [adat, setAdat] = useState({
        title: 'Ez a termék neve',
        price: '1000',
        category: '',
        description: '',
        image: ''
    });

    function valtozotatasKezeles(event) {
        // Segéd objektum létrehozása az aktuális state másolatával
        const sObj = { ...adat };
        sObj[event.target.id] = event.target.value; // Az ID alapján változtatjuk az adott mezőt
        // Frissítjük az `adat` state-t a segédobjektum értékeivel
        setAdat({ ...sObj });
    }

    function elkuld(event) {
        // Megakadályozza az űrlap tényleges elküldését
        event.preventDefault();
        // Adatok összegyűjtése és kiírás a konzolra
        console.log("elküld", adat);
        // Itt lehetne validálni az adatokat, és csak akkor elküldeni, ha formailag helyesek
        //adatKüldés
        postAdat("/products", adat)//végpont és adat átadása amit az ApiContexbe hoztunk létre
    }

    return (
        <div>
            <form onSubmit={elkuld}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">A termék neve</label>
                    <input
                        type="text"

                        value={adat.title}
                        onChange={valtozotatasKezeles}
                        className="form-control"
                        id="title"
                        aria-describedby="titleHelp"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">A termék ára</label>
                    <input
                        type="number"
                        min="1000"
                        max="100000"
                        value={adat.price}
                        onChange={valtozotatasKezeles}
                        className="form-control"
                        id="price"
                        aria-describedby="priceHelp"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">A termék leírása</label>
                    <textarea
                        value={adat.description}
                        onChange={valtozotatasKezeles}
                        className="form-control"
                        id="description"
                        rows="3"
                    />
                </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            
            <form action="/action_page.php">
                <label for="cars">Choose a car:</label>
                <select id="cars" name="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    );
}
