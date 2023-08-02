import React, { Component } from "react";
import "../assets/css/pricing.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AOS from "aos";
import { Container, Row, Col } from "react-bootstrap";
//images
import img1 from "../assets/img/temp5.png";
import logo from "../assets/img/mlslogo.png";
import b1 from "../assets/img/b1.png";
import b2 from "../assets/img/b2.png";
import b3 from "../assets/img/b3.png";
import gr from "../assets/img/gr.png";
import pos from "../assets/img/ppostion.png";
import Whatsapp_icon from "../components/whatsapp_icon";
import Mobile_Navbar from "../components/mobile_navbar";
const Pricing = () => {
  AOS.init({
    offset: 200,
    duration: 600,
  });
  return (
    <div>
      {/* {<Mobile_Navbar />}
      <Whatsapp_icon /> */}
      <div className="f-template">
        <img src={img1} alt="first Template" className="img-fluid" />
      </div>
      <div className="bookFree">
        <h1>Book free Trial Now</h1>
      </div>
      <br /><br /><br />
      <div className="white">
        <Container fluid>
          <Row>
            <Col md="12" sm="12" xs="12">
              <div className="find-live">
                <div className="joinMLS">
                  <a href="#">
                    Join us at MLS Classes and unlock your child's true
                    potential. <br />
                    Enroll today and witness their academic journey soar to new
                    heights.
                  </a>
                </div>
                <br />
                <div className="boxx1">
                  <div className="width-line-space">
                    <h3>Book 1 Week Free Trial</h3>
                  </div>
                  <br />
                </div>
              </div>
              <div>
                <h3 className="container-desc">
                  Unlock the Power of Comprehensive Learning with a Single
                  Subscription – Including Test Preparation!
                </h3>
              </div>
              <br /><br />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="white">
        <Container>
          <Row>
            <Col sm="1" md="1" xs="12">
              <div className="random1">
                <h4>
                  $750/50hrs
                  <br />
                  $15/hr
                </h4>
              </div>
            </Col>
            <Col md="10" xs="12" sm="10">
              <div className="deets">
                <div className="box">
                  <ul>
                    <li>1:1 highly interactive and personalized sessions</li>
                    <li>Homework and assignments after every session</li>
                    <li>Monthly quizzes and tests</li>
                    <li>Parent-Teacher Meetings (PTMs) every month</li>
                    <li>Class notes provided after every session</li>
                    <li>Class recording available for review</li>
                    <li>Flexible class schedule to accommodate your needs</li>
                    <li>Extra classes offered during exam times</li>
                    <li>
                      24x7 doubt support available for continuous assistance
                    </li>
                    <li>
                      Utilize AI-powered platforms to monitor and assess your
                      progress effectively.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <div className="boxx">
            <div className="width-line-space">
              <h3>Book 1 Week Free Trial</h3>
            </div>
          </div>
          <br />
          <br />
          <Row>
            <Col sm="1" md="1" xs="12">
              <div className="random1">
                <h4>
                  $1350/100hrs
                  <br />
                  $.13.5/hr
                </h4>
              </div>
            </Col>
            <Col sm="10" md="10" xs="12">
              <div className="deets">
                <div className="box">
                  <ul>
                    <li>1:1 highly interactive and personalized sessions</li>
                    <li>Homework and assignments after every session</li>
                    <li>Monthly quizzes and tests</li>
                    <li>Parent-Teacher Meetings (PTMs) every month</li>
                    <li>Class notes provided after every session</li>
                    <li>Class recording available for review</li>
                    <li>Flexible class schedule to accommodate your needs</li>
                    <li>Extra classes offered during exam times</li>
                    <li>
                      24x7 doubt support available for continuous assistance
                    </li>
                    <li>
                      Utilize AI-powered platforms to monitor and assess your
                      progress effectively.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <div className="boxx">
            <div className="width-line-space">
              <h3>Book 1 Week Free Trial</h3>
            </div>
          </div>
          <br />
          <br />
          <Row>
            <Col sm="1" md="1" xs="12">
              <div className="random1">
                <h4>
                  $2500/200hrs
                  <br />
                  $.12.5/hr
                </h4>
              </div>
            </Col>
            <Col sm="10" md="10" xs="12">
              <div className="deets">
                <div className="box">
                  <ul>
                    <li>1:1 highly interactive and personalized sessions</li>
                    <li>Homework and assignments after every session</li>
                    <li>Monthly quizzes and tests</li>
                    <li>Parent-Teacher Meetings (PTMs) every month</li>
                    <li>Class notes provided after every session</li>
                    <li>Class recording available for review</li>
                    <li>Flexible class schedule to accommodate your needs</li>
                    <li>Extra classes offered during exam times</li>
                    <li>
                      24x7 doubt support available for continuous assistance
                    </li>
                    <li>
                      Utilize AI-powered platforms to monitor and assess your
                      progress effectively.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <div className="boxx">
            <div className="width-line-space">
              <h3>Book 1 Week Free Trial</h3>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div >
  );
};
export default Pricing;
