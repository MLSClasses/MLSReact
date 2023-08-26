import React from "react";
import web_dev from "../assets/img/icon5.png";
import sat_prep from "../assets/img/icon6.png";
// import image8 from "../assets/img/icon7 (1).png";
import python from "../assets/img/icon7.png";
import java from "../assets/img/java.jpeg";
import mls_logo from "../assets/img/mlslogo.png";
// import image13 from "../assets/img/temp2.png";
import image14 from "../assets/img/temp3.png";
import pc1 from '../assets/img/sat.jpeg';
import pc2 from '../assets/img/act.jpeg';
import pc3 from '../assets/img/ap.jpeg';
import pc4 from '../assets/img/amc.png';
import pc5 from '../assets/img/math.jpeg';
import pc6 from '../assets/img/science.jpeg';
import pc7 from '../assets/img/ela.jpeg';
import "../assets/css/index.css";
function render(name, poster, link) {
  const className = "course " + name;
  const image = poster;
  return (
    <div class={className}>
      <img src={image} alt={className} href={link}></img>
      {/* <a href={link}>{name}</a> */}
    </div>
  );
}
function Courses() {
  return (
    <div class="courses">
      <div class="slide slide-wrapper">
        {render("SAT", pc1)}
        {render("ACT", pc2)}
        {render("AP", pc3)}
        {render("AMC", pc4)}
        {render("Math", pc5)}
        {render("Science", pc6)}
        {render("ELA", pc7)}
        {render("Coding", java)}
      </div>
    </div>
  );
}
export default Courses;
