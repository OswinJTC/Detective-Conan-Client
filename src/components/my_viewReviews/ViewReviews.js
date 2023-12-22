import React, { useEffect, useState } from 'react';
import './ViewReviews.css'; // Make sure to import your CSS file if you have any styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap if you're using it
import { useParams } from 'react-router-dom';

const ViewReviews = ({ getUserData, singleUser, movies }) => {

  const username = useParams().username;

  useEffect(() => {
    getUserData(username);
   
  }, [getUserData, username]);

  const getMovieDetailsByMId = (mid) => {
    return movies && movies.find((movie) => movie?.mid === mid);
  };
  

  return (
    <div className='the-whole-viewReviews-page'>

      <div className='d-flex mt-3 align-items-center justify-content-center'>
        <h1>
          我的過去評論
        </h1>
      </div>
      <div className='all-the-user-reviews'>
        <div className='container border'>
          {singleUser?.user_reviews && singleUser?.user_reviews.length === 0 ? (
            <div>No reviews available.</div>
          ) : (
            singleUser?.user_reviews &&
            singleUser?.user_reviews.map((r, index) => (

              <div key={index} className="">
                <div className='row'>

                  <div className='col-md-4 border d-flex flex-column align-items-center justify-content-center '>

                    <div className="review-origin-movie-poster-container border">
                      <img
                      src= {getMovieDetailsByMId(r?.mid)?.poster}
                      alt="Your Alt Text"
                      className="img-fluid "
                      />
                    </div>

                    <div >
                      <h3>{getMovieDetailsByMId(r?.mid)?.title}</h3>
                    </div>
                  
                    
      
                  </div>

                  <div className='col-md-8 border d-flex flex-column align-items-center justify-content-center'>
                   
                      <h5 className='review-created-time'>{r?.created}</h5>
                      <h3>{r?.body}</h3>
                  </div>
                  
                </div>

              
               
              </div>
            ))
          )}
          <div>.</div>
          <div style={{ marginBottom: '800px' }}></div>
          <div>.</div>
        </div>
      </div>
    </div>
  );
};

export default ViewReviews;
