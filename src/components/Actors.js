import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>

      {actors.map(m => 
    <div>
      <h1>{m.name}</h1>
      
      <ul>
        {m.movies.map(gen => 
          <li>
            {gen}
          </li>)}
      </ul>
    </div>)}
    </div>
  );
};

export default Actors;
