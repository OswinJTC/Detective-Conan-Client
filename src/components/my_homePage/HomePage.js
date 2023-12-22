import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Paper from '@mui/material/Paper';
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { text } from '@fortawesome/fontawesome-svg-core';

const HomePage = ({ movies }) => {
  return (


    <div className='the-whole-homepage'>

  
    <div className='the-whole-carousel pb-5'>
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

    <div className="below-carousel-container container-fluid  mb-5 mt-5">

      
        <div className="row">

        <div className='col-md-1 '></div>


            <div className="col-md-5 text-center  d-flex flex-column align-items-center justify-content-center">
              <h3 className='mt-3'><b>超強網站功能</b></h3>
              <h1></h1>
              <p>當您進入我的電影評論網站時，您將踏入一個豐富多彩的電影世界，這裡匯聚了各種類型、風格和主題的影片。我們致力於提供深入且富有洞察力的影評，以引導您在眾多選擇中找到最適合您品味的電影</p>
              <p>我們的網站設計簡潔而直觀，讓您能夠輕鬆瀏覽各種影片評論、影評家的見解，以及其他影迷的評論。無論您對哪種電影風格感興趣，我們都有相應的內容，從經典作品到最新上映的大片，應有盡有。</p>
            </div>

            <div className='col-md-1 '></div>

            <div className="col-md-4  d-flex flex-column justify-content-center">
      
        
                <h5>- 即時互動，讓用戶輕鬆分享和參與社群。</h5>
                <h5>- 個性化體驗，根據喜好自定義介面。</h5>
                <h5>- 多平台優化，桌面、平板、手機無縫切換。</h5>
                <h5>- 豐富多媒體，影片、圖片、音頻一應俱全。</h5>
                <h5>- 安全隱私，確保用戶數據安全可靠。</h5>
                       
            </div>
            
            <div className='col-md-1 '></div>
        </div>


    </div>


    <div className="three-photo-showing container  mt-5">

      
        <div className="row ">

            <div className="col-md-4  d-flex align-items-center justify-content-center">
              <div className="square-container">
              <img
                src="https://image.uniqlo.com/UQ/ST3/jp/imagesother/detective-conan/23ss/img/slide_conan-1.jpg?20230320"
                alt="Your Alt Text"
                className="below-banner-image img-fluid square-image"
              />
              </div>
            </div>

            <div className="col-md-4  d-flex align-items-center justify-content-center">
              <div className="square-container">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5e90e8679180dd053f86571c/1605830631103-6YIUK72VR4Z1SD7X2BM4/caseclosed_zerotheenforcer_square.png"
                alt="Your Alt Text"
                className="below-banner-image img-fluid square-image"
              />
              </div>
            </div>
           
            
            <div className="col-md-4   d-flex align-items-center justify-content-center">
              <div className="square-container">
              <img
                src=" https://cdn11.bigcommerce.com/s-89ffd/images/stencil/1280x1280/products/87336/292489/4977389030682_2a5136c17e7bfcce4097a195a7e2efc1__75482.1614761103.jpg?c=2?imbypass=on"
                alt="Your Alt Text"
                className="below-banner-image img-fluid square-image"
              />
              </div>
            </div>
        </div>

        <div className="row">

            <div className="col-md-4 text-center  py-3">
            <h3>靈魂共鳴，絕佳搭檔</h3>
            </div>

            <div className="col-md-4 text-center  py-3">
            <h3>神秘組織，狡猾陰謀</h3>
            </div>
           
            
            <div className="col-md-4 text-center  py-3">
            <h3>神秘藥物讓他變身</h3>
            </div>

        
        </div>

    </div>

    <div className="below-banner-container container rounded-5  mb-5 mt-5">

      
        <div className="row">

            <div className='col-md-1 '></div>

            <div className="col-md-4  text-center ">
              <img
                src="https://image.uniqlo.com/UQ/ST3/jp/imagesother/detective-conan/23ss/img/opening.png?20230320"
                alt="Your Alt Text"
                className="below-banner-image img-fluid "
              />
            </div>

            <div className="col-md-6  d-flex align-items-center justify-content-center">
      
                 <h2>流動的水沒有形狀，</h2>
                 <h2>真相只有一個!</h2>
                       
            </div>



            <div className='col-md-1 '></div>
        </div>


    </div>



   

    <div style={{ marginBottom: '20px' }}></div>

    

    

 

    <div>"</div>

 

    

    </div>
  );
};

export default HomePage;
