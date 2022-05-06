import React from 'react';
import { movies } from '../data';





const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        
        {movies.map(m => 
    <div>
      <h1>{m.title}</h1>
      <h3>{m.time} mins</h3>
      <ul>
        {m.genres.map(gen => 
          <li>
            {gen}
          </li>)}
      </ul>
    </div>)}
    </div>
  );
};

export default Movies;
