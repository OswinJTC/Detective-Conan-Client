import { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Top5Movies.css";
import Button from "react-bootstrap/Button";
import api from '../../../api/axiosConfig';

const Top5Movies = ({ movies }) => {
  const [selected, setSelected] = useState([]);
  const [showMessage1, setShowMessage1] = useState(false);
  const [showMessage2, setShowMessage2] = useState(false);
  const [vote1, setVote1] = useState([]);//取得 vote 物件
  const [expanded, setExpanded] = useState(false);
  const [selectedMovies, setSelectedMovies] = useState([]);//只是把 movies 原封搬到這裡
  const topicId = "1";



  const transferMovies = () => {
    if (movies && movies.length) {
      const newSelectedMovies = movies.map((movie) => ({ ...movie }));
      setSelectedMovies(newSelectedMovies);
    }
  };

  useEffect(() => {
    transferMovies();
  }, [movies]);

  

  const getVote1 = async (topicId) => {
    try {
      const response = await api.get(`/api/v1/votes/${topicId}`);
      setVote1(response.data);
    } catch (error) {
      console.error("Error fetching vote 1:", error);
    }
  };
  
  useEffect(() => {
    getVote1(topicId);
  }, [getVote1,topicId]);
  

  const arrayWithIndexes = vote1 && vote1.points ? vote1.points.map((value, index) => ({ value, index })) : [];
  const sortedArray = arrayWithIndexes.sort((a, b) => b.value - a.value);


  //selected 裡面存的就是每部電影的索引值！！！
  const handleSelect = (index) => {

    if (selected.length < 5 || selected.includes(index)) {
      if (selected.includes(index)) {
        setSelected(selected.filter((item) => item !== index));
      } else {
        setSelected([...selected, index]);
      }
    }
  };


  const submitVote = async () => {
    try {

      if (selected.length !== 5) {
        setShowMessage2(true);
        // Hide the message after 2 seconds
        setTimeout(() => {
          setShowMessage2(false);
        }, 2000);
        return;
      }

       await api.put("/api/v1/votes", {
        
        beVotedCandidateIndexes: selected.map((selectedIndex) => selectedIndex),
        correspondingPoints: selected.map((selectedIndex) => 5 - selected.indexOf(selectedIndex)),
        topicId: "1",
      });

      setSelected([]);
      setShowMessage1(true);

      // Hide the message after 2 seconds
      setTimeout(() => {
        setShowMessage1(false);
      }, 2000);
  
    } catch (err) {
      console.error(err);
    }
  };
  

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
    
    <div className='the-whole-top5'>
    <Container fluid style={{ border: "1px solid white" }}>

<Row style={{ marginBottom: "20px", padding: "20px", borderBottom: "1px solid white" }}>
  <Col>
    <h2 className="text-center mt-3 mb-5" style={{fontSize: "100px"}}>最佳劇場版 Top 5</h2>
    <div style={{ marginTop: "20px", textAlign: "center", color: "white" }}>
      <Container style={{ marginTop: "20px", textAlign: "center", color: "white"}}>
        <h4 style = {{ fontSize: "75px" }}>當前排名</h4>

        {sortedArray && (
        <div>
         <Container style={{ margin: "0 auto", border: "1px solid white", padding: "10px" }}>
            <Row style={{ background: "lightgray", margin: "5px" }}>
              <Col style={{ fontSize: "50px", color: "black" }}>名次</Col>
              <Col style={{ fontSize: "50px", color: "black" }}>片名</Col>
              <Col style={{ fontSize: "50px", color: "black" }}>積分</Col>
            </Row>
           {expanded
            ? sortedArray.map((r, idx) => (
              <Container key={idx} style={{ border: "1px solid white", padding: "10px", background: "whitesmoke", margin: "10px" }}>
                <Row style={{  fontSize: "40px" }}>
                  <Col style={{ color: "black" }}>{idx + 1}</Col>
                  <Col style={{ paddingLeft: "20px", color: "black" }}>
                  {selectedMovies[r.index] ? selectedMovies[r.index].title : ""}
                  </Col>
                  <Col style={{ color: "black" }}>{r.value}分</Col>
                </Row>
              </Container>
          ))
          : sortedArray.slice(0, 5).map((r, idx) => (
             <Container key={idx} style={{ border: "1px solid white", padding: "10px", background: "whitesmoke", margin: "10px" }}>
                <Row style={{ fontSize: "40px" }}>
                  <Col style={{ color: "black" }}>{idx + 1}</Col>
                  <Col style={{ paddingLeft: "20px", color: "black" }}>
                  {selectedMovies[r.index] ? selectedMovies[r.index].title : ""}
                  </Col>
                  <Col style={{ color: "black" }}>{r.value}分</Col>
                </Row>
            </Container>
          ))}

          </Container>
            <div className="text-center" style={{ margin: "20px" }}>
              <button
                onClick={() => {
                  setExpanded(!expanded);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}style={{fontSize: "60px"}}>
                {expanded ? "收起" : "展開"}
              </button>
            </div>
          </div>
        )}

      </Container>
    </div>
  </Col>
</Row>






      <Row style={{ marginBottom: "20px", padding: "10px", borderBottom: "1px solid white" }}>
        <Col md={3} className="vote-topics mb-5" style={{ borderRight: "1px solid white", height: "100%", paddingTop: "20px" }}>
          <div style={{ borderBottom: "1px solid white" }}>
            <h5 className="text-center" style={{ marginBottom: "20px" }}>電影</h5>
            <ul className="list-group">
              <li className="list-group-item">
                <Link to="/Top5Movies">最佳劇場版 top 5</Link>
              </li>
              <li className="list-group-item">
                <Link to="/Top3Movies">最爛劇場版 top 3</Link>
              </li>
              <li className="list-group-item">
                <Link to="/suspense-movies">最懸疑</Link>
              </li>
              <li className="list-group-item">
                <Link to="/exciting-movies">最刺激</Link>
              </li>
              <li className="list-group-item">
                <Link to="/artistic-movies">最有藝術</Link>
              </li>
            </ul>
          </div>
          <div style={{ marginTop: "20px" }}>
            <h5 className="text-center" style={{ marginBottom: "20px" }}>角色</h5>
            <ul className="list-group">
              <li className="list-group-item">
                <Link to="/favorite-characters">喜歡的角色</Link>
              </li>
              <li className="list-group-item">
                <Link to="/hated-characters">討厭的角色</Link>
              </li>
              <li className="list-group-item">
                <Link to="/best-couples">最佳情侶黨</Link>
              </li>
            </ul>
          </div>
        </Col>

        <Col md={9}>

          <h5 className="text-center mb-4" style={{fontSize: "40px"}}>確認好哪五個後，按 Submit</h5>
          <div className="text-center">
          <Button onClick={submitVote} variant="info btn-lg" className="submit-button custom-button" style={{fontSize: "30px"}}>Submit</Button>
          </div>
          
          <Row style={{ padding: "10px" }}>
            {movies &&
              movies.map((r, index) => (
                <Col md={3} key={index} style={{ border: "1px solid white",padding: "30px", textAlign: "center" }}>
                  <motion.button
                    variants={variants}
                    whileHover="hover"
                    whileTap="tap"
                    className={`poster-button ${selected.includes(index) ? "poster-opacity" : ""}`}
                    initial="rest"
                    animate={selected.includes(index) ? "tap" : "rest"}
                    style={{ width: "100%", padding: 0, border: "none", background: "none" }}
                    onClick={() => handleSelect(index)}
                  >
                    {selected.includes(index) && <div className="selected-number">第 {selected.indexOf(index) + 1} 名</div>}
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
        </Col>
      </Row>


      {showMessage1 && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            color: "white",
            padding: "20px",
            borderRadius: "5px",
            zIndex: "9999",
          }}
        >
          <h2>Thank you for submitting!</h2>
        </div>
      )}

      {showMessage1 && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: "9998",
          }}
        />
      )}

      {showMessage2 && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            color: "white",
            padding: "20px",
            borderRadius: "5px",
            zIndex: "9999",
          }}
        >
          <h2>選滿五個，才可以送出呦！</h2>
        </div>
      )}

      

    </Container>
    
    </div>
    
  );
};

export default Top5Movies;
