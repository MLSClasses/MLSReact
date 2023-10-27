import React from 'react';
import FooterComponent from '../components/footer';
// import "../assets/css/landing_page.css";
// import "../assets/css/lp.css";
import profile from '../assets/img/profile.jpeg';

import Navbar from "../components/navbar";

import { Accordion, Col, Container, Nav, Row } from 'react-bootstrap';

const LandingPage = ({ source }) => {
     
    return (
        <>
        <Navbar/>
        <iframe src='https://landing-pg1.netlify.app/' ></iframe>
      
        {/* <Container id="accord-home" fluid={true} >

        <Row style={{width:"100%"}}>
          <Col md={12} sm={12} >
          <body>
  <div id="__next" data-reactroot="">
    <div class="jss1">
    <Navbar />
      <section class="jss18 jss2">
        <div class="MuiContainer-root MuiContainer-maxWidthLg css-1qsxih2" style={{padding:"40px"}}>

          <div class="wrapper">
            <p class="MuiTypography-root MuiTypography-body1 jss19 css-1kgpy80" style={{marginBottom:"8px"}}>
              Webinar Date : Saturday; 18th November, 2023, 6 pm - 9 pm IST</p>
            <p class="MuiTypography-root MuiTypography-body1 jss20 css-1kgpy80"
              style={{marginBottom:"16px",maxWidth:"580px"}}>The Complete Digital SAT MATH Live Masterclass
            </p>
            <p class="MuiTypography-root MuiTypography-body1 jss21 css-1kgpy80"
              style={{marginBottom:"24px",lineHeight:"1.5"}}>Dominate the SAT: SAT Math Tips & Tricks, Proven strategies, elite
              instruction,laser-focused practice, and unmatched results.</p>
            <p class="MuiTypography-root MuiTypography-body1 jss22 instructors css-1kgpy80" style={{marginBottom:"32px"}}>
              Instructors: <a href="#">Ritik Mittal IIT Delhi Alumni</a></p>
          </div>
        </div>
      </section>
      <section>
        <div class="MuiContainer-root MuiContainer-maxWidthLg css-1qsxih2" style={{display:"flex",padding:"25px"}}>
          <div class="wrapper">
            <p class="MuiTypography-root MuiTypography-body1 jss26 css-1kgpy80">Instructors</p>
            <div class="jss27">
              <div style={{display:"flex"}}><img src={profile} class="profileImg" alt="instructor_profile_pic" />
                <div class="profileInfo">
                  <div class="studies">
                    <p class="MuiTypography-root MuiTypography-body1 header css-1kgpy80">Ritik Mittal, IIT Delhi Alumni, Founder of MLS Classes</p>
                    <p class="MuiTypography-root MuiTypography-body1 css-1kgpy80">BTech/Mtech</p>
                    <p class="MuiTypography-root MuiTypography-body1 css-1kgpy80">IIT Delhi</p>
                  </div>
                  <p class="MuiTypography-root MuiTypography-body1 css-1kgpy80" style={{maxWidth:"210px"}}>4+ years of
                    teaching experience.
                    SAT Math Expert</p>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </section>
    
 
      </div>
      </div>
      </body>
      </Col>
      </Row>
      </Container> */}
  
            
                <div className='col-md-12'>
                <h2 className="acc-section">
        Common Faqs </h2>
      <Container id="accord-home" fluid={false}>

        <Row>
          <Col md={12} sm={12}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="acc-header">When is the SAT Math Online Masterclass scheduled?</Accordion.Header>
                <Accordion.Body>
                The masterclass is scheduled for November 18th from 6:00 PM to 9:00 PM.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className="acc-header"> Who is the instructor for the masterclass?</Accordion.Header>
                <Accordion.Body>
                 Ritik Mittal, an IIT Delhi Alumni from MLS Classes, will be conducting the SAT Math Online Masterclass.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header className="acc-header" >What topics will be covered during the masterclass?</Accordion.Header>
                <Accordion.Body>
                The masterclass will cover a comprehensive range of topics tested in the SAT Math section, ensuring participants are well-prepared for the exam.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header className="acc-header">How much is the registration fee for the SAT Math Online Masterclass?</Accordion.Header>
                <Accordion.Body>
                The registration fee for the masterclass is just 199 INR.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header className="acc-header">Is the masterclass suitable for all skill levels?</Accordion.Header>
                <Accordion.Body>
                Yes, the masterclass is tailored for various skill levels. Participants can expect personalized guidance based on their proficiency in SAT Math.
                </Accordion.Body>
                <Accordion.Item eventKey="6">
                  <Accordion.Header className="acc-header"> How do I register for the masterclass?</Accordion.Header>
                  <Accordion.Body>
                  You can register for the SAT Math Online Masterclass by visiting our website and following the registration instructions provided.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header className="acc-header"> Is the masterclass suitable for international participants?</Accordion.Header>
                  <Accordion.Body>
                  Absolutely! The SAT Math Online Masterclass is open to participants from all around the world.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header className="acc-header">How can I pay the registration fee?</Accordion.Header>
                  <Accordion.Body>
                  You can pay the registration fee through our secure online payment gateway, which accepts various payment methods for your convenience.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

      </Container>
             
            <div >
         
            <h2 className="acc-section">
            Talk to our experts</h2>
            <div>
                <p className='text-center'>You can get a free consultation with our dedicated SAT Counsellor - Give a call on +91 9649549754</p>
            </div>
            </div>
            </div>
            <FooterComponent></FooterComponent>
        </>
    );
};
export default LandingPage;
