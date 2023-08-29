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
const StudentDashboard = () => {
  const programList = [{
    program_name: "MATH",
    week: "Mon,Wed",
    time: "5px CST",
    teacher_details: "James"
  },
  {
    program_name: "ENGLISH",
    week: "Mon,Wed",
    time: "5px CST",
    teacher_details: "James"
  },
  {
    program_name: "Science",
    week: "Mon,Wed",
    time: "5px CST",
    teacher_details: "James"
  },
  {
    program_name: "SAT(Math)",
    week: "Mon,Wed",
    time: "5px CST",
    teacher_details: "James"
  },
  {
    program_name: "SAT(Reading and Writing)",
    week: "Mon,Wed",
    time: "5px CST",
    teacher_details: "James"
  },
  {
    program_name: "Coding",
    week: "Mon,Wed",
    time: "5px CST",
    teacher_details: "James"
  }];

  const ProgramOffer = () => {
    return (
      <Row style={{ gap: "5px",justifyContent:"center" }}>

        {programList.map(function (po) {
          return (

            <Col md={3} sm={3} xs={12}>
              <Card border="light" style={{}}>
                <div className="top-img">
                  <Image
                    src={video}
                    alt="video call"
                    className="img-fluid"
                    width="25"
                    // style={{ marginTop: "-20px" }}
                    fluid
                  />
                  
                  <Image
                    src={heart}
                    alt="video call"
                    className="img-fluid"
                    width="25"
                    // style={{ marginTodiv: "-20divx" }}
                    fluid
                  />
                </div>
                <div className="top-img">
                <span>Learn More</span>
                <span>Rate Us</span>
                </div>
                <Card.Body key={po.program_name}>
                  <Card.Title className="prg-title">{po.program_name}</Card.Title><br />
                <Card.Text>  <Image
                    src={calendar}
                    alt="video call"
                    className="img-fluid"
                    width="25"
                    // style={{ marginTodiv: "-20divx" }}
                    fluid
                  /> &nbsp;{po.week}</Card.Text>
                  <Card.Text>
                  <Image
                    src={clock}
                    alt="video call"
                    className="img-fluid"
                    width="25"
                    // style={{ marginTodiv: "-20divx" }}
                    fluid
                  />&nbsp;{po.time}</Card.Text>
                  <Card.Text>
                  <Image
                    src={profile}
                    alt="video call"
                    className="img-fluid"
                    width="25"
                    // style={{ marginTodiv: "-20divx" }}
                    fluid
                  />&nbsp;{po.teacher_details}</Card.Text>
                  <Button variant="primary" size="sm">Enroll Now</Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}

      </Row>
    );
  }
  return (
    <div className="main-portal">
      <Container fluid={true}>
        <Row>
        <Col md={12} sm={12} xs={12}>
        <Card>
        <Card.Img variant="top" src={slider1} />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

        </Col>
        </Row>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <h3>Our Programs</h3><br /><br />
            <ProgramOffer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StudentDashboard;