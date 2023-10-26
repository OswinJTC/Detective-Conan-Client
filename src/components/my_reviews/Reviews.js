import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/axiosConfig'; //沒有的話，review 也沒辦法 submit 了
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../my_reviewForm/ReviewForm';
import './Reviews.css';

const Reviews = ({ getMovieData, dick, tai_review }) => {

  const revText = useRef();
  const movieId = useParams().movieId;
  
  useEffect(() => {
    getMovieData(movieId);
  }, [getMovieData, movieId]);

  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;

    try {
      const response = await api.post("/api/v1/reviews", { reviewBody: rev.value, MId: movieId });

      rev.value = "";

    } catch (err) {
      console.error(err);
    }
  }



  return (
    <div className="container-fluid">

      <Row>
        <Col>
          <p className="blank-row" />
        </Col>
      </Row>

      <Container fluid className="border">
        <Row className="poster-row" style={{ backgroundImage: `url(${dick?.backdrops[0]})` }}>

          <Col md={4} className="poster border">
            <img src={dick?.poster} alt="" className="poster-paper" />
          </Col>

          <Col md={7} className="descriptions border">

            <Row className="movie-title border row-cols-1">
              <Col>
                <div className="movie-title-text">
                  <h3>{dick?.title}</h3>
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
                  <h3>{dick?.overview}</h3>
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
        <Col>
          <>
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
          </>

          {
            tai_review.length === 0 ? (
              <div>No reviews available.</div>
            ) : (
              tai_review.map((r, index) => (
                <div key={index} className="border">
                  <Row>
                    <Col>{r}</Col>
                  </Row>
                  <Row>
                    <Col>
                      <hr />
                    </Col>
                  </Row>
                </div>
              ))
            )
          }

        </Col>
      </Row>

      <Row>
        <Col>
          <hr />
        </Col>
      </Row>

       
    </div>
  )
}

export default Reviews;
