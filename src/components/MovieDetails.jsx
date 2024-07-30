import React from 'react';
import {Link, useParams} from 'react-router-dom';
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
            'x-rapidapi-key': '2c1748817cmshc2d4d4e34af7f55p1d15b2jsnfd06713e92e4',
            'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
          }
        
        }

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
         <h1  style={{width:'280px'}}>{movies.description}</h1>
         <Link to={movies.trailer} >Trailer</Link>
         <>
         &nbsp; 
         </>
         &nbsp; 
         &nbsp; 
         &nbsp; 
          
         <Link to='/movies'> Go back home</Link>
         
        
         </div>   
    </div>
  )
}

export default MovieDetails