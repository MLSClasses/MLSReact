// import '../../assets/css/portal.css';
import StudentDashboard from "./student_dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blank from "../Blank";
import NavBarComponent from "../../components/accountNavbar";

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
const Portal = () => {
    const programList = [];

    const ProgramOffer = () => {
        return (
            <Row style={{ gap: "5px", justifyContent: "center" }}>
                {programList.map(function (po) {
                    return (
                        <Col md={3} sm={3} xs={12}>
                            <Card border="light" style={{}}>
                                <Card.Body key={po.program_name}>
                                    <Card.Title className="prg-title">{po.program_name}</Card.Title><br />
                                    <Card.Text>  <Image
                                        src={calendar}
                                        alt="video call"
                                        className="img-fluid"
                                        width="25"
                                        fluid
                                    /> &nbsp;{po.week}</Card.Text>
                                    <Card.Text>
                                        <Image
                                            src={clock}
                                            alt="video call"
                                            className="img-fluid"
                                            width="25"
                                            fluid
                                        />&nbsp;{po.time}</Card.Text>
                                    <Card.Text>
                                        <Image
                                            src={profile}
                                            alt="video call"
                                            className="img-fluid"
                                            width="25"
                                            fluid
                                        />&nbsp;{po.teacher_details}</Card.Text>
                                    <Button className="btn-portal" variant="primary" size="sm">Enroll Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}

            </Row>
        );
    }
    return (
        <>
            <AppLayout />
            <div className="main-portal">
                <Container fluid={false}>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <Card>
                                <Card.Img variant="top" src={slider1} />
                                <Card.Body>
                                    {/* <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text> */}
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            {/* <h3>Our Programs</h3><br /><br /> */}
                            <ProgramOffer />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Portal;