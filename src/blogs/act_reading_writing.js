import React, { Component } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../assets/css/program.css";
import { Helmet } from 'react-helmet';
import { Row, Col, Accordion } from "react-bootstrap";
const ACT_READING_WRITING = (props) => {
  return (
    <div>
      <Navbar />
      <Helmet>
        <meta name="google-site-verification" content="bhOOEzJ-8aaGF_FM3O7nKH4GgUpXIhIk0kr_tPC9FTY" />
        <meta name="title" content="	Live 1:1 Online Classes for Kids(Grade 2-12) & Adults in USA | MLS Classes" />
        <meta name="description" content="MLS Classes offers Live, Online Math, English, Science, Coding, SAT, ACT, AP, SSAT, STAAR, and AMC classes for students in grades 2-12 & for adults in USA. The programs of MLyour cheld's academic progress, programs, GUARANTEED. Book a FREE TRIAL now!ress, programs, GUARANTEED. Book a FREE TRIAL now!"/>
        <meta name="keywords" content="MLS Classes offers Live, Online Math, English, Science, Coding, SAT, ACT, AP, SSAT, STAAR, and AMC classes for students in grades 2-12. The programs of MLS Classes are specifically designed to accelerate your child's academic progress, programs, GUARANTEED.| MLS Classes
"/>
        <meta name="robots" content="index, follow" />
        <title>	Live 1:1 Online Classes for Kids(Grade 2-12) & Adults in USA | MLS Classes</title>
      </Helmet>
      <div class="f-template-contact">
        <img src={props.banner_img} alt="first Template" />
        {/* <h2 class="our-program-h">Our Program</h2> */}
      </div>
      <div>
        <div className="mainsection" style={{ marginTop: "5%" }}>
            <h1 style={{textAlign:"center"}}>{props.headingText}</h1>
          <Row>
            <Col md={12} sm={12} xs={12}>
              {props.mainContent.map(data=>
              <Accordion className="work" defaultActiveKey="0" id="high">
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ background: "white" }}>
                    {" "}
                    <h1 className="rowsDesc">
                      {data.title}
                    </h1>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={12}>
                        {/* <ul className="Desc">
                          <li>Pre-Algebra</li>
                        </ul> */}
                        <p>{data.content}</p>
                      </Col>
                      <br />
                      <hr />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>)}
            </Col>
          </Row>
        </div>
          <div style={{ marginTop: "5%" }}> 

          <h3 style={{textAlign:"center"}}>Conclusion:<br/>
          {props.conclusion}</h3>
           </div>

           {props.feedback && <div style={{ marginTop: "5%" }}> 

          <h3 style={{textAlign:"center"}}>Student Feedback:<br/>
Testimonials from Happy Students of MLS Classes' SAT Test Prep Tutoring

Student 1 - Emma:
""I can't thank MLS Classes enough for their incredible SAT Test Prep tutoring. The tutors were not only knowledgeable but also patient in explaining complex concepts. The personalized study plan helped me focus on my weak areas, and the practice tests were spot-on for simulating the real exam experience. Thanks to MLS Classes, I achieved a score I previously thought was out of reach!""

Student 2 - Alex:
""Enrolling in MLS Classes' SAT Test Prep program was a game-changer for me. The tutors were exceptional in breaking down each section, providing tips and strategies that truly worked. The practice materials were extensive, and the detailed feedback I received after each practice test was invaluable. I felt confident and well-prepared on test day, all thanks to MLS Classes.""

Student 3 - Maya:
""I was initially overwhelmed by the thought of preparing for the SAT, but MLS Classes made the journey incredibly smooth. Their tutors had a knack for simplifying complex topics, making them easy to understand. The emphasis on time management during the test was particularly helpful. I not only improved my SAT score but also gained valuable skills that will serve me well in college.""

Student 4 - Ethan:
""MLS Classes' SAT Test Prep tutoring exceeded my expectations. The tutors went beyond teaching content – they shared insightful strategies that boosted my confidence and efficiency during the exam. The practice tests accurately reflected the real SAT, and the progress tracking kept me motivated. Thanks to MLS Classes, I was able to achieve my desired score and secure admission to my dream college.""

Student 5 - Ava:
""I can't thank MLS Classes' tutors enough for their dedication and support. The SAT Test Prep program was well-structured, covering all aspects of the exam. The tutors were approachable and always ready to address my doubts. The mock tests were a true reflection of the actual exam, and the feedback helped me fine-tune my approach. I'm grateful to MLS Classes for making my SAT preparation journey a success.""

Conclusion:
The testimonials from these satisfied students highlight the effectiveness of MLS Classes' SAT Test Prep tutoring. The program's personalized approach, expert tutors, comprehensive study materials, and focus on practical strategies have consistently led to improved scores and heightened confidence among students. With MLS Classes' guidance, students have not only conquered the SAT but also gained valuable skills for their academic journey ahead.
          </h3>
           </div>}
      </div>
      <Footer />
    </div>
  );
};
export default ACT_READING_WRITING;
