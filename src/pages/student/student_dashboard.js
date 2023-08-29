import {  Col, Container, Row } from "react-bootstrap";
import "../../assets/css/portal.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const StudentDashboard = () => {
  const programList=[{
    program_name: "MATH",
    week: "Mon,Wed",
    time:"5px CST",
    teacher_details:"James"
  },
  {
    program_name: "ENGLISH",
    week: "Mon,Wed",
    time:"5px CST",
    teacher_details:"James"
  },
  {
    program_name: "Science",
    week: "Mon,Wed",
    time:"5px CST",
    teacher_details:"James"
  },
  {
    program_name: "SAT(Math)",
    week: "Mon,Wed",
    time:"5px CST",
    teacher_details:"James"
  },
  {
    program_name: "SAT(Reading and Writing)",
    week: "Mon,Wed",
    time:"5px CST",
    teacher_details:"James"
  },
  {
    program_name: "Coding",
    week: "Mon,Wed",
    time:"5px CST",
    teacher_details:"James"
  }];

   const  ProgramOffer= ()=> {
        return (
          <Row>
            
            {programList.map(function(po) {
      return (
        
        <Col md={4} sm={4} xs={3}>
        <Card border="light" style={{ }}>
            
              <Card.Body key={po.program_name}>
                <Card.Text >
                
          <Card.Title>{po.program_name}</Card.Title>
    <ul key={po.program_name}>
    <Card.Text>{po.program_name}</Card.Text>
    <Card.Text>{po.week}</Card.Text><br/>
    <Card.Text>{po.time}</Card.Text><br/>
    <Card.Text>{po.teacher_details}</Card.Text>
    </ul>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>                       
          </Card>
          </Col>
      )
    })}
    
          </Row>
        );
      }
    return (
        <div>
            <Container fluid={true}>
                <Row>
                    <Col md={12} sm={12} xs={12}>
                        <h3>Our Programs</h3><br/><br/>
                        <ProgramOffer/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default StudentDashboard;