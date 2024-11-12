import React, { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'
import Vasaroter from '../components/Vasaroter'
import Kosar from '../components/Kosar'


export default function Public() {
  return (
    <div>
      <main className="row">
      <article className="col-lg-8">
          <h4>Vásárlótér</h4>
          <Vasaroter lista={termekLista} /> 
        </article>
        <aside className="col-lg-4">
          <h4>Kosár</h4>
          <Kosar />
        </aside>
      
      </main>
    </div>
  )
}