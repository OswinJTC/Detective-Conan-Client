import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Link , useNavigate} from 'react-router-dom';
import "./Header.css";


const Header = ({handleLogout, loggedUserName}) => {


  
  console.log("UserName in Header:", loggedUserName);


  const navigate = useNavigate();  


  function goToProfile(jaja){
    if (loggedUserName) {
      navigate(`/Profile/${jaja}`);
    }
  }
 

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="custom-navbar">
      <Container fluid className="navbar-container d-flex align-items-center justify-content-between">

        <div className="d-flex align-items-center me-1">
          <a href="/" className="custom-brand border me-3">
            <img
              src="https://www2.elecom.co.jp.t.gj.hp.transer.com/healthcare/pickup/conan/image/ttl_main.png"
              alt="Your Image"
              className="brand-logo"
              height="75px"
            />
            <div className="brand-name">
              <p4>劇場版討論區</p4>
            </div>
          </a>
        </div>

        <div className="d-flex align-items-center" >
          <div className="search-container border me-2">
            <FormControl
              type="text"
              placeholder="想找哪部劇場版?"
              style={{ width: "750px", height: "60px", marginRight: "30px", marginLeft: "230px", fontSize: "25px" }}
            />
            <Button variant="info btn-lg" className="search-button custom-button" style={{ width: "120px", height: "50px", marginRight: "3px"}}>
              馬上搜尋
            </Button>
          </div>
        </div>

        <div className="d-flex align-items-center" style={{ marginRight: "80px" }}>
          <Nav className="links-container border me-4">
            <Nav.Link href="/VoteHome">票選專區</Nav.Link>
            <Nav.Link href="#pricing">角色介紹</Nav.Link>
            <Nav.Link href="/MoreReviews">電影評論區</Nav.Link>
          </Nav>

          

          <Nav className="profile-container border">
            <NavDropdown title={<FontAwesomeIcon icon={faUser} />} id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => goToProfile(loggedUserName)}>Profile</NavDropdown.Item> 
              <NavDropdown.Item href="#rating">Your Rating</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
