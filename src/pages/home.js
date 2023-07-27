import React, { useEffect, useState } from "react";
import "../assets/css/index.css";
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
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/navbar";
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
function Index() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
    });
  }, []);
  const [youtubeID] = useState("atOfb83gU-w");
  console.log(`https://youtube.com/embed/${youtubeID}?autoplay=0`);
  return (
    <div>
      <Whatsapp_icon />
      <Navbar />
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
        <div class="brand-moto-message">
          <h1>Why the 98th Percentile?</h1>
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
      <div class="benefits">
        <div class="benefits-h">OUR BENEFITS</div>

        <div class="benefits-container">
          <div data-aos="zoom-in">
            <img src={ExpertInstructors} alt="img" />
            <div>
              Expert
              <br />
              Instructors
            </div>
          </div>

          <div data-aos="zoom-in">
            <img src={Per_learning} alt="img" />
            <div>
              Personalized
              <br />
              Learning
            </div>
          </div>

          <div data-aos="zoom-in">
            <img src={Comp_Programs} alt="img" />
            <div>
              Comprehensive
              <br />
              Programs
            </div>
          </div>

          <div data-aos="zoom-in">
            <img src={Proven_results} alt="img" />
            <div>
              Proven
              <br />
              Results
            </div>
          </div>

          <div data-aos="zoom-in">
            <img src={Flexible} alt="img" />
            <div>
              Flexible
              <br />
              Scheduling
            </div>
          </div>

          <div data-aos="zoom-in">
            <img src={ChallengingEnv} alt="img" />
            <div>
              Challenging
              <br />
              Environment
            </div>
          </div>

          <div data-aos="zoom-in">
            <img src={Confidence_Building} alt="img" />
            <div>
              Confidence
              <br />
              Building
            </div>
          </div>
          <div data-aos="zoom-in">
            <img src={Lifelong_Skills} alt="img" />
            <div>
              Lifelong
              <br />
              Skills
            </div>
          </div>
        </div>
      </div>
      <div class="parents-love">
        <CommentsSlide />
      </div>
      <Footer />
    </div>
  );
}
export default Index;
