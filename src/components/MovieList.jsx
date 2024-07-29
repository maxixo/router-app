import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({ title: "", image: "", description: "", rating: "" });
  const [filter, setFilter] = useState({ title: "", rating: "" });

  // handle fetch data from API
  const fetchMovies = async () => {
    const url = "https://imdb-top-100-movies.p.rapidapi.com/";
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
      setMovies(result);
      setFilteredMovies(result);
    } catch (error) {
      console.error(error);
    }
  };

  // call fetch inside useEffect
  useEffect(() => {
    fetchMovies();
  }, []);

  console.log('movies' , movies)

  useEffect(() => {
    const { title, rating } = filter;
    if (Array.isArray(movies)) {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating.toString().includes(rating)
    );
    setFilteredMovies(filtered);
}
  }, [filter, movies]);

  const handleAddMovie = () => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);

    setNewMovie({ title: "", image: "", description: "", rating: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };


  const navigate = useNavigate();
   
  const openMovieDetaiils = (id) => {
    console.log("movie ID: ", id);

    //navigate to movie

    navigate(`/movie/${id}`);
     

  }


  // styles
  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
      gap: "10px",
      padding: "40px",
    },
    form: {
      marginBottom: "20px",
    },
    input: {
      margin: "5px",
    },
  };

  return (
    <div>
      <div style={styles.form}>
        <h2>Add New Movie</h2>
        <input
          style={styles.input}
          type="text"
          name="title"
          placeholder="Title"
          value={newMovie.title}
          onChange={handleInputChange}
        />
        <input
          style={styles.input}
          type="text"
          name="image"
          placeholder="Image URL"
          value={newMovie.image}
          onChange={handleInputChange}
        />
        <input
          style={styles.input}
          type="text"
          name="description"
          placeholder="Description"
          value={newMovie.description}
          onChange={handleInputChange}
        />
        <input
          style={styles.input}
          type="text"
          name="rating"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={handleInputChange}
        />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>

      <div style={styles.form}>
        <h2>Filter Movies</h2>
        <input
          style={styles.input}
          type="text"
          name="title"
          placeholder="Filter by Title"
          value={filter.title}
          onChange={handleFilterChange}
        />
        <input
          style={styles.input}
          type="text"
          name="rating"
          placeholder="Filter by Rating"
          value={filter.rating}
          onChange={handleFilterChange}
        />
      </div>

      <div style={styles.container} className="mobile">
        {Array.isArray(filteredMovies) && filteredMovies.map((movie, index) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={movie.image}
            description={movie.description}
            rating={movie.rating}
            func= {() => openMovieDetaiils(movie.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;