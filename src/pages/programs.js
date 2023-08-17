import React, { Component } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../assets/css/program.css";
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
      <div class="f-template-contact">
        <img src={img1} alt="first Template" />
        {/* <h1 class="our-program-h">Our Program</h1> */}
      </div>
      <div className="main-prg">
        <div className="mt-10-nav-login-btn">
          <p1 style={{ marginLeft: "23%" }}>2 - 12</p1>
        </div>
        <div style={{ marginTop: "5%" }}>
          <Row>
            <Col md={8} sm={8} xs={8}>
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
                      High School/Middle School
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
                          <li>Pre-Algebra</li>
                          <li>Algebra 1</li>
                          <li>Algebra 2</li>
                          <li>Algebra 2 & Trigonometry</li>
                          <li>Trigonometry</li>
                          <li>Geometry</li>
                          <li>Precalculus</li>
                          <li>Calculus</li>
                          <li>Statistics</li>
                          <li>Integrated Math 1</li>
                          <li>Integrated Math 2</li>
                        </ul>
                      </Col>
                      <Col md={6}>
                        <ul className="Desc">
                          <li>Integrated Math 3</li>
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
              <br />
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
                              <li>SAT</li>
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
                              <li>PSAT/NMSQT</li>
                              <li>PSAT Math</li>
                              <li>PSAT Evidence-Based</li>
                              <li>Reading & Writing</li>
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
                              <li>ACT Complete</li>
                              <li>ACT Math</li>
                              <li>ACT English</li>
                              <li>ACT Science</li>
                            </ul>
                          </Accordion.Body>
                        </Accordion>
                      </Col>
                      <hr />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              {/* 3rd  */}
              <Accordion className="work" defaultActiveKey="2">
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    {" "}
                    <h3 className="rowsDesc">
                      <span>
                        <img
                          src={ab}
                          alt="img"
                          className="img-fluid"
                          width="40"
                          style={{ marginTop: "-20px" }}
                        />
                      </span>{" "}
                      AP/IB
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
                          <li>Pre-Algebra</li>
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
                      </Col>
                      <Col md={6}>
                        <ul className="Desc">
                          <li>IB Math HL & SL</li>
                          <li>IB Biology HL & SL</li>
                          <li>IB Chemistry HL & SL</li>
                          <li>IB Physics HL & SL</li>
                          <li>IB English HL & SL</li>
                          <li>IBMYP</li>
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
                  <div>
                    <img
                      src={b1}
                      className="img-fluid"
                      style={{ marginLeft: "9vw" }}
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
                  <div>
                    <img
                      src={b2}
                      className="img-fluid"
                      style={{ marginLeft: "9vw" }}
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
                  <div>
                    <img
                      src={b3}
                      className="img-fluid"
                      style={{ marginLeft: "9vw" }}
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
