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
            
            <div class="f-template-contact">
                <img src={first_img} alt="first Template" />
            </div>

            <div class="" data-aos="flip-up">
            <div class="our-programs-text main-content" >
              <div class="our-programs-subtext">
              <div className="f-template-contact" style={{width:"250px"}}>
                <img src={star_img}  alt="Star Template" />
            </div>
            Anchal got Full marks in her Physics exam. So thanks for tutoring. Really made lot of impact. 
              </div>
              <p className="our-programs-text-h" style={{fontWeight:"bold",marginTop: "12%",whiteSpace: "nowrap"}}> -Anchal’s Parents</p>
            </div>
          </div>

            {/* 2nd */}
            <div class="our-programs-text main-content" style={{background:"white"}} >
              <div class="our-programs-subtext">
              <div className="f-template-contact" style={{width:"250px",marginLeft:"100%"}}>
                <img src={star_img}  alt="Star Template" />
            </div>
            <br/>
            Ritik we are in Texas where the Indian hub is there & there are lots of in person coaching every street but we like your teaching and matches our frequency, 
            will wait for your availability. We can start coding & Math together. Looking forward thank you. 
              </div>
              <p className="our-programs-text-h" style={{fontWeight:"bold",marginTop: "12%",whiteSpace: "nowrap"}}> -Dhaitiri’s Mom</p>
            </div>

            {/* 3rd */}
            <div class="" data-aos="flip-up">
            <div class="our-programs-text main-content" >
              <div class="our-programs-subtext">
              <div className="f-template-contact" style={{width:"250px",marginLeft:"100%"}}>
                <img src={star_img}  alt="Star Template" />
            </div>
            <br/>
            Shreya scored 1390/1440 in PSAT with very little prep. The score was 99 percentile at national level.               </div>
              <p className="our-programs-text-h" style={{fontWeight:"bold",marginTop: "12%",whiteSpace: "nowrap"}}>Thank you -Shreya’s Parents </p>
            </div>
            </div>

            <div class="our-programs-text main-content" style={{background:"white"}}  >
              <div class="our-programs-subtext">
              <div className="f-template-contact" style={{width:"250px",marginLeft:"100%"}}>
                <img src={star_img}  alt="Star Template" />
            </div>
            <br/>
            I got my SAT scores today. I scored 1530. 750 in English and 780 in Math. Thank you so much MLS Classes.
              </div>
              <p className="our-programs-text-h" style={{fontWeight:"bold",marginTop: "12%",whiteSpace: "nowrap"}}>-Shyam.</p>
            </div>


            <div class="" data-aos="flip-up">
            <div class="our-programs-text main-content" >
              <div class="our-programs-subtext">
              <div className="f-template-contact" style={{width:"250px",marginLeft:"100%"}}>
                <img src={star_img}  alt="Star Template" />
            </div>
            <br/>
            I just wanted to say thank you Ritik for tutoring Sophia. I am very impress with the way you teach and communicate. Keep up the good work. 
                           </div>
              <p className="our-programs-text-h" style={{fontWeight:"bold",marginTop: "12%",whiteSpace: "nowrap"}}>-Sophia’s Mom </p>
            </div>
            </div>
            

            <Container>
                    <Row className="rows">
                        <div >
                            <Col md="12" xs="12" sm="12">
                                <h3 style={{textAlign: "center", color:"#007BFF", fontSize: "48px", lineHeight: "56.63px",fontFamily: "Abhaya Libre, serif"}}>
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
            <div class="contact-btn"><button>Book 1 Week Free Demo</button></div>
            <Footer />
        </div>
    );
}
export default StudentJob;