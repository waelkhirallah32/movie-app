  import React,{useState}  from 'react';

  import './App.css';
  import { Moviedata } from './Component/Data';
  import Movielist from './Component/Movielist';
  import Search from './Component/Search';
  import Add from './Component/Add';


  function App(){
    
    const [movie,setMovie]=useState(Moviedata);
    const [search,setSearch]=useState("");
    const [rate,setRate]=useState(1);
      
    const addMovie = (newMovie) => setMovie([...movie, newMovie]);





    const handleSearch=(event)=>
      setSearch(event.target.value);
    



    const handleRate=(rate)=>
      setRate(rate);
    

    const filterMovie = () =>{
      return movie.filter(
        (movie)=> movie.name.toLowerCase().includes(search.toLowerCase().trim()) &&
         movie.rate >=rate 
     );
    };


   return (
    <div className="App">
     
     <Search handleSearch={handleSearch} handleRate={handleRate} search={search} rate={rate} />
     <Movielist movie={filterMovie()}/>
     <Add addMovie={addMovie}/>
     
    </div>
  );
  }
  
  

  export default App;
