import React, { useEffect, useState } from "react";
import "../assets/css/index.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
import slider1 from '../assets/img/slider1.jpg'
import slider2 from '../assets/img/slider2.jpg'
import slider3 from '../assets/img/slider3.png'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Whatsapp_icon from "../components/whatsapp_icon";
import Courses from "./courses.js";
function Index() {
  const myInlineStyle = {
    fontSize: '16px',
    color: 'blue',
    fontWeight: 'bold',
    size: '100px'
    // Add more CSS properties as needed
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
    });
  }, []);
  const [youtubeID] = useState("XpScgwRKpgs");
  console.log(`https://youtube.com/embed/${youtubeID}?autoplay=0`);
  return (
    <div>
      <Whatsapp_icon />
      <Navbar />
      <div className="Slideshow">
        <Slider {...settings}>
          <div class="f-template" style={myInlineStyle}>
            <img src={slider1} alt="first Template" />
          </div>
          <div class="f-template">
            <img src={slider2} alt="first Template" />
          </div>
          <div class="f-template">
            <img src={slider3} alt="first Template" />
          </div>
          <div class="f-template">
            <img src={slider1} alt="first Template" />
          </div>
          <div class="f-template">
            <img src={slider2} alt="first Template" />
          </div>
        </Slider>
      </div>
      <div class="f-template">
        <img src={image14} alt="first Template" />
      </div>
      <div class="find-live">
        <div>
          <a href="#">
            MLS Classes offers Live, Online Math, Science, Coding, SAT, ACT, AP,
            SSAT, STAAR, and AMC for students in grades 2-12. These programs are
            specifically designed to accelerate your child's academic progress,
            programs , GUARANTEED.
          </a>
        </div>
        <div class="width-line-space">
          <div class="width-line">&nbsp;</div>
        </div>
      </div>
      <div class="our-programs">
        <div class="our-programs-h">Our Programs For 2-12 </div>

        <div class="our-programs-div">
          <div class="our-programs-sub-div" data-aos="flip-up">
            <div class="our-programs-round"></div>
            <div class="our-programs-text">
              <div class="our-programs-text-h">MATH</div>
              <div class="our-programs-subtext">
                We provide unique learning experiences that go above and beyond
                standard math instruction, fostering a deeper understanding of
                mathematical concepts and encouraging critical thinking.
              </div>
            </div>
          </div>

          <div class="our-programs-sub-div" data-aos="flip-up">
            <div class="our-programs-round"></div>
            <div class="our-programs-text">
              <div class="our-programs-text-h">SCIENCE</div>
              <div class="our-programs-subtext">
                Our science programs empower children to explore various
                scientific disciplines, develop problem-solving skills, and
                deepen their understanding of scientific concepts, setting them
                on a path of scientific excellence.
              </div>
            </div>
          </div>

          <div class="our-programs-sub-div" data-aos="flip-up">
            <div class="our-programs-round"></div>
            <div class="our-programs-text">
              <div class="our-programs-text-h">CODING</div>
              <div class="our-programs-subtext">
                Through our interactive curriculum, students gain hands-on
                experience with coding languages, algorithmic thinking, and
                problem-solving techniques, setting them on a path to becoming
                skilled and creative coders.
              </div>
            </div>
          </div>

          <div class="our-programs-sub-div" data-aos="flip-up">
            <div class="our-programs-round"></div>
            <div class="our-programs-text">
              <div class="our-programs-text-h">TEST - PREP</div>
              <div class="our-programs-subtext">
                Through our interactive curriculum, students gain hands-on
                experience with coding languages, algorithmic thinking, and
                problem-solving techniques, setting them on a path to becoming
                skilled and creative coders.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="features">
        <div class="features-h">Main Features</div>

        <div class="features-sub">
          <div class="features-img" data-aos="fade-right">
            <img src={image13} alt="features img" />
          </div>
          <div class="features-content">
            <div class="features-content-2" data-aos="fade-left">
              <div class="features-content-img">
                <img src={image1} alt="img" />
              </div>
              <div class="features-content-text">
                <a href="#">1:1 Dedicated Classes</a>
              </div>
            </div>

            <div class="features-content-2" data-aos="fade-left">
              <div class="features-content-img">
                <img src={image2} alt="img" />
              </div>
              <div class="features-content-text">
                <a href="#">Lowest Class $ per cost</a>
              </div>
            </div>

            <div class="features-content-2" data-aos="fade-left">
              <div class="features-content-img">
                <img src={image3} alt="img" />
              </div>
              <div class="features-content-text">
                <a href="#">Master Teachers </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="popular">
        <div class="popular-head">
          <div class="popular-h">Popular Courses</div>
          {/* <div class="popular-btn">
            <div>
              <a href="#" class="popular-btn-active">
                All
              </a>
            </div>
            <div>
              <a href="#">Popularity</a>
            </div>
            <div>
              <a href="#">Trending</a>
            </div>
            <div>
              <a href="#">Feature</a>
            </div>
          </div> */}
        </div>
        <Courses />
      </div>

      <div className="brand-moto">
        <h1>OUR BRAND</h1>
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
      <div class="benefits">
        <div class="benefits-h">OUR BENEFITS</div>

        <div class="benefits-container">
          <div data-aos="zoom-in">
            <img src={image4} alt="img" />
            <div>Personalized Attention</div>
          </div>

          <div data-aos="zoom-in">
            <img src={image4} alt="img" />
            <div>Quickened Learning Trajectory</div>
          </div>

          <div data-aos="zoom-in">
            <img src={image4} alt="img" />
            <div>Improved Academic Performance</div>
          </div>

          <div data-aos="zoom-in">
            <img src={image4} alt="img" />
            <div>Confidence Boost</div>
          </div>

          <div data-aos="zoom-in">
            <img src={image4} alt="img" />
            <div>Clearing Doubts</div>
          </div>

          <div data-aos="zoom-in">
            <img src={image4} alt="img" />
            <div>Advanced Learning</div>
          </div>

          <div data-aos="zoom-in">
            <img src={image4} alt="img" />
            <div>Exam Preparation</div>
          </div>

          <div data-aos="zoom-in">
            <img src={image4} alt="img" />
            <div>Subject Specialization</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Index;
