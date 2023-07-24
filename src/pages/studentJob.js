import React, { Component } from 'react';
import AOS from 'aos';
import first_img from '../assets/img/temp10.png';
import star_img from '../assets/img/star.png';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { Container, Row, Col } from 'react-bootstrap';
const StudentJob = () => {

  AOS.init({
    offset: 200,
    duration: 600
  });
  return (
    <div>
      <Navbar />

      <div className="f-template-contact">
        <img src={first_img} alt="first Template" />
      </div>

      <div className="" data-aos="flip-up">
        <div className="our-programs-text main-content" >
          <div className="our-programs-subtext">
            <div className="f-template-contact" style={{ width: "200px" }}>
              <img src={star_img} alt="Star Template" />
            </div>
            <br />
            <div style={{ marginTop: "-10px" }}>
              Anchal got Full marks in her Physics exam. So thanks for tutoring. Really made lot of impact.
            </div>
          </div>
          <p className="our-programs-text-h" style={{ fontWeight: "bold", marginTop: "12%", whiteSpace: "nowrap" }}>-Anchal’s Parents </p>
        </div>
      </div>

      {/* 2nd */}
      <div className="our-programs-text main-content" style={{ background: "white" }} >
        <div className="our-programs-subtext">
          <div className="f-template-contact" style={{ width: "200px" }}>
            <img src={star_img} alt="Star Template" />
          </div>
          <br />
          <div style={{ marginTop: "-10px" }}>
            Ritik we are in Texas where the Indian hub is there & there are lots of in person coaching every street but we like your teaching and matches our frequency,
            will wait for your availability. We can start coding & Math together. Looking forward thank you.
          </div>
        </div>
        <p className="our-programs-text-h" style={{ fontWeight: "bold", marginTop: "10%", whiteSpace: "nowrap", marginRight: "25px" }}> -Dhaitiri’s Mom</p>
      </div>

      {/* 3rd */}

      <div className="" data-aos="flip-up">
        <div className="our-programs-text main-content" >
          <div className="our-programs-subtext">
            <div className="f-template-contact" style={{ width: "200px" }}>
              <img src={star_img} alt="Star Template" />
            </div>
            <br />
            <div style={{ marginTop: "-10px" }}>
              Shreya scored 1390/1440 in PSAT with very little prep. The score was 99 percentile at national level.
            </div>
          </div>
          <p className="our-programs-text-h" style={{ fontWeight: "bold", marginTop: "10%", whiteSpace: "nowrap" }}>-Shreya’s Parents </p>
        </div>
      </div>
      {/*4th*/}
      <div className="our-programs-text main-content" style={{ background: "white" }}  >
        <div className="our-programs-subtext">
          <div className="f-template-contact" style={{ width: "200px" }}>
            <img src={star_img} alt="Star Template" />
          </div>
          <br />
          <div style={{ marginTop: "-10px" }}>
            I got my SAT scores today. I scored 1530. 750 in English and 780 in Math. Thank you so much MLS Classes.
          </div>
        </div>
        <p className="our-programs-text-h" style={{ fontWeight: "bold", marginTop: "10%", whiteSpace: "nowrap", marginRight: "15px" }}>-Shyam.</p>
      </div>

      {/*5th*/}
      <div className="" data-aos="flip-up">
        <div className="our-programs-text main-content" >
          <div className="our-programs-subtext">
            <div className="f-template-contact" style={{ width: "200px" }}>
              <img src={star_img} alt="Star Template" />
            </div>
            <br />
            <div style={{ marginTop: "-10px" }}>
              I just wanted to say thank you Ritik for tutoring Sophia. I am very impress with the way you teach and communicate. Keep up the good work.
            </div>
          </div>
          <p className="our-programs-text-h" style={{ fontWeight: "bold", marginTop: "10%", whiteSpace: "nowrap", marginRight: "15px" }}>-Sophia’s Mom </p>
        </div>
      </div>


      <Container>
        <Row className="rows">
          <div >
            <Col md="12" xs="12" sm="12">
              <h3 style={{ textAlign: "center", color: "#007BFF", fontSize: "48px", lineHeight: "56.63px", fontFamily: "Abhaya Libre, serif" }}>
                "Experience the Joy of Learning:
                Join Countless Happy Students and Parents"
              </h3>
            </Col>
          </div>
        </Row>
      </Container>
      <Container></Container>
      <Row className="rows"></Row>
      <Row className="rows"></Row>
      <div className="contact-btn"><button>Book 1 Week Free Demo</button></div>
      <Footer />
    </div >
  );
}
export default StudentJob;