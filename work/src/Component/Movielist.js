import React from 'react';

import Moviecard from './Moviecard';


const Movielist=({movie})=>{
   
    return(
        <div className="movie">
     { movie && movie[0] ? (movie.map((el)=> <Moviecard key={el.id} film={el}/>)):
      (<h1>NO RESULT FOUND</h1>)}
        
       </div>
    )}


export default Movielist;