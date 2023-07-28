import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logo from "../assets/img/mlslogo.png";
const NavBarComponent = (props) => {
  const location = useLocation();
  const [active, setActive] = useState("");
  const [checkUser, setCheckUser] = useState(false);
  useEffect(() => {
    let user = sessionStorage.getItem("email");
    if (user) {
      setCheckUser(true);
    }
    let path = location.pathname?.split("/");
    path[1] && setActive(path[1]);
  }, []);

  const handleClear = () => {
    sessionStorage.clear();
    setCheckUser(false);
  };
  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col sm="3" xs="12" md="3">
            <a href="/">
              <img id="logo-image" src={logo} alt="mls logo" />
            </a>
          </Col>
          <Col sm="9" xs="12" md="9">
            <nav>
              <ul>
                <li>
                  <Link to="/home" className={active === "" ? "active" : ""}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/programs"
                    className={active === "programs" ? "active " : ""}
                  >
                    Programs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className={active === "pricing" ? "active" : ""}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/studentjob"
                    className={active === "studentjob" ? "active" : ""}
                  >
                    Student Corner
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={active === "contact" ? "active" : ""}
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  {checkUser && (
                    <div className="nav-login-btn">
                      <a href="/" onClick={handleClear}>
                        LogOut
                      </a>
                    </div>
                  )}
                  {!checkUser && (
                    <div className="nav-login-btn">
                      <a href="/login">LogIn</a>
                    </div>
                  )}
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default NavBarComponent;
