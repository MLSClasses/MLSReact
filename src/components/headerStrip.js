import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const FixedHeaderStrip = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
      <Container className="justify-content-between">
        <Nav className="me-auto">
          <Nav.Link
            href="mailto:onlinetutorusa@gmail.com"
            className="text-white d-flex align-items-center"
          >
            <FaEnvelope className="me-2" /> ritik@mlsclasses.com
          </Nav.Link>
          <Nav.Link
            href="tel:+1234567890"
            className="text-white d-flex align-items-center"
          >
            <FaPhone className="me-2" /> +919649549754
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link
            href="https://facebook.com"
            target="_blank"
            className="text-white"
          >
            <FaFacebook />
          </Nav.Link>
          <Nav.Link
            href="https://twitter.com"
            target="_blank"
            className="text-white"
          >
            <FaTwitter />
          </Nav.Link>
          <Nav.Link
            href="https://instagram.com"
            target="_blank"
            className="text-white"
          >
            <FaInstagram />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default FixedHeaderStrip;
