import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Paper from '@mui/material/Paper';
import './HomePage.css';

const HomePage = ({ movies }) => {
  return (


    <div className='the-whole-homepage'>

  
    <div className='the-whole-carousel'>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <Link to="/VoteHome">
              <Paper elevation={3} className="text-card" style={{ backgroundImage: `url(https://i.ibb.co/D414vcg/4b9c143a5d0f488fa4d60b392d1c0795-noop.jpg)` }}>
            
              </Paper>
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <Link to="/MoreReviews">
              <Paper elevation={3} className="text-card" style={{ backgroundImage: `url(https://i.ibb.co/3BvGfHc/800x.jpg)` }}>
             
              </Paper>
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <Paper elevation={3} className="text-card" style={{ backgroundImage: `url(https://i.ibb.co/mDbsMRK/5546-GF3z-T3y-A25yd-Cz0-Klujj-RA3.jpg)` }}>
            
            </Paper>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>

    <div style={{ marginBottom: '600px' }}></div>

    <div className='below-banner'>
      哈哈哈哈
    </div>

    

    </div>
  );
};

export default HomePage;
