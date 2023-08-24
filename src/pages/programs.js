import React, { Component } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../assets/css/program.css";
import { Helmet } from 'react-helmet';

import { Container, Row, Col, Accordion, Image } from "react-bootstrap";

//images
import img1 from "../assets/img/program.PNG";
import b1 from "../assets/img/b1.png";
import b2 from "../assets/img/b2.png";
import b3 from "../assets/img/b3.png";
import gr from "../assets/img/gr.png";
import hgs from "../assets/img/edu3.jpeg";
import ele from "../assets/img/edu4.jpeg";
import it_img from "../assets/img/edu5.jpeg";
import clgg from "../assets/img/edu2.jpeg";
import ab from "../assets/img/edu7.jpeg";

import arrow_img from "../assets/img/images.png";
import pos from "../assets/img/ppostion.png";
import Whatsapp_icon from "../components/whatsapp_icon";
import Mobile_Navbar from "../components/mobile_navbar";
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
          <a src="#High"><h2 >High School/ Middle School</h2></a>
          <a><h2>Elementary</h2></a>
          <a><h2>IT</h2></a>
          <a><h2>Test Prep</h2></a>
          <a><h2>College</h2></a>
        </div>
        <div className="mt-10-nav-login-btn">
          <p1 style={{ marginLeft: "23%" }}>2 - 12</p1>
        </div>
        <div className="mainsection" style={{ marginTop: "5%" }}>
          <Row>
            <Col md={8} sm={8} xs={8}>
              <Accordion className="work" defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ background: "white" }}>
                    {" "}
                    <h1 className="rowsDesc" id="High">
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
                        <Image
                          src={arrow_img}
                          alt="img"
                          className="arrow_down"
                          fluid
                        />
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
                          <li>Biology</li>
                          <li>Chemistry</li>
                          <li>Earth Science</li>
                          <li>Life Science</li>
                          <li>Physics </li>
                          <li>Science</li>
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

              <Accordion className="work" defaultActiveKey="0">
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
                        <Image
                          src={arrow_img}
                          alt="img"
                          className="arrow_down"
                          fluid
                        />
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
              <Accordion className="work" defaultActiveKey="1">
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
                        <img
                          src={arrow_img}
                          alt="img"
                          className="arrow_down"
                        />
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
                              <img
                                alt=""
                                src={arrow_img}
                                className="arrow_down"
                              />
                            </p>{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul className="Desc">
                              <li>SAT Math</li>
                              <li>SAT Reading & Writing</li>
                            </ul>
                          </Accordion.Body>
                        </Accordion>

                        <Accordion defaultActiveKey="1">
                          <Accordion.Item eventKey="1"></Accordion.Item>
                          <Accordion.Header>
                            <p className="rowsDesc">
                              PSAT{" "}
                              <img
                                alt=""
                                src={arrow_img}
                                className="arrow_down"
                              />
                            </p>{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul className="Desc">
                              <li>PSAT Math 8/9</li>
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
                              <img
                                alt=""
                                src={arrow_img}
                                className="arrow_down"
                              />
                            </p>{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul className="Desc">
                              <li>ACT Math</li>
                              <li>ACT English</li>
                              <li>ACT Science</li>
                              <li>ACT Reading and Writing</li>
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
                              <img
                                alt=""
                                src={arrow_img}
                                className="arrow_down"
                              />
                            </p>{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul className="Desc">
                              <li>AP Macroeconomics</li>
                              <li>AP English Literature</li>
                              <li>and Composition</li>
                              <li>AP Precalculus</li>
                              <li>AP Calculus AB</li>
                              <li>AP Calculus BC</li>
                              <li>AP Statistics</li>
                              <li>AP Biology</li>
                              <li>AP Chemistry</li>
                              <li>AP Physics 1 & 2</li>
                              <li>AP Physics C: Electricity</li>
                              <li>and Magnetism</li>
                              <li>AP Physics C: Mechanics</li>
                              <li>AP Environmental Science</li>
                              <li>AP English & Composition</li>
                              <li>AP Computer Science A</li>
                              <li>AP Spanish</li>
                              <li>IBMYP</li>
                            </ul>
                          </Accordion.Body>
                        </Accordion>
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
                        <Image
                          src={arrow_img}
                          alt="img"
                          className="arrow_down"
                          fluid
                        />
                      }
                    </h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={12}>
                        <ul className="Desc">
                          <li>AMC 10</li>
                          <li>AMC 8</li>
                          <li>CAASPP</li>
                          <li>FSA</li>
                          <li>HSPT</li>
                          <li>MATHCOUNTS</li>
                          <li>MCAT</li>
                          <li>PARCC</li>
                          <li>Regents</li>
                          <li>SSAT</li>
                          <li>STAAR</li>
                          <li>TERRANOVA</li>
                          <li>TOEFL</li>
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
                        <Image
                          src={arrow_img}
                          alt="img"
                          className="arrow_down"
                          fluid
                        />
                      }
                    </h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={12}>
                        <ul className="Desc">
                          <li>C# Programming</li>
                          <li>C++ Programming</li>
                          <li>HTML and Web</li>
                          <li>Development</li>
                          <li>Java</li>
                          <li>Python</li>
                          <li>Scratch</li>
                          <li>Robotics</li>
                        </ul>
                      </Col>
                      <hr />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              {/* 4rd  */}
              <Accordion className="work" defaultActiveKey="3">
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
                        <img
                          src={arrow_img}
                          alt="img"
                          className="arrow_down"
                        />
                      }
                    </h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={6}>
                        <ul className="Desc">
                          <li>College Math</li>
                          <li>Differential Equations</li>
                          <li>Discrete Math</li>
                          <li>College Statistics</li>
                          <li>Multivariable Calculus</li>
                          <li>Linear Algebra</li>
                          <li>College Biology</li>
                        </ul>
                      </Col>
                      <Col md={6}>
                        <ul className="Desc">
                          <li>Molecular Biology</li>
                          <li>College Genetics</li>
                          <li>Anatomy and Physiology</li>
                          <li>College Chemistry</li>
                          <li>Organic Chemistry</li>
                          <li>College Physics</li>
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
            <Container>
              <Row className="rows">
                <div className="prefChoice">
                  <Col md="12" xs="12" sm="12">
                    <h3>
                      Why is MLS Classes the preferred choice
                      <br />
                      for effective learning and academic success?
                    </h3>
                  </Col>
                </div>

                <Col
                  md="4"
                  sm="11"
                  xs="11"
                  text-center
                  mt="5"
                  style={{ marginTop: "10vh" }}
                >
                  <div className="bottomSection">
                    <img
                      src={b1}
                      className="img-fluid"
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
