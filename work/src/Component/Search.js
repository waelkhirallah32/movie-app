import React from 'react';
import Rating from './Rating';


const Search=({handleSearch,search,rate,handleRate})=>{

    return(
        <div >
            <h1>MOVIE APP</h1>
            <input type="text" placeholder="Search for a movie" onChange={(event)=>handleSearch(event)}
             value={search} /> 
             <div className="search">
             <Rating handleRate={handleRate} movieRate={rate} />
           
            
        </div>
        </div>
    )
}


export default Search;