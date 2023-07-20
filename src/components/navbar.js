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
                <li><Link to="/" class={active === "" ? 'active' : ''}>Home</Link></li>
                <li><Link to="/programs" >Programs</Link></li>
                <li><Link to="/pricing" >Pricing</Link></li>
                <li><Link to="/studentjob" >Student Corner</Link></li>
                <li><Link to="/contact" class={active === "contact" ? 'active' : ''}>Contact Us</Link></li>
                <li>
                  <div class="nav-login-btn"><a href="#">Log In</a></div>
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