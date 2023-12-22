import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import api from './api/axiosConfig';
import Layout from './components/Layout';
import Home from './components/my_home/Home';
import Header from './components/my_header/Header';
import Footer from './components/my_footer/Footer';
import Trailer from './components/my_trailer/Trailer';
import Reviews from './components/my_reviews/Reviews';
import NotFound from './components/not_found/Not_Found';
import VoteHome from './components/my_vote/vote_home/VoteHome';
import Top5Movies from './components/my_vote/top_5_movies/Top5Movies';
import Top3Movies from './components/my_vote/top_3_movies/Top3Movies';
import Hero from './components/my_hero/Hero';
import Login from './components/my_login/Login';
import Profile from './components/my_profile/Profile';
import Register from './components/my_register/Register';
import ViewReviews from './components/my_viewReviews/ViewReviews';
import AboutUs from './components/my_aboutUs/AboutUs';
import PleaseWait from './components/my_pleaseWait/PleaseWait';
import './App.css';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movies, setMovies] = useState();
  const [singleMovie, setMovie] = useState();
  const [review, setReview] = useState();
  const [singleUser, setUser] = useState();
  const navigate = useNavigate();
  const [loggedUserName, setLoggedUserName] = useState();

  useEffect(() => {
    document.title = '名偵探柯南非官方網站';
  }, []);
 

  console.log("Now the user is logged in: ", isLoggedIn);

  const getMovies = async () => {
    try {
      const response = await api.get('/api/v1/movies');
      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);
      setMovie(response.data);
      setReview(response.data.reviewIds.map(review => review));
    } catch (error) {
      console.error(error);
    }
  }

  const getUserData = async (username) => {
    try {
      const response = await api.get(`/api/v1/users/${username}`);
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => { //這個要先（相較下面）
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    const storeUserName = localStorage.getItem("loggedInUserName")
    if (storedIsLoggedIn && storeUserName) {
      setIsLoggedIn(true);
      setLoggedUserName(storeUserName)
    }
  }, []);

  

  useEffect(() => { //這個要後，不知為啥兩者交換，刷新就會登出
    const updateLocalStorage = () => {
      localStorage.setItem('isLoggedIn', isLoggedIn);
      localStorage.setItem('loggedInUserName', loggedUserName);
    }
    updateLocalStorage();
  }, [isLoggedIn, loggedUserName ]);

  

  

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUserName');
    setIsLoggedIn(false);
    navigate('/');
  };

 

  return (
    <div className="App">
      {isLoggedIn && <Header handleLogout={handleLogout} loggedUserName = {loggedUserName}  />}
      
      <Routes>
        <Route path="/" element={<Layout />}>
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Home movies={movies} />} />
              <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
              <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} singleMovie={singleMovie} review={review} getUserData = {getUserData} singleUser = {singleUser} movies={movies}/>}/>
              <Route path="/VoteHome" element={<VoteHome />} />
              <Route path="/Top5Movies" element={<Top5Movies movies={movies} />} />
              <Route path="/Top3Movies" element={<Top3Movies movies={movies} />} />
              <Route path="/MoreReviews" element={<Hero movies={movies} />} />
              <Route path="/Profile/:username" element={<Profile getUserData={getUserData} singleUser = {singleUser}  />} /> 
              <Route path="/ViewReviews/:username" element={<ViewReviews getUserData={getUserData} singleUser = {singleUser} movies={movies}  />} /> 
              <Route path="/AboutUs" element={<AboutUs />} /> 
              <Route path="/PleaseWait" element={<PleaseWait />} /> 
              
            </>
          ) : (
            <>
            <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn}  setLoggedUserName = {setLoggedUserName} />} />
            <Route path="/Register" element={<Register />} />
            </>
           
          )}
          <Route path = "*" element = {<NotFound/>}/>

        </Route>
      </Routes>

      {isLoggedIn && <Footer />}
    </div>
  );
  
}

export default App;
