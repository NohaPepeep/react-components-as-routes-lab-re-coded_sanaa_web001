import React from 'react';
import { movies } from '../data';

const Movies = () => {
 let looping = () =>{
   let 
   return movies.map((number) => `<div>${number.title} ${number.time}
   ${number.genres.forEach(element => `<li>${element}</li>`)}
   </div>`)
  }
  return (
    <div>
       <h1>Movies Page</h1>
       <div>{looping()}</div>
    </div>
  );
};

export default Movies;
