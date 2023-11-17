import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook} from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';




const Footer = () => {
  return (

    <footer className="bg-dark text-center text-white">
      <div className="container the-whole-footer-content ">

        
          

          <div className="row pt-3 all-the-links ">

                <div className='col-md-1 '></div>
  
                <div className='col-md-8 pt-3 pb-3 all-the-reviews '>

                  <h4>電影評論區</h4>
                  <hr />
                   
                </div>

                <div className='col-md-2 pt-3 pb-3 all-the-votes '>
                  <h4>票選專區</h4>
                  <hr />
        
                </div>

                <div className='col-md-1 '></div>

              
          </div>

          

          

          <div className="row all-the-links ">
                <div className='col-md-1'></div>
  
                <div className='col-md-8 pr-1 pl-1 all-the-reviews '>

                  <div className='row '>

                    <div className='col' >
                      <p><Link to="/Reviews/1">引爆摩天樓</Link></p>
                      <p><Link to="/Reviews/2">第十四號獵物</Link></p>
                      <p><Link to="/Reviews/3">世紀末的魔術師</Link></p>
                      <p><Link to="/Reviews/4">瞳孔中的暗殺者</Link></p>
                      <p><Link to="/Reviews/5">往天國的倒數計時</Link></p>
                      <p><Link to="/Reviews/6">貝克街的亡靈</Link></p>
                      
                    </div> 

                    <div className='col'>

                      <p><Link to="/Reviews/7">迷宮的十字路</Link></p>
                      <p><Link to="/Reviews/8">銀翼的魔術師</Link></p>
                      <p><Link to="/Reviews/9">水平線上的陰謀</Link></p>
                      <p><Link to="/Reviews/10">偵探們的鎮魂歌</Link></p>
                      <p><Link to="/Reviews/11">紺碧之棺</Link></p>
                      <p><Link to="/Reviews/12">戰慄的樂譜</Link></p>
                      

                    </div> 

                    <div className='col'>

                      
                      <p><Link to="/Reviews/13">漆黑的追跡者</Link></p>
                      <p><Link to="/Reviews/14">天空的劫難船</Link></p>
                      <p><Link to="/Reviews/15">沉默的15分鐘</Link></p>
                      <p><Link to="/Reviews/16">第11位前鋒</Link></p>
                      <p><Link to="/Reviews/17">絕海的偵探</Link></p>
                      <p><Link to="/Reviews/18">異次元的狙擊手</Link></p>
                      

                  
                    </div> 

                    <div className='col'>

                      
                      <p><Link to="/Reviews/19">業火的向日葵</Link></p>
                      <p><Link to="/Reviews/20">純黑的惡夢</Link></p>
                      <p><Link to="/Reviews/21">唐紅的戀歌</Link></p>
                      <p><Link to="/Reviews/22">零的執行人</Link></p>
                      <p><Link to="/Reviews/23">紺青之拳</Link></p>
                      <p><Link to="/Reviews/24">緋色的彈丸</Link></p>
 
                      
                    </div> 

                    <div className='col'>
 
                      <p><Link to="/Reviews/25">萬聖節的新娘</Link></p>
                      <p><Link to="/Reviews/26">黑鐵的魚影</Link></p>
                      
                    </div> 

                  </div>
                   
                </div>

                <div className='col-md-2 pr-1 pl-1 all-the-votes '>

                      <p><Link to="/Top5Movies">最佳劇場版top5</Link></p>
                      <p><Link to="/Top3Movies">最爛劇場版top3</Link></p>
                      <p><Link to="/Reviews/25">最刺激</Link></p>
                      <p><Link to="/Reviews/23">喜歡的角色</Link></p>
                      <p><Link to="/Reviews/24">討厭的角色</Link></p>
                      <p><Link to="/Reviews/25">最佳情侶黨</Link></p>
              
                    
                  
                </div>

                <div className='col-md-1 '></div>

               

          </div>

          <div className="row">
            <div className='follow-us-words pt-5 pb-1'>
              <h3>Follow Us</h3>
            </div>
          </div>

          <div className="row the-icons pb-4 justify-content-center ">
  
                <div className='col-md-1 pr-1 pl-1 IG-icon'>
                  <a href="https://www.instagram.com/0s_w1n.25/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>

                <div className='col-md-1 pr-1 pl-1 IG-icon'>
                  <a href="https://www.facebook.com/profile.php?id=100047866058465" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </div>

                <div className='col-md-1 pr-1 pl-1 IG-icon'>
                  <a href="https://www.linkedin.com/in/chen-jui-tai/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} /> 
                  </a>
                </div>

                <div className='col-md-1 pr-1 pl-1 IG-icon'>
                  <a href="https://github.com/OswinJTC" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon= {faGithub} />
                  </a>
                </div>


          </div>


        </div>

          
       
      <div className="Copyright-text text-center pt-3 pb-3">
        Copyright © {new Date().getFullYear()} 柯南劇場版討論區 All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
