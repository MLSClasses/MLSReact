import React from "react";
import NavbarPage from "../navbarComponent";
import { Helmet } from "react-helmet";
import FooterComponent from "../components/footer";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

const HeaderSection = () => (
  <Container fluid className="bg-primary text-white py-4 golden">
    <Row className="justify-content-center">
      <Col xs={12} md={8} className="text-center">
        <h1>About MLS Classes</h1>
        <p>Personalized Online Learning for Grades 2-12</p>
      </Col>
    </Row>
  </Container>
);

const MissionSection = () => (
  <Container className="my-5">
    <Row className="justify-content-center">
      <Col xs={12} md={8}>
        <h2 className="text-center mb-4">Our Mission</h2>
        <p>
          At MLS Classes, we are committed to delivering exceptional educational
          experiences through our live, 1:1 online classes. Our programs are
          tailored to meet the unique needs of each student, ensuring they
          achieve their academic goals and beyond.
        </p>
      </Col>
    </Row>
  </Container>
);

const ProgramsSection = () => (
  <Container className="my-5">
    <Row className="justify-content-center">
      <Col xs={12} md={8}>
        <h2 className="text-center mb-4">Our Programs</h2>
        <ul>
          <li>Math</li>
          <li>English</li>
          <li>Science</li>
          <li>Coding</li>
          <li>SAT, ACT, AP, SSAT, STAAR, and AMC Test Prep</li>
        </ul>
      </Col>
    </Row>
  </Container>
);

const WhyChooseUsSection = () => (
  <Container className="my-5">
    <Row className="justify-content-center">
      <Col xs={12} md={8}>
        <h2 className="text-center mb-4">Why Choose MLS Classes?</h2>
        <ul>
          <li>
            Expert Instructors: Our teachers are highly qualified and
            experienced in their respective fields.
          </li>
          <li>
            Personalized Learning: Each student receives customized lessons that
            cater to their individual learning style and pace.
          </li>
          <li>
            Flexible Scheduling: We offer flexible class timings to fit your
            busy schedule.
          </li>
          <li>
            Proven Results: Our programs are designed to deliver measurable
            academic improvement.
          </li>
        </ul>
      </Col>
    </Row>
  </Container>
);

const ContactUsSection = () => (
  <Container className="my-5">
    <Row className="justify-content-center">
      <Col xs={12} md={8}>
        <h2 className="text-center mb-4">Contact Us</h2>
        <p>
          If you have any questions or would like to learn more about our
          programs, please contact us at:
        </p>
        <ul>
          <li>Phone: +91 9649549754 (available on WhatsApp)</li>
          <li>
            Email:{" "}
            <a href="mailto:admission@mlsclasses.com">
              admission@mlsclasses.com
            </a>{" "}
            or{" "}
            <a href="mailto:support@mlsclasses.com">support@mlsclasses.com</a>
          </li>
          <li>
            Website: <a href="https://mlsclasses.com/contactus">Contact Us</a>
          </li>
        </ul>
      </Col>
    </Row>
  </Container>
);

function About() {
  return (
    <>
      <div style={{ marginTop: "2rem" }}>
        <NavbarPage />
      </div>
      <Helmet>
        <meta
          name="google-site-verification"
          content="bhOOEzJ-8aaGF_FM3O7nKH4GgUpXIhIk0kr_tPC9FTY"
        />
        <meta
          name="title"
          content="Live 1:1 Online Classes for Kids  (Grade 2-12) | MLS Classes"
        />
        <meta
          name="description"
          content="MLS Classes offers Live, Online Math, English, Science, Coding, SAT, ACT, AP, SSAT, STAAR, and AMC classes for students in grades 2-12. The programs of MLS Classes are specifically designed to accelerate your child's academic progress, programs, GUARANTEED. Book a FREE TRIAL now!"
        />
        <meta
          name="keywords"
          content="MLS Classes, MLS, MLS Classes offers Live, Online Math, English, Science, Coding, SAT, ACT, AP, SSAT, STAAR, and AMC classes for students in grades 2-12. These programs are specifically designed to accelerate your child's academic progress, programs, GUARANTEED."
        />
        <title>
          Live 1:1 Online Classes for Kids (Grade 2-12) | MLS Classes
        </title>
      </Helmet>
      <div style={{ marginTop: "15rem" }}>
        <HeaderSection />
        <MissionSection />
        <ProgramsSection />
        <WhyChooseUsSection />
        <ContactUsSection />
      </div>
      <FooterComponent />
    </>
  );
}

export default About;
