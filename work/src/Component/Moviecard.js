import React, { Fragment } from 'react';

import Rating from './Rating';


const MovieCard=({film})=>{


    return(
        
        <div >
            <Rating movieRate={film.rate}/>
            <img src={film.image} alt={film.name}/>
            <h2>{film.name} </h2>
              <h2 id="res">  {film.date}</h2>
               
            
        </div>
        
    )
}


MovieCard.defaultProps={
    film:{
        name:"",
        date:"",
        image:""
    }
}

export default MovieCard;