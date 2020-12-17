import React from 'react';

const Rating=({handleRate,movieRate})=>{
    const stars=(rate)=>{
        let stars=[]
        for (let i=1 ; i<6 ; i++)
        if (i <= rate ){
            stars.push(
               <span onClick={()=>handleRate(i)}
               style={{ color: "#FFC200", cursor: "pointer", fontSize: "20px" }}>
                   
                   ★</span>
            )
        }
        else{
            stars.push(
                <span onClick={()=>handleRate(i)}
                style={{ color:"black", cursor: "pointer", fontSize: "20px" }}>
                    
                    ★</span>
             
            )
        }
        return stars;
    }
        return <div> {stars(movieRate)} </div>;
}

Rating.defaultProps={
    handleRate:() => {},
    movieRate:0,
}

export default Rating;