import { Col, Container, Image, Row } from "react-bootstrap";
import "../../assets/css/chat.css";
import Table from 'react-bootstrap/Table';
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
import Lady from '../../assets/img/lady.jpeg';
import arrow from "../../assets/img/images.png";
const StudentDashboard = () => {
    const programList = [{
        teachers_name: "James Gross",
        teachers_roll: "Dedicated Counselor"
    },
    {
        teachers_name: "James Gross",
        teachers_roll: "Dedicated Counselor"
    },
    {
        teachers_name: "James Gross",
        teachers_roll: "Dedicated Counselor"
    },
    {
        teachers_name: "James Gross",
        teachers_roll: "Dedicated Counselor"
    },
    {
        teachers_name: "James Gross",
        teachers_roll: "Dedicated Counselor"
    },
    {
        teachers_name: "James Gross",
        teachers_roll: "Dedicated Counselor"
    },
    {
        teachers_name: "James Gross",
        teachers_roll: "Dedicated Counselor"
    },
    {
        teachers_name: "James Gross",
        teachers_roll: "Dedicated Counselor"
    },
    {
        teachers_name: "James Gross",
        teachers_roll: "Dedicated Counselor"
    },
    {
        teachers_name: "James Gross",
        teachers_roll: "Dedicated Counselor"
    },
    {
        teachers_name: "James Gross",
        teachers_roll: "Dedicated Counselor"
    },
    {
        teachers_name: "James Gross",
        teachers_roll: "Dedicated Counselor"
    }];

    const Teachers = () => {
        return (
            <Row style={{ gap: "5px", justifyContent: "center" }}>

                {programList.map(function (po) {
                    return (
                        <Col md={4} sm={6} xs={12} className="prog_card">
                            <Card border="light" >
                                <div className="top-img">
                                    <Image
                                        src={profile}
                                        alt="video call"
                                        className="img-fluid"
                                        width="50"
                                        fluid
                                    />
                                </div>
                                <Card.Body key={po.teachers_name}>
                                    <Card.Title className="prg-title">{po.teachers_name}</Card.Title><br />
                                    <Card.Subtitle className="prg-subtitle">{po.teachers_roll}</Card.Subtitle><br />
                                    <Button className="btns" variant="secondary">Send Message</Button>{' '}
                                    <Button className="btns" variant="danger">Book Time Slot</Button>{' '}
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
            <div className="main-portal-student">
                <div className="blanksSpace"></div>
                <Container fluid={false}>
                    <h2 className="chat-title">
                        Chat Room with Teachers
                    </h2>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <Teachers />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default StudentDashboard;