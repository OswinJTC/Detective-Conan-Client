import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/axiosConfig'; //沒有的話，review 也沒辦法 submit 了
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../my_reviewForm/ReviewForm';
import './Reviews.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion";
import {Link, useNavigate} from "react-router-dom";



const Reviews = ({ getMovieData, singleMovie, review, getUserData, singleUser, movies}) => {

  const revText = useRef();
  const movieId = useParams().movieId;

  
  useEffect(() => {
    getMovieData(movieId);
  }, [getMovieData, movieId]);

  

  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;

    try {
      const response = await api.post("/api/v1/reviews", { 
        reviewBody: rev.value, 
        MId: movieId,
        writter: localStorage.getItem("loggedInUserName")});

      rev.value = "";

    } catch (err) {
      console.error(err);
    }
  }

  const navigate = useNavigate();

  function reviews(movieId) {
      navigate(`/Reviews/${movieId}`);
  }

  const variants = {
    rest: {
      scale: 1,
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.1 },
    },
    tap: {
      scale: 0.99,
    },
  };



  return (
    <div className='the-whole-review-page'>
    <div>

      <div className='row'>
        <div className='col'>
          <p className="blank-row" />
        </div>
      </div>

      <div className="container-fluid ">
        <div className="row poster-row" style={{ backgroundImage: `url(${singleMovie?.backdrops[0]})` }}>

          <div className="col-md-4 poster  d-flex align-items-center  justify-content-center">
            <img src={singleMovie?.poster} alt="" className="poster-paper" />
          </div>


          <div className="col-md-8 descriptions d-flex flex-column">


            <div className="row movie-title mx-5 mb-2">
                <div className="movie-title-text">
                  <h2>{singleMovie?.title}</h2>
                </div>
        
            </div>



            <div className="row movie-information  mx-5 mb-5">
        
                <h4>詳細資料更新中......</h4>
        
            </div>



            <div className="row movie-overview  mx-5 mt-4">
      
                <div className="movie-overview-text">
                  <h3>{singleMovie?.overview}</h3>
                </div>
           
            </div>


          </div>

        </div>
      </div>

  <Row className="review-row">
  <Col className='the-whole-review-part' xs={8}>

    <div className='the-review-input-box'>
      <Row>
        <Col>
          <ReviewForm handleSubmit={addReview} revText={revText} />
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </div>

    <div className='all-the-user-reviews'>
      {review && review.length === 0 ? (
        <div>No reviews available.</div>
      ) : (
        review &&
        review.map((r, index) => (
          <div key={index}>
            <Row>
              <h5 className='review-writer-name'>{r?.writter}</h5>
              <h6 className='review-created-time'>{r?.created}</h6>
              <h4>{r?.body}</h4>
            </Row>
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
          </div>
        ))
      )}
     </div>

    </Col>

    <Col xs={4} style={{ paddingLeft: 0 }}>
          <div className=' d-flex justify-content-center mt-3 '>
            <h3>你可能會喜歡...</h3>
          </div>

          <div>
          <Row style={{ padding: "10px" }}>
            {movies &&
              movies.map((r, index) => (
                <Col md={6} key={index} style={{padding: "20px", textAlign: "center" }}>
                  <motion.button
                    variants={variants}
                    whileHover="hover"
                    whileTap="tap"
                    style={{ width: "100%", padding: 0, border: "none", background: "none" }}
                    onClick={() => reviews(r?.mid)}
                  >
                    
                    <img 
                      src={r?.poster}
                      alt={`Poster ${index + 1}`}
                      className="img-fluid mb-3"
                      style={{ width: "100%" }}
                    />
                    
                  </motion.button>

                  <h3 style={{color: "white"}}>{r?.title}</h3>

                  
                </Col>
              ))}
          </Row>
          </div>
    </Col>

    <div style={{ marginBottom: '200px' }}></div>

    </Row>
 

      <Row>
        <Col>
          <hr />
        </Col>
      </Row>

      

       
    </div>
    </div>
  )
}

export default Reviews;
