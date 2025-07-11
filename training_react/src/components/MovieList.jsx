import React, { useEffect, useState } from 'react'
import axios from 'axios';

const MovieList = () => {
    const[lists,setlists]=useState([]);

    useEffect(()=>{
        const fetchMovies = async () =>{
            try{
                const response = await axios.get(
                    'https://api.themoviedb.org/3/discover/movie',
                    {
                        Headers:{
                            accept: 'application/json',
                            Authorization:
                            '09d4a583c206cebdd85ad57b36cb5a9d'
                        },
                    }
                );
                console.log(response.data);

            }catch(error){
                console.error(error);
            }
        };
        fetchMovies();
    },[]);
    console.log(lists);





  return (
    <div>MovieList</div>
  )
}

export default MovieList