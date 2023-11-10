import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/axiosConfig'; //沒有的話，review 也沒辦法 submit 了
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../my_reviewForm/ReviewForm';
import './Reviews.css';



const Reviews = ({ getMovieData, singleMovie, review, getUserData, singleUser}) => {

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



  return (
    <div className='the-whole-review-page'>
    <div>

      <Row>
        <Col>
          <p className="blank-row" />
        </Col>
      </Row>

      <Container fluid className="border">
        <Row className="poster-row" style={{ backgroundImage: `url(${singleMovie?.backdrops[0]})` }}>

          <Col md={4} className="poster border">
            <img src={singleMovie?.poster} alt="" className="poster-paper" />
          </Col>

          <Col md={7} className="descriptions border">

            <Row className="movie-title border row-cols-1">
              <Col>
                <div className="movie-title-text">
                  <h3>{singleMovie?.title}</h3>
                </div>
              </Col>
            </Row>

            <Row className="movie-information border row-cols-1">
              <Col>
                <h3>LILILI</h3>
              </Col>
            </Row>

            <Row className="movie-overview border row-cols-1" style={{ marginTop: '100px', paddingBottom: "200px", paddingTop: "100px" }}>
              <Col>
                <div className="movie-overview-text">
                  <h3>{singleMovie?.overview}</h3>
                </div>
              </Col>
            </Row>

          </Col>

        </Row>
      </Container>

      <Row>
        <Col>
          <p className="blank-row" />
        </Col>
      </Row>
 
<Row className="review-row border">
  <Col className='the-whole-review-part border' xs={6} style={{ borderRight: '1px solid red' }}>
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
          <div key={index} className="border">
            <Row>
              <h2 className='review-writer-name'>{r?.writter}</h2>
              <h5 className='review-created-time'>{r?.created}</h5>
              <h3>{r?.body}</h3>
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
            <Col xs={6} className='border' style={{ paddingLeft: 0 }}>
              fuck you
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
