import { useState } from 'react'
import './App.css'
import response from './tempResponse/response.json'
import badResponse from './tempResponse/no-response.json'
function App() {
  const movies = response.Search
  const badResponseData = badResponse.Response
  const hasMovies = (movies.length>0)//movies.lenght > 0 == true
  console.log(hasMovies)
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
        <h3>Resultados de la busqueda</h3>
        <ul>
          <li>Something to show</li>
          <li>Something to show</li>
          <li>Something to show</li>
        </ul>
        {
         <ul>
            {
              movies.map(movie =>(
                <li key={movie.imdbID}>
                  <h3>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                  <img src={movie.Poster} alt={movie.Title} />
                </li>
              ))
            }
         </ul>
        }
      </main>
    </div>
  )
}

export default App
