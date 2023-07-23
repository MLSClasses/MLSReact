import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link, useLocation } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo from '../assets/img/mlslogo.png';
const NavBarComponent = (props) => {
  const location = useLocation();
  const [active, setActive] = useState('');

  useEffect(() => {
    let path = location.pathname?.split("/");
    path[1] && setActive(path[1])
  }, []);

  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col sm="3">
            <img src={logo} alt="mls logo" />
          </Col>
          <Col sm="9">
            <nav>
              <ul>
                <li><Link to="/home" className={active === "" ? 'active' : ''}>Home</Link></li>
                <li><Link to="/programs" className={active === "programs" ? "active " : ""}>Programs</Link></li>
                <li><Link to="/pricing" classNameName={active === "pricing" ? "active" : ""}>Pricing</Link></li>
                <li><Link to="/studentjob" classNameName={active === "studentjob" ? "active" : ""}>Student Corner</Link></li>
                <li><Link to="/contact" className={active === "contact" ? 'active' : ''}>Contact Us</Link></li>
                <li>
                  <div className="nav-login-btn"><a href="/login">Log Out</a></div>
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