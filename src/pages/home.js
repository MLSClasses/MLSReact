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
import image7 from "../assets/img/icon6.png";
import image9 from "../assets/img/icon7.png";
import image11 from "../assets/img/mlslogo.png";
import image13 from "../assets/img/temp2.png";
import temp4 from "../assets/img/temp4.png";
import slider1 from "../assets/img/1.jpg";
import slider2 from "../assets/img/4.jpg";
import slider3 from "../assets/img/11.jpg";
import slider4 from "../assets/img/12.jpg";
import slider5 from "../assets/img/14.jpg";
import slider6 from "../assets/img/15.jpg";
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
import { redirect, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar";
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
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Add this line to enable autoplay
    autoplaySpeed: 4000,
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
        <img src={props.image} alt="Zoom" />
        <p>
          {labelling[0]}
          <br />
          {labelling[1]}
        </p>
      </div>
    );
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  const FreeClassButton = () => {
    return (
      <div class="free_class">
        <button onClick={handleClick}>Book 1 Week Free Class</button>
      </div>
    );
  };
  const myStyle = {
    display: "flex",
    justifyContent: "center",
  };
  const [youtubeID] = useState("XpScgwRKpgs");
  console.log(`https://youtube.com/embed/${youtubeID}?autoplay=0`);
  return (
    <div>
      <Navbar />
      <Helmet>
        <meta name="google-site-verification" content="bhOOEzJ-8aaGF_FM3O7nKH4GgUpXIhIk0kr_tPC9FTY" />
        <meta name="title" content="Live 1:1 Online Classes for Kids  (Grade 2-12) | MLS Classes" />
        <meta name="description" content="MLS Classes offers Live, Online Math, English, Science, Coding, SAT, ACT, AP, SSAT, STAAR, and AMC classes for students in grades 2-12. The programs of MLS Classes are specifically designed to accelerate your child's academic progress, programs, GUARANTEED. Book a FREE TRIAL now!" />
        <meta name="keywords" content="MLS Classes, MLS, MLS Classes offers Live, Online Math, English, Science, Coding, SAT, ACT, AP, SSAT, STAAR, and AMC classes for students in grades 2-12. These programs are specifically designed to accelerate your child's academic progress, programs, GUARANTEED." />
        <title>Live 1:1 Online Classes for Kids  (Grade 2-12) | MLS Classes</title>
      </Helmet>
      <div className="Slideshow">
        <Slider {...settings}>
          <div className="f-template" style={myInlineStyle}>
            <img src={slider1} alt="first Template" />
          </div>
          <div className="f-template">
            <img src={slider2} alt="first Template" />
          </div>
          <div className="f-template">
            <img src={slider3} alt="first Template" />
          </div>
          <div className="f-template">
            <img src={slider4} alt="first Template" />
          </div>
          <div className="f-template">
            <img src={slider5} alt="first Template" />
          </div>
          <div className="f-template">
            <img src={slider6} alt="first Template" />
          </div>
        </Slider>
      </div>
      <br />
      <br />
      <div className="find-live">
        <div className="brfdesc">
          <a href="#">
            MLS Classes offers Live, Online Math, English, Science, Coding, SAT,
            ACT, AP, SSAT, STAAR, and AMC classes for students in grades 2-12.
            These programs are specifically designed to accelerate your child's
            academic progress, programs , GUARANTEED.
          </a>
        </div>
        <div className="width-line-space">
          <div className="yellowBtn">&nbsp;</div>
        </div>
        <br />
        <div className="midBanner">
          <h4>Our Programs For 2-12</h4>
        </div>
      </div>
      <div style={myStyle}>
        <FreeClassButton />
      </div>
      <div className="boxes">
        <div className="box">
          <h2>MATH</h2>
          <p>MLS Classes provide unique learning experiences that go above and beyond standard math instruction, fostering a deeper understanding of mathematical concepts and encouraging critical thinking.</p>
        </div>
        <div className="box">
          <h2>SCIENCE</h2>
          <p>MLS Classes provide unique learning experiences that go above and beyond standard math instruction, fostering a deeper understanding of mathematical concepts and encouraging critical thinking.</p>
        </div>
        <div className="box">
          <h2>ENGLISH(ELA)</h2>
          <p>Boost ELA skills with expert instructors, immersive lessons, and engaging activities. MLS Classes curriculum fosters confidence in reading, writing, grammar, and literature analysis. Excel in language with us!</p>
        </div>
        <div className="box">
          <h2>CODING</h2>
          <p>Through MLS Classes interactive curriculum, students gain hands-on experience with coding languages, algorithmic thinking, and problem-solving techniques, setting them on a path to becoming skilled and creative coders.</p>
        </div>
        <div className="box">
          <h2>SAT</h2>
          <p>1500+ Score Mastery: Transform Math, ELA Skills through Our SAT Classes! Join MLS Classes to elevate your SAT experience and embrace a new level of learning.</p>
        </div>
        <div className="box">
          <h2>ACT</h2>
          <p>Elevate your ACT preparation with a unique approach that goes beyond the surface, 35+Score Mastery. Join MLS Classes to experience ACT preparation that transforms how you learn and conquer challenges.</p>
        </div>
        <div className="box">
          <h2>AP</h2>
          <p>Unlock a 5/5 score with our exceptional AP preparation. . Join MLS Classes to elevate your AP journey and secure a 5/5 score that sets you apart.</p>
        </div>
        <div className="box">
          <h2>AMC</h2>
          <p>Achieve a perfect AMC score with our unparalleled preparation.  Join MLS Classes to elevate your AMC journey and secure a score that opens doors to mathematical excellence.</p>
        </div>
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
      <div style={myStyle}>
        <FreeClassButton />
      </div>
      <div className="brand-moto">
        <div className="brand-moto-message">
          <h2>Why the MLS Classes?</h2>
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
          className="YoutubeBox"
          src={`https://www.youtube.com/embed/${youtubeID}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          crossOrigin="anonymous"
        ></iframe>
      </div>
      <div className="benefits-container">
        <h1 style={{ "textAlign": "center" }}>Our Benefits
          <span style={{ "display": "block" }}><h2>Benefits of MLS Classes Online Training for Grades(2-12) | MLS Classes</h2></span>
        </h1>




        <div className="benefits">
          <A_benefit
            className="bnfts"
            image={ExpertInstructors}
            label="Expert Instructors"
          />
          <A_benefit
            className="bnfts"
            image={Per_learning}
            label="Personalized Learning"
          />
          <A_benefit
            className="bnfts"
            image={Comp_Programs}
            label="Comprehensive Programs"
          />
          <A_benefit
            className="bnfts"
            image={Proven_results}
            label="Proven Results"
          />
          <A_benefit
            className="bnfts"
            image={Flexible}
            label="Flexible Scheduling"
          />
          <A_benefit
            className="bnfts"
            image={ChallengingEnv}
            label="Challenging Enviornment"
          />
          <A_benefit
            className="bnfts"
            image={Confidence_Building}
            label="Confidence Building"
          />
          <A_benefit
            className="bnfts"
            image={Lifelong_Skills}
            label="Lifelong Skills"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="parents-love">
        <CommentsSlide />
      </div>
      <br />
      <br />
      <br />
      <div style={myStyle}>
        <FreeClassButton />
      </div>
      <Footer />
    </div>
  );
}
export default Index;
