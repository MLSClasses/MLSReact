import React, { Component } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

import { Container, Row, Col } from 'react-bootstrap';
//images
import img1 from '../assets/img/temp4.png';
import logo from '../assets/img/mlslogo.png';
import b1 from '../assets/img/b1.png';
import b2 from '../assets/img/b2.png';
import b3 from '../assets/img/b3.png';
import gr from '../assets/img/gr.png';
import pos from '../assets/img/ppostion.png';
const Programs = () => {
    return (
        <div>
            <Navbar />
            <h1>Programs</h1>
            <div class="f-template-contact">
                <img src={img1} alt="first Template" />
            </div>
            <div className="pos">
                <img src={pos} alt="first Template" className="img-fluid" />
            </div>
            <div className="white">
                <div className="container-fluid">
                    <div className="rows">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="find-live">
                                <div className="width-line-space">
                                    <h4 className="container-desc">2-12</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="white">
                <div className="container">
                    <div className="rows">
                        <div className="col-md-8">
                            <h3 className="rowsDesc">
                                <span><img src={gr} className="img-fluid" width="40" /></span> High School/Middle School
                            </h3>
                        </div>
                        <div className="col-md-4">
                            <h3 className="rowsDesc">
                                <span> <img src={gr} className="img-fluid" width="40" /></span> Elementary
                            </h3>
                        </div>
                        <div className="col-md-4">
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
                        </div>
                        <div className="col-md-4">
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
                        </div>
                        <div className="col-md-4">
                            <ul className="Desc">
                                <li>Math</li>
                                <li>Science</li>
                                <li>Grammar and Writing</li>
                                <li>Reading Comprehension</li>
                            </ul>
                        </div>
                        <div className="col-md-4 mt-5">
                            <h3 className="rowsDesc">
                                <span><img src={gr} className="img-fluid" width="40" /></span> Test Prep
                            </h3>
                        </div>
                        <div className="col-md-4 mt-5">
                            <h3 className="rowsDesc">
                                <span> <img src={gr} className="img-fluid" width="40" /></span> IT
                            </h3>
                        </div>
                        <div className="col-md-4 mt-5">
                            <h3 className="rowsDesc1">
                                <span> <img src={gr} className="img-fluid" width="40" /></span> Other Test Prep
                            </h3>
                        </div>
                        <div className="col-md-4 ">
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
                                <li>ACT Complete</li>
                                <li>ACT Math</li>
                                <li>ACT English</li>
                                <li>ACT Science</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
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
                        </div>
                        <div className="col-md-4">
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
                        </div>
                        <div className="col-md-8 mt-5">
                            <h3 className="rowsDesc">
                                <span><img src={gr} className="img-fluid" width="40" /></span> High School/Middle School
                            </h3>
                        </div>
                        <div className="col-md-4">
                            <h3 className="rowsDesc"></h3>
                        </div>
                        <div className="col-md-4">
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
                        </div>
                        <div className="col-md-4">
                            <ul className="Desc">
                                <li>IB Math HL & SL</li>
                                <li>IB Biology HL & SL</li>
                                <li>IB Chemistry HL & SL</li>
                                <li>IB Physics HL & SL</li>
                                <li>IB English HL & SL</li>
                                <li>IBMYP</li>
                            </ul>
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-8 mt-5">
                            <h3 className="rowsDesc">
                                <span><img src={gr} className="img-fluid" width="40" /></span> College
                            </h3>
                        </div>
                        <div className="col-md-4">
                            <h3 className="Desc"></h3>
                        </div>
                        <div className="col-md-4">
                            <ul className="Desc">
                                <li>College Math</li>
                                <li>Differential Equations</li>
                                <li>Discrete Math</li>
                                <li>College Statistics</li>
                                <li>Multivariable Calculus</li>
                                <li>Linear Algebra</li>
                                <li>College Biology</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul className="Desc">
                                <li>Molecular Biology</li>
                                <li>College Genetics</li>
                                <li>Anatomy and Physiology</li>
                                <li>College Chemistry</li>
                                <li>Organic Chemistry</li>
                                <li>College Physics</li>
                                <li>College English</li>
                            </ul>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
            <div className="white">
                <div className="container">
                    <div className="rows">
                        <div className="random">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <h3 className="cont-desc">
                                    Why is MLS Classes the preferred choice
                                    for effective learning and academic success?</h3>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-11 col-xs-11 text-center mt-5">
                            <div className="box">
                                <img src={b1} className="img-fluid" />
                                <h3 className="Ind-learn">
                                    Individualized Learning</h3>
                                <p className="Flex-learn">Flexible learning at MLS
                                    Classes allows students to practice at their own pace, addressing knowledge gaps before
                                    advancing their learning journey.</p><br />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-11 col-xs-11 text-center mt-5">
                            <div className="box">
                                <img src={b2} className="img-fluid" />
                                <h3 className="Ind-learn">
                                    Reliable Resources
                                </h3>
                                <p className="Flex-learn">MLS Classes offers a
                                    comprehensive library of expert-created content, carefully aligned with educational
                                    standards. Our collection includes a wide range of subjects such as math, science, English,
                                    coding, test preparation, and more. All of our resources are meticulously crafted and
                                    accessible to both learners and teachers, ensuring a high-quality learning experience
                                    without any cost barriers.</p><br /><br />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-11 col-xs-11 text-center mt-5">
                            <div className="box">
                                <img src={b3} className="img-fluid" />
                                <h3 className="Ind-learn">Empowering Educators</h3>
                                <p className="Flex-learn">MLS Classes empowers
                                    teachers to identify and address gaps in their students' understanding, providing them with
                                    the tools and resources needed to personalize instruction and meet the unique needs of each
                                    learner. By leveraging our platform, teachers can effectively tailor their teaching
                                    strategies to ensure every student receives the support and guidance required for academic
                                    success.</p><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}
export default Programs;