import React from "react";
import web_dev from "../assets/img/icon5.png";
import sat_prep from "../assets/img/icon6.png";
// import image8 from "../assets/img/icon7 (1).png";
import python from "../assets/img/icon7.png";
import mls_logo from "../assets/img/mlslogo.png";
// import image13 from "../assets/img/temp2.png";
import image14 from "../assets/img/temp3.png";
import "../assets/css/index.css";
function render(name, poster, link) {
  const className = "course " + name;
  const image = poster;
  return (
    <div class={className}>
      <img src={image} alt={className} href={link}></img>
      <a href={link}>{name}</a>
    </div>
  );
}
function Courses() {
  return (
    <div class="courses">
      <div class="slide slide-wrapper">
        {render("SAT", python)}
        {render("Web Developement", web_dev)}
        {render("Python Programming", web_dev)}
        {render("ACT", web_dev)}
        {render("Math", web_dev)}
        {render("English", web_dev)}
        {render("Coding", web_dev)}
      </div>
    </div>
  );
}
export default Courses;
