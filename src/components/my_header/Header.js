import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import "./Header.css";

const Header = ({ handleLogout, loggedUserName }) => {
  const navigate = useNavigate();

  function goToProfile(jaja) {
    if (loggedUserName) {
      navigate(`/Profile/${jaja}`);
    }
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="custom-navbar">
      <div className="container-fluid navbar-container">

        <div className="row">

          <div className="col-md-4 d-flex align-items-center  justify-content-center">

            <a href="/" className="custom-brand">

              <div className="row">
                
                <div className="col-md-7  d-flex align-items-center justify-content-center ">
                  <img
                    src="https://www2.elecom.co.jp.t.gj.hp.transer.com/healthcare/pickup/conan/image/ttl_main.png"
                    alt="Your Image"
                    className="brand-logo"
                  />
                </div>

                <div className="col-md-5 d-flex align-items-center justify-content-center">
            
                    <h1 className="brand-name mx-auto">非官方網站</h1>
                
                </div>

              </div>

            </a>

          </div>

          <div className="col-md-4 d-flex align-items-center justify-content-center">

            <div className="row">

              <div className="col-md-9 d-flex align-items-center justify-content-center ">
                <FormControl type="text" placeholder="想找哪部劇場版?" className="search-bar"/>
              </div>

              <div className="col-md-3 d-flex align-items-center justify-content-center ">
                <Button variant="info btn-lg" className="search-button d-flex align-items-center justify-content-center">
                  搜尋
                </Button>
              </div>

            </div>

          </div>

          <div className="col-md-4 d-flex align-items-center justify-content-center ">

            <div className="row">
              <div className="col-md-12 links-container d-flex align-items-center justify-content-end ">
                <Nav className="align-items-center">

                  <Link to="/VoteHome" className="nav-link">票選專區</Link>
                  <Link to="/MoreReviews" className="nav-link">電影評論區</Link>
                  <Link to="/#" className="nav-link">關於我們</Link>
                  <Link to="/#" className="nav-link">常見問題</Link>


                  <NavDropdown
                    title={<FontAwesomeIcon icon={faUser} />}
                    id="collasible-nav-dropdown"
                    className="d-flex align-items-center justify-content-center custom-dropdown">

                    <NavDropdown.Item onClick={() => goToProfile(loggedUserName)}>個人資料</NavDropdown.Item>
                    <NavDropdown.Item href="#rating">我的評論</NavDropdown.Item>
                    <NavDropdown.Item onClick={handleLogout}>登出</NavDropdown.Item>

                  </NavDropdown>

                </Nav>
              </div>
            </div>

          </div>




        </div>
      </div>
    </Navbar>
  );
};

export default Header;
