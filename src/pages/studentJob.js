import React, { Component } from "react";
import AOS from "aos";
import first_img from "../assets/img/temp10.png";
import star_img from "../assets/img/star.png";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Container, Row, Col } from "react-bootstrap";
import Whatsapp_icon from "../components/whatsapp_icon";
import Mobile_Navbar from "../components/mobile_navbar";
const stars = (num) => {
  const stars_arr = [];
  for (let i = 0; i < num; i++) {
    stars_arr.push(<span class="star">&#9733;</span>);
  }
  return stars_arr;
};
const comment = (comment, name, stars_arr) => {
  return (
    <div class="comment-box">
      <div class="comment-header">
        <span class="commenter-name">{name}</span>
        <div class="star-rating">{stars(stars_arr)}</div>
      </div>
      <div class="comment-content">
        <p>{comment}</p>
      </div>
    </div>
  );
};
const StudentJob = () => {
  AOS.init({
    offset: 200,
    duration: 600,
  });
  return (
    <div>
      <Whatsapp_icon />
      <Navbar />

      <div class="f-template-contact">
        <img src={first_img} alt="first Template" />
      </div>
      <div data-aos="flip-up">
        {comment(
          "Anchal got Full marks in her Physics exam. So thanks for tutoring. Really made lot of impact.",
          "Anchal's Parents",
          5
        )}
      </div>
      <div data-aos="flip-up">
        {comment(
          "Ritik we are in Texas where the Indian hub is there & there are lots of in person coaching every street but we like your teaching and matches our frequency, will wait for your availability. We can start coding & Math together. Looking forward thank you.",
          "Dhaitiri's Mom",
          5
        )}
      </div>
      <div data-aos="flip-up">
        {comment(
          "Shreya scored 1390/1440 in PSAT with very little prep. The score was `99 percentile at national level.",
          "Shreya's Parents",
          5
        )}
      </div>
      <div data-aos="flip-up">
        {comment(
          "I got my SAT scores today. I scored 1530. 750 in English and 780 in Math. Thank you so much MLS Classes.",
          "Shyam",
          5
        )}
      </div>
      <div data-aos="flip-up">
        {comment(
          "I just wanted to say thank you Ritik for tutoring Sophia. I am very impress with the way you teach and communicate. Keep up the good work.",
          "Sophia's Mom",
          5
        )}
      </div>
      <Container>
        <Row className="rows">
          <div>
            <Col md="12" xs="12" sm="12">
              <h3
                style={{
                  textAlign: "center",
                  color: "#007BFF",
                  fontSize: "48px",
                  lineHeight: "56.63px",
                  fontFamily: "Abhaya Libre, serif",
                }}
              >
                "Experience the Joy of Learning: Join Countless Happy Students
                and Parents"
              </h3>
            </Col>
          </div>
        </Row>
      </Container>
      <Container></Container>
      <Row className="rows"></Row>
      <Row className="rows"></Row>
      <div class="contact-btn">
        <button>Book 1 Week Free Demo</button>
      </div>
      <Footer />
    </div>
  );
};
export default StudentJob;
