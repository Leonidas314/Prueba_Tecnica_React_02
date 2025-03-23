function ListOfMovies ({movies}){
    return(
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
    )
}
function NoMoviesResult(){
    return(
        <h2>No hay resultados para esta busqueda</h2> 
    )
}
export function RenderMovies({movies}) {
    const hasMovies = (movies.length>0)
    return(
        hasMovies? <ListOfMovies movies={movies}/>: <NoMoviesResult/>        

    )
}
