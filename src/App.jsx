import Home from "./components/Home"
import MovieDetails from "./components/MovieDetails"
import MovieList from "./components/MovieList"
import {Routes, Route } from 'react-router-dom'



function App() {

  return (
    <>
      <h1>Welcome GMC Movies</h1>
     

      {/* define routes */}
      <Routes>
       
        <Route path='/movies' element = {<MovieList/>} />
        <Route path='/movie/:id' element = {<MovieDetails/>} />
      </Routes>
      
    </>
  )
}

export default App