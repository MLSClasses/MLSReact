import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";

const FixedHeaderStrip = () => {
  return (
    <div className="topbar">
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="fixed-top mobile-strip"
      >
        <Container>
          <Row className="w-100 ">
            <Col
              xs={12}
              className="d-flex flex-column flex-md-row align-items-center justify-content-between"
            >
              <div className="d-flex">
                <Nav.Link
                  href="mailto:ritik@mlsclasses.com"
                  className="text-white d-flex align-items-center me-3"
                >
                  <FaEnvelope className="me-2" /> ritik@mlsclasses.com
                </Nav.Link>
                <Nav.Link
                  href="tel:+919649549754"
                  className="text-white d-flex align-items-center"
                >
                  <FaPhone className="me-2" /> +919649549754
                </Nav.Link>
              </div>
            </Col>
          </Row>
          <Row className="w-100 mt-2 d-none d-md-flex">
            <Col
              xs={12}
              className="d-flex justify-content-center justify-content-md-end align-items-center"
            >
              <Nav className="d-flex">
                <Nav.Link
                  href="https://wa.me/message/XMS5KMWBGQZLG1"
                  target="_blank"
                  className="text-white ms-md-2"
                >
                  <span style={{ color: "#ea9928", fontWeight: "bold" }}>
                    WhatsApp
                  </span>
                </Nav.Link>
                <Nav.Link
                  href="https://www.facebook.com/mlsclasses?mibextid=ZbWKwL"
                  target="_blank"
                  className="text-white ms-3"
                >
                  <FaFacebook />
                </Nav.Link>
                <Nav.Link
                  href="https://www.youtube.com/@mlsclasses8293?si=KBojcjPosvKjfwjH"
                  target="_blank"
                  className="text-white ms-3"
                >
                  <FaYoutube />
                </Nav.Link>
                <Nav.Link
                  href="https://www.instagram.com/mlsclasses_usa?igsh=djFpaHZhZm1zdHBl&utm_source=qr"
                  target="_blank"
                  className="text-white ms-3"
                >
                  <FaInstagram />
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};

export default FixedHeaderStrip;
