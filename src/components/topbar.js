import React, { useEffect, useState } from 'react';
// import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';

import '../assets/css/box.css';
// import { useNavigate } from "react-router-dom";
import { logo } from '../pages/mls_constants';
const TopBarComponent = (props) => {
  
  return (
    <React.Fragment>
      <div className='top-bar'>
      <ul className='footer-menu'><li ><a  className="nav-link" href="tel:9649549754"><i class="fas fa-phone text-secondary"></i>(+91) 96495 49754</a></li><li><a className="nav-link" href="mailto:support@mlsclasses.com"><i class="fas fa-envelope text-secondary"></i>support@mlsclasses.com </a></li></ul>
      <ul className='footer-menu'>
        <li >
      <a className='nav-link'
                href="https://www.facebook.com/mlsclasses?mibextid=ZbWKwL"
                target="_blank" rel="noreferrer"
              >
                <i className="fa-brands fa-facebook-f" style={{ alignItems: "center", justifyContent: "center", minWidth: "1em" }}></i>
              </a>
              </li>
              <li>
              <a
                href="https://www.instagram.com/mlsclasses_usa?igsh=djFpaHZhZm1zdHBl&utm_source=qr"
                target="_blank" rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              </li>
              <li>
              <a
                href="https://www.linkedin.com/company/online-tutor-usa/"
                target="_blank" rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              </li>
      </ul>
        </div>
    </React.Fragment>
  );
};
export default TopBarComponent;