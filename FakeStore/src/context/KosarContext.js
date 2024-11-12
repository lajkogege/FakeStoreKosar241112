import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const KosarContext= createContext("");

export const KosarProvider = ({ children }) => {
    const [kosarLista, setKosarLista]=useState([])
   function kosarba(adat){
    const sV=[...kosarLista]
    sV.push(adat)
    setKosarLista([...sV])
   }
    // Visszatérünk a Provider elemmel, amely a termekLista-t osztja meg a children komponensekkel
    return (
        <KosarContext.Provider value={{ kosarLista,  kosarba}}>
            {children}
        </KosarContext.Provider>
    );
};





