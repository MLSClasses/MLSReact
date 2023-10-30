import React,{useState} from 'react';
import FooterComponent from '../components/footer';

// import "../assets/css/landing_page.css";
import "../assets/css/footer.css";
import scanner from '../assets/img/scan.jpeg';

import Navbar from "../components/navbar";

import { Accordion, Col, Container, Nav, Row,Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        SAT MATH Live Masterclass
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
      <p>Pay us on UPI ID: <b>9079476942@ybl</b> &nbsp;
        or 
        You can scan and pay us on below scanner!
      </p>
        <br/>
        <b>Only 299 INR + 18% GST = 352.82 INR </b>
        <img src={scanner} width="auto" height="500"></img>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const LandingPage = ({ source }) => {
  const [modalShow, setModalShow] = useState(false);

    return (
        <>
        <Navbar/>
        <iframe src='https://landing-pg1.netlify.app/' ></iframe>
      
       
    
            
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
                The registration fee for the masterclass is just 299 INR.
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
            <div className='st-footer'>
            <div style={{float:"left"}}>
            
             <b>Only 299 INR + 18% GST = 352.82 INR </b>
            
            <Button variant="light" onClick={() => setModalShow(true)}>Pay Now</Button>
            </div>
            <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
            </div>
            <FooterComponent></FooterComponent>
        </>
    );
};
export default LandingPage;
