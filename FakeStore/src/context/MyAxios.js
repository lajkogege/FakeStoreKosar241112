// Importáljuk az Axios könyvtárat a HTTP kérésekhez
import axios from "axios";

/* Saját Axios példány létrehozása, amely lehetővé teszi számunkra, hogy testre szabjuk az alapértelmezett beállításokat.
   - `baseURL`: Az alapértelmezett URL, amelyet az Axios minden kérésnél használni fog. 
     Itt a 'https://fakestoreapi.com' URL-t állítjuk be, így nem kell minden egyes kérésnél megadni az alap URL-t.
   - `timeout`: Az időtúllépés beállítása, amely 10 másodperc (10000 ms) arra az esetre, ha a kérés nem teljesülne 
     a megadott időn belül. Ez segít elkerülni a végtelen várakozást.
   - `headers`: Az Axios által küldött HTTP fejlécek konfigurálása. 
     Itt a 'Content-Type' fejlécet 'application/json' értékre állítjuk, jelezve, hogy az adatok JSON formátumban érkeznek, 
     ezzel biztosítva, hogy a szerver helyesen kezelje az adatokat.
*/
export const myAxios = axios.create({
    baseURL: 'https://fakestoreapi.com', // Az alapértelmezett API URL
    timeout: 10000, // 10 másodperces időtúllépés beállítása
    headers: {
        'Content-Type': 'application/json' // A fejléc beállítása JSON formátumra
    },
});
