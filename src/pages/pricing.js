import React, { Component } from 'react';
import '../assets/css/pricing.css'
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import AOS from 'aos';
//images
import img1 from '../assets/img/temp4.png';
import logo from '../assets/img/mlslogo.png';
import b1 from '../assets/img/b1.png';
import b2 from '../assets/img/b2.png';
import b3 from '../assets/img/b3.png';
import gr from '../assets/img/gr.png';
import pos from '../assets/img/ppostion.png';
const Pricing = () => {
    AOS.init({
        offset: 200,
        duration: 600
    });
    return (
        <div>
            <Navbar />
            <div className="f-template">
                <img src={img1} alt="first Template" className="img-fluid" />

            </div>
            <div className="white">
                <div className="container-fluid">
                    <div className="rows">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="find-live">
                                <div><a href="#">Join us at MLS Classes and unlock your child's true potential. <br />
                                    Enroll today and witness their academic journey soar to new heights.</a></div>
                                <div className="width-line-space">
                                    <h3>Book 1 Week
                                        Free Trial</h3>
                                </div>
                            </div>
                            <div>
                                <h3 className='container-desc'>
                                    Unlock the Power of Comprehensive Learning with a Single Subscription – Including Test
                                    Preparation!
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="white">
                <div className="container">
                    <div className="rows1">
                        <div className="col-md-1 col-sm-1 col-xs-1">
                            <div className="random1">
                                <h4>
                                    $750/50hrs<br />
                                    $15/hr
                                </h4>
                            </div>
                        </div>
                        <div className="col-md-11 col-sm-11 col-xs-11">
                            <div className="box">
                                <ul>
                                    <li>1:1 highly interactive and personalized sessions</li>
                                    <li>Homework and assignments after every session</li>
                                    <li>Monthly quizzes and tests</li>
                                    <li>Parent-Teacher Meetings (PTMs) every month</li>
                                    <li>Class notes provided after every session</li>
                                    <li>Class recording available for review</li>
                                    <li>Flexible class schedule to accommodate your needs</li>
                                    <li>Extra classes offered during exam times</li>
                                    <li>24x7 doubt support available for continuous assistance</li>
                                    <li>Utilize AI-powered platforms to monitor and assess your progress effectively.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="rows">
                        <div className="col-md-1 col-sm-1 col-xs-1">
                            <div className="random1">
                                <h4>
                                    $1350/100hrs<br />
                                    $.13.5/hr</h4>
                            </div>
                        </div>
                        <div className="col-md-11 col-sm-11 col-xs-11">
                            <div className="box">
                                <ul>
                                    <li>1:1 highly interactive and personalized sessions</li>
                                    <li>Homework and assignments after every session</li>
                                    <li>Monthly quizzes and tests</li>
                                    <li>Parent-Teacher Meetings (PTMs) every month</li>
                                    <li>Class notes provided after every session</li>
                                    <li>Class recording available for review</li>
                                    <li>Flexible class schedule to accommodate your needs</li>
                                    <li>Extra classes offered during exam times</li>
                                    <li>24x7 doubt support available for continuous assistance</li>
                                    <li>Utilize AI-powered platforms to monitor and assess your progress effectively.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="rows">
                        <div className="col-md-1 col-sm-1 col-xs-1">
                            <div className="random1">
                                <h4>
                                    $2500/200hrs<br />
                                    $.12.5/hr</h4>
                            </div>
                        </div>
                        <div className="col-md-11 col-sm-11 col-xs-11">
                            <div className="box">
                                <ul>
                                    <li>1:1 highly interactive and personalized sessions</li>
                                    <li>Homework and assignments after every session</li>
                                    <li>Monthly quizzes and tests</li>
                                    <li>Parent-Teacher Meetings (PTMs) every month</li>
                                    <li>Class notes provided after every session</li>
                                    <li>Class recording available for review</li>
                                    <li>Flexible class schedule to accommodate your needs</li>
                                    <li>Extra classes offered during exam times</li>
                                    <li>24x7 doubt support available for continuous assistance</li>
                                    <li>Utilize AI-powered platforms to monitor and assess your progress effectively.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Pricing;