import React from 'react';
import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';


const MovieDetails = () => {

    const styles = {
        height: '700px',
        width: '400px',
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        color: 'white',
        fontSize: '24px',
        marginLeft: '200px',
    }

 const { id } = useParams();
 const [movies, setMovie] = useState([]);

 const getMovies = async () => {
        const url = `https://imdb-top-100-movies.p.rapidapi.com/${id}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a889d10d51msh774362e1b7d404ep1430e2jsnfb957852c6c2',
                'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setMovie(result);
        } catch (error) {
            console.error(error);
        }
 };


 useEffect(() => {
  getMovies();
}, [id]);

console.log('getMovies', movies);



  return (
    <div key={movies.id}>
      <h1>
      This is your movie
      </h1>       
    <div >
         <h1>{movies.title}</h1>
         <img src={movies.image} alt="" />
         <h1  style={{width:'280px'}}   >{movies.description}</h1>
         <h2>{movies.rating}</h2>
         </div>   
    </div>
  )
}

export default MovieDetails