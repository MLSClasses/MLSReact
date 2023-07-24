import React, { useState } from "react";
import loginimg from "../assets/img/mlslogo.png";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { useNavigate } from "react-router-dom";
import "../assets/css/Login.css";

function Loginpage() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");

  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/landing");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false); // <-- setSubmitButtonDisabled should be set to false here
        signInWithEmailAndPassword(auth, values.email, values.pass)
          .then(async (res) => {
            setSubmitButtonDisabled(false);
            sessionStorage.setItem("email", values.email);
            navigate("/");
          })
          .catch((err) => {
            setSubmitButtonDisabled(false); // <-- setSubmitButtonDisabled should be set to false here
            setErrorMsg(err.message);
            console.log("Error-", err);
          });
      });
  };

  const goto = () => {
    navigate("/Signup");
  };

  const [num, setNum] = useState(""); // <-- Move the state declaration to the top level

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setNum(data.user.email); // <-- Set the state 'num' instead of calling 'setNum'
      sessionStorage.setItem("email", data.user.email);
      navigate("/");
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-2xl p-5">
        <div className="sm:w-1/2 px-16">
          {/* Rest of the code remains unchanged */}
        </div>

        <div className="sm:block hidden w-1/2">
          <img className="rounded-2xl" src={loginimg} />
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
