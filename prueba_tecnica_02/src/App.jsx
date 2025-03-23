import { useState } from 'react'
import badResponse from './tempResponse/no-response.json'
import response from './tempResponse/response.json'
import './App.css'
import {RenderMovies} from './components/Movies'
function App() {
  const movies = response.Search
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
        <RenderMovies movies={movies} />
      </main>
    </div>
  )
}

export default App
