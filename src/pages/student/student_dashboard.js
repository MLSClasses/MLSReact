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
import Lady from '../../assets/img/lady.jpeg';
import arrow from "../../assets/img/images.png";
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
      <Row style={{ gap: "5px", justifyContent: "center" }}>

        {programList.map(function (po) {
          return (
            <Col md={4} sm={6} xs={12} className="prog_card">


              <Card border="light" >
                <div className="top-img">
                  <Image
                    src={video}
                    alt="video call"
                    className="img-fluid"
                    width="25"
                    fluid
                  />
                  <Image
                    src={heart}
                    alt="video call"
                    className="img-fluid"
                    width="25"
                    fluid
                  />
                </div>
                <div className="top-img">
                  <Button variant="primary">Learn More</Button>{' '}
                  <Button variant="primary">Rate Us</Button>{' '}
                </div>
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

        <Col md={4} sm={4} xs={12}>
          <Card className="second-card-student">
            <Card.Header>Schedule</Card.Header>
            <Card.Body className="second-card-body-student">
              <img src={arrow} className="arrow" />
              <Card.Title>Algebra Class I</Card.Title>
              <Card.Text>
                <p>We do not store any details in our systems, instead we...</p>
              </Card.Text>
            </Card.Body>
            <Card.Body className="second-card-body-student">
              <img src={arrow} className="arrow" />
              <Card.Title>Algebra Class II</Card.Title>
              <Card.Text>
                <p>We do not store any details in our systems, instead we...</p>
              </Card.Text>
            </Card.Body>
            <Card.Body className="second-card-body-student">
              <img src={arrow} className="arrow" />
              <Card.Title>Algebra Class III</Card.Title>
              <Card.Text>
                <p>We do not store any details in our systems, instead we...</p>
              </Card.Text>
            </Card.Body>
            <Card.Body className="second-card-body-student">
              <img src={arrow} className="arrow" />
              <Card.Title>Statistics Class I</Card.Title>
              <Card.Text>
                <p>We do not store any details in our systems, instead we...</p>
              </Card.Text>
            </Card.Body>
            <Card.Body className="second-card-body-student">
              <img src={arrow} className="arrow" />
              <Card.Title>Statistics Class II</Card.Title>
              <Card.Text>
                <p>We do not store any details in our systems, instead we...</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} sm={4} xs={12}>
          <iframe
            poster={image11}
            className="YoutubeBox-StuDash"
            src={`https://www.youtube.com/embed/XpScgwRKpgs`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            crossOrigin="anonymous"
          ></iframe>
        </Col>

      </Row>
    );
  }
  return (
    <>
      <AppLayout />
      <div className="main-portal-student">
        <div className="blanksSpace"></div>
        <Container fluid={false}>
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
              <img src={Lady} className="first-card-lady" />
            </Card.Body>
          </Card>
          <Row>
            <Col md={12} sm={12} xs={12}>
              <h3 className="OurPrograms-student">Our Programs</h3><br /><br />
              <ProgramOffer />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default StudentDashboard;