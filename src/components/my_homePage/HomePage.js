import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Paper from '@mui/material/Paper';
import './HomePage.css';

const HomePage = ({ movies }) => {
  return (
    <div>
      <div style={{ marginTop: '20px' }}>
        <h5 className="text-center" style={{ marginBottom: '20px' }}>
          電影
        </h5>
      </div>

      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <Link to="/VoteHome">
              <Paper elevation={3} className="text-card" style={{ backgroundImage: `url( https://i.etsystatic.com/7086259/r/il/08b4a2/671026877/il_570xN.671026877_4m3z.jpg)` }}>
                <h3>Latest voting function:</h3>
                <p>#Description goes here</p>
              </Paper>
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <Link to="/MoreReviews">
              <Paper elevation={3} className="text-card" style={{ backgroundImage: `url(https://www.greenlam.sg/media/catalog/product/cache/15/image/600x650/9df78eab33525d08d6e5fb8d27136e95/g/s/gsc-169-rose-pink_1.jpg)` }}>
                <h3>Best reviewing function:</h3>
                <p>#Description goes here</p>
              </Paper>
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <Paper elevation={3} className="text-card" style={{ backgroundImage: `url(https://media.istockphoto.com/id/157527860/photo/pink-sugar-sparkle-background.jpg?s=1024x1024&w=is&k=20&c=b58ke-8mx-jbO1TQg6_6CRXjtUNMhibho-dR79PisRU=)` }}>
              <h3>Fabulous web app experience:</h3>
              <p>#Description goes here</p>
            </Paper>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;
