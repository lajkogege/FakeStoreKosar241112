import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const KosarContext= createContext("");

export const KosarProvider=({children })=>{
    const [kosarLista, setKosarLista]=useState([]);

    function kosar(obj){
       
    }
    
   
    }



