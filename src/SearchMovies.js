import React, {useState} from "react";
import MovieCard from "./MovieCard"

function SearchMovies() {
   
   const [query, setQuery] = useState('');
   const [movies, setMovies] = useState([]);
   const searchMovies = async (e) => {
      e.preventDefault();
      const url = `https://api.themoviedb.org/3/search/movie?api_key=324c3a95be625de22fa0d97d8f4df471&language=en-US&query=${query}&page=1&include_adult=false`;

      try {
         const res = await fetch(url);
         const data = await res.json();
         const results = await data.results;
         if ( results.length > 0){
            await setMovies(data.results);
         } else {
            const noResults = [{id: "0", poster_path : "/q0ZdIhd9Zb8mu3E6GFMSBoNqzYl.jpg", title: "No Results", overview : "Sorry we could not find any results" }]
            setMovies(noResults);
         }
      } catch (err) {
         console.log(err);
      }
   }

   return (
      <>
      <form className="form" onSubmit={searchMovies}>
         <label htmlFor="query" className="label"></label>
         <input type="text" name="query" className="input"
            placeholder="ie: jurassic park"
            value={query} onChange={(e) => setQuery(e.target.value)}
         />
         <button type="submit" className="button">Search</button>
         </form>
         <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>  
         </>
   )
}

export default SearchMovies;