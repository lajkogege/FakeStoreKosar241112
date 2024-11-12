import React, { useContext } from 'react'
import { KosarContext } from '../context/KosarContext'

function Kosar() {
  const { kosarLista } = useContext(KosarContext)
  
  return (
    <div>
      {kosarLista.map((elem, index) => { 
        return <p key={index}>{elem}</p> 
      })}
    </div>
  )
}

export default Kosar
