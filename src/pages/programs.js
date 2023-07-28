import React, { Component } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../assets/css/program.css";
import { Container, Row, Col } from "react-bootstrap";
//images
<<<<<<< HEAD
import img1 from "../assets/img/temp4.png";
=======
import img1 from "../assets/img/8.jpg";
>>>>>>> main
import b1 from "../assets/img/b1.png";
import b2 from "../assets/img/b2.png";
import b3 from "../assets/img/b3.png";
import gr from "../assets/img/gr.png";
<<<<<<< HEAD
=======
import arrow_img from "../assets/img/images.png"
>>>>>>> main
import pos from "../assets/img/ppostion.png";
import Whatsapp_icon from "../components/whatsapp_icon";
const Programs = () => {
  return (
    <div>
      <Whatsapp_icon />
      <Navbar />

      <div class="f-template-contact">
        <img src={img1} alt="first Template" />
<<<<<<< HEAD
      </div>
      <div className="pos">
        <img src={pos} alt="first Template" className="img-fluid" />
      </div>
      <div className="white">
=======
        <h1 class="our-program-h" style={{color:"black"}}>Our Program</h1>
      </div>
      <div className="main-prg">
      <div className="mt-10 nav-login-btn" style={{

textDecoration: "none",
backgroundColor: "orange",
whiteSpace:"nowrap",
color: "black",
padding: "0.4vw 3vw",
borderRadius: "0.5vw",
textAlign:"center",
width: "15vw",
lineHeight:"0.80",
    marginLeft: "45%"
      }}>2 - 12</div>
      <div className="white m-6">
>>>>>>> main
        <Container fluid>
          <Row>
            <Col md="1" sm="1" xs="1">
              <div
                style={{
                  margin: "0.8vw",
                  padding: "0vw 20vw",
                  lineHeight: "2.3vw",
                }}
<<<<<<< HEAD
              >
                <div
                  className="width-line-space"
                  style={{ marginLeft: "30vw", padding: "0px 50px" }}
                >
                  <h5 className="container-desc">2-12</h5>
                </div>
              </div>
=======
              ></div>
>>>>>>> main
            </Col>
          </Row>
        </Container>
      </div>
      <div className="white">
        <Container>
          <Row>
<<<<<<< HEAD
            <Col md="8">
=======
            <Col md="8" sm="8" xs="12">
>>>>>>> main
              <h3 className="rowsDesc">
                <span>
                  <img src={gr} className="img-fluid" width="40" />
                </span>{" "}
                High School/Middle School
<<<<<<< HEAD
              </h3>
            </Col>
            <Col md="4">
=======
              <img src={arrow_img} className="arrow_down" />
              </h3>
            </Col>
            <Col md="4" sm="4" xs="12">
>>>>>>> main
              <h3 className="rowsDesc">
                <span>
                  {" "}
                  <img src={gr} className="img-fluid" width="40" />
                </span>{" "}
                Elementary
<<<<<<< HEAD
              </h3>
            </Col>
            <Col md="4">
=======
                <img src={arrow_img} className="arrow_down" />
              </h3>
            </Col>
            <Col md="4" sm="4">
>>>>>>> main
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
<<<<<<< HEAD
            </Col>
            <Col md="4">
=======
              <hr/>

              <h3 className="rowsDesc">
                <span>
                  <img src={gr} className="img-fluid" width="40" />
                </span>{" "}
                Test Prep
                <img src={arrow_img} className="arrow_down" />
              </h3>
              
              <ul className="Desc">
                <li className="subDesc">SAT <img src={arrow_img} className="arrow_down" /></li>
                <li>SAT</li>
                <li>SAT Math</li>
                <li>SAT Reading & Writing</li>
                <li className="subDesc">PSAT <img src={arrow_img} className="arrow_down" /></li>
                <li>PSAT/NMSQT</li>
                <li>PSAT Math</li>
                <li>PSAT Evidence-Based</li>
                <li>Reading & Writing</li>
               
              </ul>
              <hr/>
            </Col>
            <Col md="4" sm="4">
>>>>>>> main
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
<<<<<<< HEAD
            </Col>
            <div className="col-md-4">
              <ul className="Desc">
                <li>Math</li>
                <li>Science</li>
                <li>Grammar and Writing</li>
                <li>Reading Comprehension</li>
              </ul>
            </div>
            <Col md="4" mt="5">
              <h3 className="rowsDesc">
                <span>
                  <img src={gr} className="img-fluid" width="40" />
                </span>{" "}
                Test Prep
              </h3>
            </Col>
            <Col md="4" mt="5">
              <h3 className="rowsDesc">
                <span>
                  {" "}
                  <img src={gr} className="img-fluid" width="40" />
                </span>{" "}
                IT
              </h3>
            </Col>
            <Col md="4" mt="5">
              <h3 className="rowsDesc1">
                <span>
                  {" "}
                  <img src={gr} className="img-fluid" width="40" />
                </span>{" "}
                Other Test Prep
              </h3>
            </Col>
            <Col md="4">
              <ul className="Desc">
                <li className="subDesc">SAT</li>
                <li>SAT</li>
                <li>SAT Math</li>
                <li>SAT Reading & Writing</li>
                <li className="subDesc">PSAT</li>
                <li>PSAT/NMSQT</li>
                <li>PSAT Math</li>
                <li>PSAT Evidence-Based</li>
                <li>Reading & Writing</li>
                <li className="subDesc">ACT</li>
=======
              <hr/>

             
            
            
              <ul className="Desc">
              <li className="subDesc">ACT <img src={arrow_img} className="arrow_down" /></li>
>>>>>>> main
                <li>ACT Complete</li>
                <li>ACT Math</li>
                <li>ACT English</li>
                <li>ACT Science</li>
              </ul>
            </Col>
<<<<<<< HEAD
            <Col md="4" mt="5">
              <ul className="Desc">
=======
            
            
          
            
            
            <div className="col-md-2">
              <ul className="Desc">
                <li>Math</li>
                <li>Science</li>
                <li>Grammar and Writing</li>
                <li>Reading Comprehension</li>
              </ul>
              <hr/>
              <h3 className="rowsDesc">
                <span>
                  {" "}
                  <img src={gr} className="img-fluid" width="40" />
                </span>{" "}
                IT
                <img src={arrow_img} className="arrow_down" />
              </h3>
            <ul className="Desc">
>>>>>>> main
                <li>C# Programming</li>
                <li>C++ Programming</li>
                <li>HTML and Web</li>
                <li>Development</li>
                <li>Java</li>
                <li>Python</li>
                <li>Scratch</li>
                <li>Robotics</li>
              </ul>
<<<<<<< HEAD
            </Col>
            <Col md="4" mt="5">
              <ul className="Desc">
=======
              <hr/>
            </div>
            
            </Row>
            <Row className="second2">
            {/* <Col md="4" mt="5">
              <h3 className="rowsDesc">
                <span>
                  <img src={gr} className="img-fluid" width="40" />
                </span>{" "}
                Test Prep
                <img src={arrow_img} className="arrow_down" />
              </h3>
            </Col> */}
            <Col md="4" mt="5">
             
            </Col>
            <Col md="12" mt="5">
              <h3 className="rowsDesc1">
                <span>
                  {" "}
                  <img src={gr} className="img-fluid" width="40" />
                </span>{" "}
                Other Test Prep
                <img src={arrow_img} className="arrow_down" />
              </h3>
            </Col>
            {/* <Col md="4">
              <ul className="Desc">
                <li className="subDesc">SAT <img src={arrow_img} className="arrow_down" /></li>
                <li>SAT</li>
                <li>SAT Math</li>
                <li>SAT Reading & Writing</li>
                <li className="subDesc">PSAT <img src={arrow_img} className="arrow_down" /></li>
                <li>PSAT/NMSQT</li>
                <li>PSAT Math</li>
                <li>PSAT Evidence-Based</li>
                <li>Reading & Writing</li>
               
              </ul>
              <hr/>
            </Col>
            <Col md="4" mt="5">
              <ul className="Desc">
              <li className="subDesc">ACT <img src={arrow_img} className="arrow_down" /></li>
                <li>ACT Complete</li>
                <li>ACT Math</li>
                <li>ACT English</li>
                <li>ACT Science</li>
              </ul>
            </Col> */}
            <Row>
            <Col md="6" mt="5">
              <ul className="Desc">
>>>>>>> main
                <li>AMC 10</li>
                <li>AMC 8</li>
                <li>CAASPP</li>
                <li>FSA</li>
                <li>HSPT</li>
                <li>MATHCOUNTS</li>
<<<<<<< HEAD
=======
                
              </ul>
              <hr/>
            </Col>
            <Col md="6" mt="5">
              <ul className="Desc">
>>>>>>> main
                <li>MCAT</li>
                <li>PARCC</li>
                <li>Regents</li>
                <li>SSAT</li>
                <li>STAAR</li>
                <li>TERRANOVA</li>
                <li>TOEFL</li>
              </ul>
<<<<<<< HEAD
            </Col>
            <Col md="8" mt="5">
=======
              <hr/>
            </Col>
            </Row>
            <Col md="6" mt="5">
>>>>>>> main
              <h3 className="rowsDesc">
                <span>
                  <img src={gr} className="img-fluid" width="40" />
                </span>{" "}
<<<<<<< HEAD
                High School/Middle School
              </h3>
            </Col>
            <Col md="4" mt="5">
              <h3 className="rowsDesc"></h3>
            </Col>
            <Col md="4" mt="5">
=======
                High School/Middle School <img src={arrow_img} className="arrow_down" />
              </h3>
            </Col>
            <Col md="5" mt="5">
              <h3 className="rowsDesc"></h3>
            </Col>
            <Col md="6" mt="5">
>>>>>>> main
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
<<<<<<< HEAD
            </Col>
            <Col md="4">
=======
              <hr/>
            </Col>
            <Col md="6">
>>>>>>> main
              <ul className="Desc">
                <li>IB Math HL & SL</li>
                <li>IB Biology HL & SL</li>
                <li>IB Chemistry HL & SL</li>
                <li>IB Physics HL & SL</li>
                <li>IB English HL & SL</li>
                <li>IBMYP</li>
              </ul>
<<<<<<< HEAD
            </Col>
            <Col md="4"></Col>
=======
              <hr/>
            </Col>
            
            <Col md="6"></Col>
>>>>>>> main
            <Col md="8" mt="5">
              <h3 className="rowsDesc">
                <span>
                  <img src={gr} className="img-fluid" width="40" />
                </span>{" "}
<<<<<<< HEAD
                College
              </h3>
            </Col>
            <Col md="84">
              <h3 className="Desc"></h3>
            </Col>
            <Col md="8" mt="5">
=======
                College <img src={arrow_img} className="arrow_down" />
              </h3>
            </Col>
            <Col md="4">
              <h3 className="Desc"></h3>
            </Col>
            <Col md="4" sm="4" mt="5">
>>>>>>> main
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
<<<<<<< HEAD
            <Col md="8" mt="5">
=======
            <Col md="4" sm="4" mt="5">
>>>>>>> main
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
<<<<<<< HEAD
=======
            <hr/>
>>>>>>> main
            <Col md="4" mt="5"></Col>
          </Row>
        </Container>
      </div>
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
<<<<<<< HEAD
                  Why is MLS Classes the preferred choice for effective learning
=======
                  Why is MLS Classes the preferred choice<br/>
                  for effective learning
>>>>>>> main
                  and academic success?
                </h3>
              </Col>
            </div>
<<<<<<< HEAD
            <Col md="4" sm="11" xs="11" text-center mt="5">
              <div className="box">
                <img src={b1} className="img-fluid" />
=======
           
            <Col md="4" sm="11" xs="11" text-center mt="5" style={{marginTop:"10vh"}}>
              <div >
                <img src={b1} className="img-fluid" style={{marginLeft:"9vw"}} />
>>>>>>> main
                <h3 className="Ind-learn">Individualized Learning</h3>
                <p className="Flex-learn">
                  Flexible learning at MLS Classes allows students to practice
                  at their own pace, addressing knowledge gaps before advancing
                  their learning journey.
                </p>
                <br />
              </div>
            </Col>
<<<<<<< HEAD
            <Col>
              <div className="box">
                <img src={b2} className="img-fluid" />
=======
            <Col md="4" sm="11" xs="11" style={{marginTop:"10vh"}}>
              <div>
                <img src={b2} className="img-fluid" style={{marginLeft:"9vw"}} />
>>>>>>> main
                <h3 className="Ind-learn">Reliable Resources</h3>
                <p className="Flex-learn">
                  MLS Classes offers a comprehensive library of expert-created
                  content, carefully aligned with educational standards. Our
                  collection includes a wide range of subjects such as math,
                  science, English, coding, test preparation, and more. All of
                  our resources are meticulously crafted and accessible to both
                  learners and teachers, ensuring a high-quality learning
                  experience without any cost barriers.
                </p>
                <br />
                <br />
              </div>
            </Col>
<<<<<<< HEAD
            <Col>
              <div className="box">
                <img src={b3} className="img-fluid" />
=======
            <Col md="4" sm="11" xs="11" style={{marginTop:"10vh"}}>
              <div >
                <img src={b3} className="img-fluid"  style={{marginLeft:"9vw"}} />
>>>>>>> main
                <h3 className="Ind-learn">Empowering Educators</h3>
                <p className="Flex-learn">
                  MLS Classes empowers teachers to identify and address gaps in
                  their students' understanding, providing them with the tools
                  and resources needed to personalize instruction and meet the
                  unique needs of each learner. By leveraging our platform,
                  teachers can effectively tailor their teaching strategies to
                  ensure every student receives the support and guidance
                  required for academic success.
                </p>
                <br />
              </div>
            </Col>
<<<<<<< HEAD
          </Row>
        </Container>
      </div>
=======
           
          </Row>
        </Container>
      </div>
      </div>
>>>>>>> main
      <Footer />
    </div>
  );
};
export default Programs;
