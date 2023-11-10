import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';


const Hero = ({movies}) => {

    const navigate = useNavigate();

    function reviews(movieId) {
        navigate(`/Reviews/${movieId}`);
    }

    
  return (
    <div className ='movie-carousel-container'>
      <Carousel>
        {
            
            movies?.map((movie_item) =>{
                return(
                    <Paper key={movie_item.mid}>
                        
                        <div className = 'movie-card-container'>
                            <div className="movie-card" style={{"--img": `url(${movie_item.backdrops && movie_item.backdrops[1]})`}}>
                                <div className="movie-detail">

                                    {/* Poster */}
                                    <div className="movie-poster">
                                        <img src={movie_item.poster} alt="" />
                                    </div>

                                    {/* Title */}
                                    <div className="movie-title">
                                        <h4>{movie_item.title}</h4>
                    
                                    </div>

                                    {/* Buttons */}
                                    <div className="movie-buttons-container">

                                        {/* Trailer button */}
                                        <Link to={`/Trailer/${movie_item.trailerLink && movie_item.trailerLink.substring(movie_item.trailerLink.length - 11)}`}>
                                            <div className="play-button-icon-container">
                                                <FontAwesomeIcon className="play-button-icon"
                                                    icon = {faCirclePlay}
                                                />
                                            </div>
                                        </Link>

                                        {/* Review button */}
                                        <div className="movie-review-button-container">
                                            <Button variant ="info" onClick={() => reviews(movie_item.mid)}>Reviews</Button>{/* why mid works instead of MId, wtf is that */}
                                        </div>
                                        

                                    </div>

                                </div>
                            </div>
                        </div>
                    </Paper>
                )
            })
        }
      </Carousel>
    </div>
  )
}

export default Hero
