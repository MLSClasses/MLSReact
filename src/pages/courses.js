import React from "react";
// import image8 from "../assets/img/icon7 (1).png

// import image13 from "../assets/img/temp2.png";
// import image14 from "../assets/img/temp3.png";

import "../assets/css/index.css";
import { pc1, pc2, pc3, pc4, pc5, pc6, pc7,java } from "./mls_constants";
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
