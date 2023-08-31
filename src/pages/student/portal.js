// import '../../assets/css/portal.css';
import StudentDashboard from "./student_dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blank from "../Blank";
import NavBarComponent from "../../components/accountNavbar";
import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "../../assets/css/portal.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import video from "../../assets/img/video.png";
import heart from "../../assets/img/heart.png";
import calendar from "../../assets/img/calendar.png";
import clock from "../../assets/img/clock.png";
import profile from "../../assets/img/profile.png";
import slider1 from "../../assets/img/slider1.jpg";
import AppLayout from "../../components/layout/AppLayout";
import image11 from "../../assets/img/mlslogo.png";

const Portal = () => {
    const programList = [];
    console.log(`https://youtube.com/embed/XpScgwRKpgs?autoplay=0`);
    return (
        <div>
            <AppLayout />
            <div className="main-portal">
                <div className="blanksSpace"></div>
                <Card className="first-card">
                    <Card.Body>
                        <Card.Title>
                            <h2>
                                Did you check our trending Python Program?
                            </h2>
                        </Card.Title>
                        <Card.Text className="first-card-body">
                            Unlock a world of creativity and problem-solving for your child with our Python Programming program.
                            Just like Avantika, who has excelled in her coding journey, your child can also become a coding superstar and
                            embark on a path of endless possibilities.
                        </Card.Text>
                        <Button variant="warning">Learn More</Button>
                    </Card.Body>
                </Card>
                <Card className="second-card">
                    <Card.Header>Schedule</Card.Header>
                    <Card.Body className="second-card-body">
                        <Card.Title>Algebra Class I</Card.Title>
                        <Card.Text>
                            <p>We do not store any details in our systems, instead we...</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="second-card-body">
                        <Card.Title>Algebra Class II</Card.Title>
                        <Card.Text>
                            <p>We do not store any details in our systems, instead we...</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="second-card-body">
                        <Card.Title>Algebra Class III</Card.Title>
                        <Card.Text>
                            <p>We do not store any details in our systems, instead we...</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="second-card-body">
                        <Card.Title>Statistics Class I</Card.Title>
                        <Card.Text>
                            <p>We do not store any details in our systems, instead we...</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="second-card-body">
                        <Card.Title>Statistics Class II</Card.Title>
                        <Card.Text>
                            <p>We do not store any details in our systems, instead we...</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <iframe
                    poster={image11}
                    className="YoutubeBox"
                    src={`https://www.youtube.com/embed/XpScgwRKpgs`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    crossOrigin="anonymous"
                ></iframe>
            </div>
        </div>
    );
}

export default Portal;