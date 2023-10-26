import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/my_home/Home';
import Header from './components/my_header/Header';
import Trailer from './components/my_trailer/Trailer';
import Reviews from './components/my_reviews/Reviews';
import NotFound from './components/not_found/Not_Found';
import VoteHome from './components/my_vote/vote_home/VoteHome';
import Top5Movies from './components/my_vote/top_5_movies/Top5Movies';
import Top3Movies from './components/my_vote/top_3_movies/Top3Movies';
import Hero from './components/my_hero/Hero';


function App() {

  const [movies, setMovies] = useState();
  const [dick, setMovie] = useState();
  const [tai_review, setReview_tai] = useState([]);
  

  const getMovies = async () =>{
    
    try
    {

      const response = await api.get("/api/v1/movies");

      setMovies(response.data);

    } 
    catch(err)
    {
      console.log(err);
    }
  }

  const getMovieData = async (movieId) => {
     
    try 
    {
        const response = await api.get(`/api/v1/movies/${movieId}`);

        setMovie(response.data);
        setReview_tai(response.data.reviewIds.map(review => review.body))
        
    } 
    catch (error) 
    {
      console.error(error);
    }

  }

  useEffect(() => {
    getMovies();
  },[])

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home movies={movies} />} ></Route>
            <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
            <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} dick={dick} tai_review = {tai_review}  />}></Route>
            <Route path="*" element = {<NotFound/>}></Route>
            <Route path="/VoteHome" element = {<VoteHome />}></Route>
            <Route path="/Top5Movies" element = {<Top5Movies movies={movies} />}></Route>
            <Route path="/Top3Movies" element = {<Top3Movies movies={movies} />}></Route>
            <Route path="/MoreReviews" element = {<Hero movies={movies} />}></Route>
            
          </Route>
      </Routes>

    </div>
  );
}

export default App;