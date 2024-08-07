import React from "react";
import "../assets/css/pricing.css";
import Footer from "../components/footer";
import Navbar from "../components/topbar";
import AOS from "aos";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { Helmet } from 'react-helmet';
import { img12 } from "./mls_constants";
import NavbarPage from "../navbarComponent";

const Pricing = () => {
  AOS.init({
    offset: 200,
    duration: 600,
  });
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contactus");
  };
  const handleClick2 = () => {
    // Simulate navigation using window.location.href
    window.open("https://wa.me/message/XMS5KMWBGQZLG1", '_blank');
  }
  const FreeClassButton = () => {
    return (
      <div class="free_class">
        <button onClick={handleClick}>Book 1 Week Free Class</button>
      </div>
    );
  };
  return (
    <div>
      {/* {<Mobile_Navbar />}
      <Whatsapp_icon /> */}
      <NavbarPage />
      <Helmet>
        <meta name="google-site-verification" content="bhOOEzJ-8aaGF_FM3O7nKH4GgUpXIhIk0kr_tPC9FTY" />
        <meta name="title" content="MLS Classes Online tutoring price of Math, English, Science, Coding, SAT, ACT, AP, SSAT, STAAR & AMC Classes | MLS Classes" />
        <meta name="description" content="MLS Classes offers Live, Online Math, English, Science, Coding, SAT, ACT, AP, SSAT, STAAR, and AMC classes for students in grades 2-12. The programs of MLS Classes are specifically designed to accelerate your child's academic progress, programs, GUARANTEED | MLS Classes
"/>
        <meta name="keywords" content="MLS Classes offers Live, Online Math, English, Science, Coding, SAT, ACT, AP, SSAT, STAAR, and AMC classes for students in grades 2-12. The programs of MLS Classes are specifically designed to accelerate your child's academic progress, programs, GUARANTEED.| MLS Classes
"/>
        <meta name="robots" content="index, follow" />
        <title>MLS Classes Online tutoring price of Math, English, Science, Coding, SAT, ACT, AP, SSAT, STAAR & AMC Classes | MLS Classes
        </title>
      </Helmet>
      <div className="f-template">
        <img src={img12} alt="first Template" className="img-fluid" />
      </div>
      <div className="bookFree">
        <h3 onClick={handleClick}>Book a free Demo Now | MLS Classes</h3>
      </div>
      <br />
      <br />
      <br />
      <div className="white">
        <Container fluid>
          <Row>
            <Col md="12" sm="12" xs="12">
              <div className="find-live">
                {/* <div className="joinMLS">
                  <a href="#">
                    Join us at MLS Classes and unlock your child's true
                    potential. <br />
                    Enroll today and witness their academic journey soar to new
                    heights.
                  </a>
                </div> */}
                <div>
                  <h3 className="container-desc">
                    Join us at MLS Classes and unlock your child's true
                    potential
                    Enroll today and witness their academic journey soar to new
                    heights.
                  </h3>
                </div>
                <br />
                <div className="boxx1">
                  <FreeClassButton />
                  <br />
                </div>
              </div>
              <div>
                <h3 className="container-desc">
                  Unlock the Power of Comprehensive Learning with a Single
                  Subscription - Including Test Preparation!
                </h3>
              </div>
              <br />
              <br />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="white">
        <Container>
          <Row>
            <Col sm="1" md="1" xs="12">
              {/* <div className="random1">
                <h4 style={{ display: "flex", justifyContent: "center" }}>
                  $750/50hrs (62500 INR/50hrs)
                  <br />
                  $15/hr (1250 INR/hrs)
                </h4>
              </div> */}
            </Col>
            <Col md="10" xs="12" sm="10">
              <div className="deets">
                <div className="box">
                  <ul>
                    1. 🌟 1-on-1 Expert Classes<br />
                    2. 🎥 Recorded Sessions<br />
                    3. 📝 Comprehensive Class Notes<br />
                    4. 🤝 Parent-Teacher Conferences<br />
                    5. 📚 School Topic Assistance<br />
                    6. 🧪 Regular Tests for Progress<br />
                    7. 📱 On-Demand Classes Available<br />
                    8. 📚 Extra Classes During Exams<br />
                    9. 🤖 AI-Powered Homework Platform<br />
                    10. 🕒 Flexible Class Schedule<br />
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <div className="boxx">
            <FreeClassButton />
          </div>
          <br />
          <br />
          <Row>
            <Col sm="1" md="1" xs="12">
              {/* <div className="random1">
                <h4 style={{ display: "flex", justifyContent: "center" }}>
                  $1350/100hrs (112500 INR/100hrs)
                  <br />
                  $13.5/hr (1125 INR/hrs)
                </h4>
              </div> */}
            </Col>
            <Col sm="10" md="10" xs="12">
              <div className="deets">
                <div className="box">
                  <ul style={{ width: "80%" }} className="LowerBox">

                    🌟 Class Pricing: Ranging from just <b>$15 to $25 per hour</b>, our rates vary depending on the course you choose.

                    For the best and most personalized pricing options, reach out to us directly.
                    <br />
                    <br />
                    📲 <b>Contact Us on WhatsApp</b >:
                    {/* <a href="https://wa.me/message/XMS5KMWBGQZLG1"> Click here</a>Message us at <br />+91 9649549754 for more details and special offers */}
                    For more details and special offers message us at 9649549754 or <b>Click on the button below</b>
                    <br /><button type="button" className="btn btn-warning" onClick={handleClick2}>Whatsapp</button>

                  </ul>

                  {/* <ul>
                    1. 🌟 1-on-1 Expert Classes<br />
                    2. 🎥 Recorded Sessions<br />
                    3. 📝 Comprehensive Class Notes<br />
                    4. 🤝 Parent-Teacher Conferences<br />
                    5. 📚 School Topic Assistance<br />
                    6. 🧪 Regular Tests for Progress<br />
                    7. 📱 On-Demand Classes Available<br />
                    8. 📚 Extra Classes During Exams<br />
                    9. 🤖 AI-Powered Homework Platform<br />
                    10. 🕒 Flexible Class Schedule<br />
                  </ul> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div >
  );
};
export default Pricing;
