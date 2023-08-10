import React from "react";
import '../assets/css/box.css';
const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.subject}</h1>
      <p>{props.content}</p>
    </div>
  );
};

/* background: rgba(0, 158, 255, 0.21)*/
export default Box;
