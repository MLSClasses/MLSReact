import React, { Component } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../assets/css/program.css";
import { Helmet } from 'react-helmet';
import { Link } from "react-scroll";
// import { Link, useLocation } from 'react-router-dom';

import { Container, Row, Col, Accordion, Image } from "react-bootstrap";

import { b1, b2, b3, clgg, hgs, img1, it_img } from "./mls_constants";
const Programs = () => {
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
        <img src={img1} alt="first Template" />
        {/* <h2 class="our-program-h">Our Program</h2> */}
      </div>
      <div className="main-prg">
        <div className="btn">
          <Link to="high" smooth={true} duration={500} className="yo">
            <h3>High School/ Middle School </h3>
          </Link>
        </div>
        <div className="btn">
          <Link to="elementary" smooth={true} duration={500} className="yo">
            <h3>Elementary </h3>
          </Link>
        </div>
        <div className="btn">
          <Link to="test" smooth={true} duration={500} className="yo">
            <h3>Test Prep </h3>
          </Link>
        </div>
        <div className="btn">
          <Link to="test" smooth={true} duration={500} className="hobby">
            <h3>Hobby Classes </h3>
          </Link>
        </div>
        <div className="btn">
          <Link to="elementary" smooth={true} duration={500} className="study">
            <h3>Study Abroad </h3>
          </Link>
        </div>
        <div className="btn">
          <Link to="it" smooth={true} duration={500} className="yo">
            <h3>IT </h3>
          </Link>
        </div>
        
        <div className="btn">
          <Link to="college" smooth={true} duration={500} className="yo">
            <h3>College </h3>
          </Link>
        </div>
        <div className="mt-10-nav-login-btn">
          <p1 style={{ marginLeft: "23%" }}>2 - 12</p1>
        </div>
        <div className="mainsection" style={{ marginTop: "5%", padding:"5%" }}>
          <Row>
            <Col md={12} sm={12} xs={12} class="container">
              <Accordion className="work" defaultActiveKey="0" id="high">
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ background: "white" }}>
                    {" "}
                    <h1 className="rowsDesc">
                      <span>
                        <Image
                          src={hgs}
                          alt="img"
                          className="img-fluid"
                          width="40"
                          style={{ marginTop: "-20px" }}
                          fluid
                        />
                      </span>{" "}
                      High School/Middle School
                      {

                      }
                    </h1>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={6}>
                        <ul className="Desc">
                          <li>Pre-Algebra</li>
                          <li>Algebra 1</li>
                          <li>Algebra 2</li>
                          <li>Trigonometry</li>
                          <li>Geometry</li>
                          <li>Precalculus</li>
                          <li>Calculus</li>
                          <li>Statistics</li>
                          <li>Integrated Math 1</li>
                          <li>Integrated Math 2</li>
                          <li>Integrated Math 3</li>
                        </ul>
                      </Col>
                      <br />
                      <Col md={6}>
                        <ul className="Desc1">
                          <li>Physics </li>
                          <li>Chemistry</li>
                          <li>Biology</li>
                          <li>Science</li>
                          <li>Life Science</li>
                          <li>Earth Science</li>
                          <li>Creative Writing</li>
                          <li>Reading Comprehension</li>
                          <li>Grammar</li>
                          <li>Writing</li>
                        </ul>
                      </Col>
                      <hr />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion className="work" defaultActiveKey="0" id="elementary">
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ background: "white" }}>
                    {" "}
                    <h3 className="rowsDesc">
                      <span>
                        <Image
                          src={hgs}
                          alt="img"
                          className="img-fluid"
                          width="40"
                          style={{ marginTop: "-20px" }}
                          fluid
                        />
                      </span>{" "}
                      Elementary
                      {

                      }
                    </h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={6}>
                        <ul className="Desc">
                          <li>Math</li>
                          <li>Science</li>
                          <li>Grammar and Writing</li>
                          <li>Reading Comprehension</li>
                        </ul>
                      </Col>
                      <hr />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              {/* 2nd */}
              <Accordion className="work" defaultActiveKey="1" id="test">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <h3 className="rowsDesc">
                      <span>
                        <img
                          src={b2}
                          alt="img"
                          className="img-fluid"
                          width="40"
                          style={{ marginTop: "-20px" }}
                        />
                      </span>{" "}
                      Test Prep
                      {
                        
                      }
                    </h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={6}>
                        <Accordion defaultActiveKey="1">
                          <Accordion.Item eventKey="1"></Accordion.Item>
                          <Accordion.Header>
                            <p className="rowsDesc">
                              SAT{" "}
                              {/* <img
                                alt="SAT"
                                src={arrow_img}
                                className="arrow_down"
                              /> */}
                            </p>{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul className="Desc">
                            <a href="sat_workshop" className="link-tag"><li>SAT</li></a>
                              <a href="sat_math" className="link-tag"><li>SAT Math</li></a>
                              <a href="sat_reading_writing" className="link-tag"><li>SAT Reading & Writing</li></a>
                            </ul>
                          </Accordion.Body>
                        </Accordion>

                        <Accordion defaultActiveKey="1">
                          <Accordion.Item eventKey="1"></Accordion.Item>
                          <Accordion.Header>
                            <p className="rowsDesc">
                              PSAT{" "}
                            </p>{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul className="Desc">
                              <li>PSAT 8/9</li>
                              <li>PSAT 10</li>
                              <li>PSAT/NMSQT</li>
                            </ul>
                          </Accordion.Body>
                        </Accordion>
                      </Col>
                      <Col md={6}>
                        <Accordion defaultActiveKey="1">
                          <Accordion.Item eventKey="1"></Accordion.Item>
                          <Accordion.Header>
                            <p className="rowsDesc">
                              ACT{" "}
                            </p>{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul className="Desc">
                            <a href="/act_math" className="link-tag"><li>ACT Math</li></a>
                              <a href="/act_english" className="link-tag"> <li>ACT English</li></a>
                              <a href="/act_science" className="link-tag"><li>ACT Science</li></a>
                              <a href="/act_reading_writing" className="link-tag"><li>ACT Reading and Writing</li></a>
                            </ul>
                          </Accordion.Body>
                        </Accordion>
                      </Col>
                      <Col md={6}>
                        <Accordion defaultActiveKey="1">
                          <Accordion.Item eventKey="1"></Accordion.Item>
                          <Accordion.Header>
                            <p className="rowsDesc">
                              AP{" "}
                              {/* <img
                                alt="AP"
                                src={arrow_img}
                                className="arrow_down"
                              /> */}
                            </p>{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul className="Desc">
                              <li>AP Precalculus</li>
                              <li>AP Calculus AB</li>
                              <li>AP Calculus BC</li>
                              <li>AP Statistics</li>
                              <li>AP Physics 1 & 2</li>
                              <li>AP Physics C: Electricity and Magnetism</li>
                              <li>AP Physics C: Mechanics</li>
                              <li>AP Chemistry</li>
                              <li>AP Biology</li>
                              <li>AP Environmental Science</li>
                              <li>AP Computer Science A</li>
                              <li>AP English Literature and Composition</li>
                              <li>AP Microeconomics</li>
                              <li>AP Macroeconomics</li>
                            </ul>
                          </Accordion.Body>
                        </Accordion>
                      </Col>
                      <hr />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              
              <Accordion className="work" defaultActiveKey="0" id="hobby">
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ background: "white" }}>
                    {" "}
                    <h3 className="rowsDesc">
                      <span>
                        <Image
                          src={hgs}
                          alt="img"
                          className="img-fluid"
                          width="40"
                          style={{ marginTop: "-20px" }}
                          fluid
                        />
                      </span>{" "}
                      Hobby Classes
                      {

                      }
                    </h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={6}>
                        <ul className="Desc">
                        <li>Chess</li>
                        <li>Music ( Guitar, Piano & Keyboard, Violin ) </li>
                        <li>Dance</li>
                        <li>Art & Craft</li>
                        <li>Public Speaking</li>
                        </ul>
                      </Col>
                      <hr />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion className="work" defaultActiveKey="0" id="study">
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ background: "white" }}>
                    {" "}
                    <h3 className="rowsDesc">
                      <span>
                        <Image
                          src={hgs}
                          alt="img"
                          className="img-fluid"
                          width="40"
                          style={{ marginTop: "-20px" }}
                          fluid
                        />
                      </span>{" "}
                      Study Abroad
                      {

                      }
                    </h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={6}>
                        <ul className="Desc">
                          <li>GMAT</li>
                          <li>GRE</li>
                          <li>ielts</li>
                          <li>TOEFL</li>
                          <li>Overseas consultant</li>
                        </ul>
                      </Col>
                      <hr />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
             


              <Accordion className="work" defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ background: "white" }}>
                    {" "}
                    <h3 className="rowsDesc">
                      <span>
                        <Image
                          src={b2}
                          alt="img"
                          className="img-fluid"
                          width="40"
                          style={{ marginTop: "-20px" }}
                          fluid
                        />
                      </span>{" "}
                      Other Test Prep
                      {

                      }
                    </h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={12}>
                        <ul className="Desc">
                          <li>AMC 8</li>
                          <li>AMC 10</li>
                          <li>SSAT</li>
                          <li>STAAR</li>
                          <li>MATHCOUNTS</li>
                          <li>TERRANOVA</li>
                        </ul>
                      </Col>
                      <hr />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion className="work" defaultActiveKey="0" id="it">
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ background: "white" }}>
                    {" "}
                    <h3 className="rowsDesc">
                      <span>
                        <Image
                          src={it_img}
                          alt="img"
                          className="img-fluid"
                          width="40"
                          style={{ marginTop: "-20px" }}
                          fluid
                        />
                      </span>{" "}
                      IT
                      {

                      }
                    </h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={12}>
                        <ul className="Desc">
                          <li>Java</li>
                          <li>Python</li>
                          <li>Scratch</li>
                          <li>Robotics</li>
                          <li>C++ Programming</li>
                          <li>C Programming</li>
                          <li>HTML and Web Development</li>
                        </ul>
                      </Col>
                      <hr />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              {/* 4rd  */}
              <Accordion className="work" defaultActiveKey="3" id="college">
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    {" "}
                    <h3 className="rowsDesc">
                      <span>
                        <img
                          src={clgg}
                          alt="img"
                          className="img-fluid"
                          width="40"
                          style={{ marginTop: "-20px" }}
                        />
                      </span>{" "}
                      College
                      {
                        
                      }
                    </h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={6}>
                        <ul className="Desc">
                          <li>Linear Algebra</li>
                          <li>Multivariable Calculus</li>
                          <li>Discrete Math</li>
                          <li>Differential Equations</li>
                          <li>College Math</li>
                          <li>College Statistics</li>
                          <li>College Physics</li>
                        </ul>
                      </Col>
                      <Col md={6}>
                        <ul className="Desc1">
                          <li>College Chemistry</li>
                          <li>Organic Chemistry</li>
                          <li>College Biology</li>
                          <li>Molecular Biology</li>
                          <li>College Genetics</li>
                          <li>Anatomy and Physiology</li>
                          <li>College English</li>
                        </ul>
                      </Col>
                      <hr />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>

          <div style={{ marginTop: "5%" }}></div>

          <div className="white">
            <Container fluid={true}>
              <Row >
                {/* <div className="prefChoice"> */}
                  <Col md="12" xs="12" sm="12">
                  <h3 className="program_div">Why is MLS Classes the preferred choice for effective learning and academic success?</h3>
                  </Col>
                {/* </div> */}

                <Col
                  md="4" sm="11" xs="11"
                  text-center
                  mt="5"
                  style={{ marginTop: "10vh" }}
                >
                  <div className="bottomSection">
                    <img
                      src={b1}
                      className="img-fluid"
                      alt="course"
                    />
                    <h3 className="Ind-learn">Individualized Learning</h3>
                    <p className="Flex-learn">
                      Flexible learning at MLS Classes allows students to
                      practice at their own pace, addressing knowledge gaps
                      before advancing their learning journey.
                    </p>
                    <br />
                  </div>
                </Col>
                <Col md="4" sm="11" xs="11" style={{ marginTop: "10vh" }}>
                  <div className="bottomSection">
                    <img
                      src={b2}
                      className="img-fluid"
                      alt="course"
                    />
                    <h3 className="Ind-learn">Reliable Resources</h3>
                    <p className="Flex-learn">
                      MLS Classes offers a comprehensive library of
                      expert-created content, carefully aligned with
                      educational standards. Our collection includes a wide
                      range of subjects such as math, science, English,
                      coding, test preparation, and more. All of our resources
                      are meticulously crafted and accessible to both learners
                      and teachers, ensuring a high-quality learning
                      experience without any cost barriers.
                    </p>
                    <br />
                    <br />
                  </div>
                </Col>
                <Col md="4" sm="11" xs="11" style={{ marginTop: "10vh" }}>
                  <div className="bottomSection">
                    <img
                      src={b3}
                      className="img-fluid"
                      alt="empower"
                    />
                    <h3 className="Ind-learn">Empowering Educators</h3>
                    <p className="Flex-learn">
                      MLS Classes empowers teachers to identify and address
                      gaps in their students' understanding, providing them
                      with the tools and resources needed to personalize
                      instruction and meet the unique needs of each learner.
                      By leveraging our platform, teachers can effectively
                      tailor their teaching strategies to ensure every student
                      receives the support and guidance required for academic
                      success.
                    </p>
                    <br />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Programs;
