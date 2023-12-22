import React from 'react';
import './AboutUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => { 
  return (

    <div className='the-whole-aboutUs'>

    <div className='container'>
      <div className='row'>
        <div className='col-md-8 d-flex  justify-content-center align-items-center'>
          <h3>
          大家好！我是大學資訊工程的二年級學生，對前端開發和後端技術充滿熱情。目前，我正自主進行這個令人振奮的專案，使用 React.js 作為前端，Java Spring Boot 作為後端，並以 MongoDB 作為我的資料庫。
          <br /><br /><br />
          這個專案是一個寶貴的學習機會，讓我有機會自己動手實踐，並深入瞭解全端開發的流程。透過克服挑戰，我學到了如何提升應用程式的效能和擴展性，這對我未來的學習和發展都具有重要意義。
          <br /><br /><br />
          感謝這個機會，我期待在這個個人專案中不斷挑戰自己，提升技能，並創造出一個令人驚艷的應用程式！
          </h3>

        </div>

        <div className='col-md-4  d-flex align-items-center justify-content-center'>
          <img src="https://image.uniqlo.com/UQ/ST3/jp/imagesother/detective-conan/23ss/img/character-akai.png?20230320" className="show-one-shhh"/>

        </div>

      </div>

        
    </div>

    </div>
 
  );
};

export default AboutUs;

