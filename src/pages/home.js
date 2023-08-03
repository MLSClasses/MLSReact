import React, { useEffect, useState } from "react";
import "../assets/css/index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg from "../assets/img/bg.jpg";
import image1 from "../assets/img/icon1.png";
import image2 from "../assets/img/icon2.png";
import image3 from "../assets/img/icon3.png";
import image4 from "../assets/img/icon4.png";
import image5 from "../assets/img/icon5.png";
import image6 from "../assets/img/icon6 (1).png";
import image7 from "../assets/img/icon6.png";
import image8 from "../assets/img/icon7 (1).png";
import image9 from "../assets/img/icon7.png";
import image11 from "../assets/img/mlslogo.png";
import image13 from "../assets/img/temp2.png";
import image14 from "../assets/img/temp3.png";
import temp4 from "../assets/img/temp4.png";
import slider1 from "../assets/img/slider1.jpg";
import slider2 from "../assets/img/slider2.jpg";
import slider3 from "../assets/img/slider3.png";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "../components/footer";
import Whatsapp_icon from "../components/whatsapp_icon";
import Courses from "./courses.js";
import ChallengingEnv from "../assets/img/ChallengingEnvironment.png";
import Comp_Programs from "../assets/img/Comprehensive_Programs.png";
import Confidence_Building from "../assets/img/Confidence_Building.png";
import ExpertInstructors from "../assets/img/ExpertInstructors.png";
import Flexible from "../assets/img/Flexible_Scheduling.png";
import Lifelong_Skills from "../assets/img/Lifelong_Skills.png";
import Per_learning from "../assets/img/PeronsonilzedLearning.png";
import Proven_results from "../assets/img/Proven_Results.png";
import CommentsSlide from "../components/comments_slide";
import Box from "../components/Box";
function Index() {
  const myInlineStyle = {
    fontSize: "16px",
    color: "blue",
    fontWeight: "bold",
    size: "100px",
    // Add more CSS properties as needed
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
    });
  }, []);
  const A_benefit = (props) => {
    const labelling = props.label.split(" ");
    return (
      <div data-aos="zoom-in" className="benefit">
        <img src={props.image} />
        <p>
          {labelling[0]}
          <br />
          {labelling[1]}
        </p>
      </div>
    );
  };
  const [youtubeID] = useState("XpScgwRKpgs");
  console.log(`https://youtube.com/embed/${youtubeID}?autoplay=0`);
  return (
    <div>
      <div className="Slideshow">
        <Slider {...settings}>
          <div className="f-template" style={myInlineStyle}>
            <img src={slider3} alt="first Template" />
          </div>
          <div className="f-template">
            <img src={slider1} alt="first Template" />
          </div>
          <div className="f-template">
            <img src={slider2} alt="first Template" />
          </div>
          <div className="f-template">
            <img src={slider1} alt="first Template" />
          </div>
          <div className="f-template">
            <img src={slider2} alt="first Template" />
          </div>
        </Slider>
      </div>
      <br /><br />
      <div className="find-live">
        <div>
          <a href="#">
            MLS Classes offers Live, Online Math, Science, Coding, SAT, ACT, AP,
            SSAT, STAAR, and AMC for students in grades 2-12. These programs are
            specifically designed to accelerate your child's academic progress,
            programs , GUARANTEED.
          </a>
        </div>
        <div className="width-line-space">
          <div className="yellowBtn">&nbsp;</div>
        </div>
        <br />
        <div className="midBanner">
          <h4 >Our Programs For 2-12</h4>
        </div>
      </div>
      <div className="boxes">
        <Box className="info"
          content="We provide unique learning experiences that go above and beyond standard math instruction, fostering a deeper understanding of mathematical concepts and encouraging critical thinking."
          subject="MATH"
        />
        <Box className="info"
          content="We provide unique learning experiences that go above and beyond standard math instruction, fostering a deeper understanding of mathematical concepts and encouraging critical thinking."
          subject="SCIENCE"
        />
        <Box className="info"
          content="Through our interactive curriculum, students gain hands-on experience with coding languages, algorithmic thinking, and problem-solving techniques, setting them on a path to becoming skilled and creative coders."
          subject="CODING"
        />
        <Box className="info"
          content="Through our interactive curriculum, students gain hands-on experience with coding languages, algorithmic thinking, and problem-solving techniques, setting them on a path to becoming skilled and creative coders."
          subject="TEST-PREP"
        />
      </div>
      <div className="features">
        <div className="features-h">Main Features</div>

        <div className="features-sub">
          <div className="features-img" data-aos="fade-right">
            <img src={image13} alt="features img" />
          </div>
          <div className="features-content">
            <div className="features-content-2" data-aos="fade-left">
              <div className="features-content-img">
                <img src={image1} alt="img" />
              </div>
              <div className="features-content-text">
                <a href="#">1:1 Dedicated Classes</a>
              </div>
            </div>

            <div className="features-content-2" data-aos="fade-left">
              <div className="features-content-img">
                <img src={image2} alt="img" />
              </div>
              <div className="features-content-text">
                <a href="#">Lowest Class $ per cost</a>
              </div>
            </div>

            <div className="features-content-2" data-aos="fade-left">
              <div className="features-content-img">
                <img src={image3} alt="img" />
              </div>
              <div className="features-content-text">
                <a href="#">Master Teachers </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="popular">
        <div className="popular-head">
          <div className="popular-h">Popular Courses</div>
        </div>
        <Courses />
      </div>

      <div className="brand-moto">
        <div className="brand-moto-message">
          <h1>Why the MLS Classes?</h1>
          <p>
            MLS Classes: Where Personalized Learning Meets Excellence! Our
            highly qualified teachers use expertly crafted curricula tailored to
            individual students, ensuring a perfect fit for their needs. With
            flexible online programs, your child will flourish academically and
            carry that success beyond the classroom.
          </p>
        </div>
        <iframe
          poster={image11}
          src={`https://www.youtube.com/embed/${youtubeID}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          crossOrigin="anonymous"
        ></iframe>
      </div>
      <div className="benefits-container">
        <h1>Our Benefits</h1>
        <div className="benefits">
          <A_benefit image={ExpertInstructors} label="Expert Instructors" />
          <A_benefit image={Per_learning} label="Personalized Learning" />
          <A_benefit image={Comp_Programs} label="Comprehensive Programs" />
          <A_benefit image={Proven_results} label="Proven Results" />
          <A_benefit image={Flexible} label="Flexible Scheduling" />
          <A_benefit image={ChallengingEnv} label="Challenging Enviornment" />
          <A_benefit image={Confidence_Building} label="Confidence Building" />
          <A_benefit image={Lifelong_Skills} label="Lifelong Skills" />
        </div>
      </div>
      <br /><br /><br />
      <div className="parents-love">
        <CommentsSlide />
      </div>
      <br /><br /><br />
      <Footer />
    </div >
  );
}
export default Index;
