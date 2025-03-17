import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='page'>
      <header>
          <h1>Prueba Tecnica: Buscador de Peliculas</h1>
          <form className='form' action="">
            <button type='submit'>Buscar</button>   
            <input type="Peliculas" placeholder='Shrek, Batman, Spiderman' />
          </form>
      </header>
      <main>
        <h2>Resultados de la busqueda</h2>
      </main>
    </div>
  )
}

export default App
