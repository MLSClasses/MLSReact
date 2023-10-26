import React from 'react';
import FooterComponent from '../components/footer';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const LandingPage = ({ source }) => {
     
    return (
        <>
        <Container id="accord-home" fluid={true} >

        <Row style={{width:"100%"}}>
          <Col md={12} sm={12} >
                <iframe width="100%" title='Landing Page' src="https://landing-pg1.netlify.app/"></iframe>
                </Col>
                </Row>
                </Container>
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
                When is the SAT Math Online Masterclass scheduled?
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className="acc-header"> Who is the instructor for the masterclass?</Accordion.Header>
                <Accordion.Body>
                : Ritik Mittal, an IIT Delhi Alumni from MLS Classes, will be conducting the SAT Math Online Masterclass.
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
                <p className='text-center'>You can get a free consultation with our dedicated SAT Counsellor - Give a call on +91 9649549754 , or enter your phone number to get a callback</p>
            </div>
            </div>
            </div>
            <FooterComponent></FooterComponent>
        
        </>
    );
};
export default LandingPage;
