import React, { Component, useState, useEffect } from "react";
import first_img from "../assets/img/temp4.png";
import FooterComponent from "../components/footer";
import moment from "moment-timezone";
import Whatsapp_icon from "../components/whatsapp_icon";
const ContactComponent = (props) => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    program: "",
    timezone: "",
    message: "",
  });
  const btnStyle = {
    marginTop: '1%'
  }
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const allTimeZones = [
    "America/New York(EST)",
    "America/Chicago(CST)",
    "America/Denver(MST)",
    "America/Los Angeles(PST)",
    "America/Anchorage(AKST)",
    "America/Phoenix(MST)",
    "Pacific/Honolulu(HAST)",
    "Asia/Kolkata(IST)", // IST
  ];
  const submitData = async (event) => {
    event.preventDefault();
    const { firstname, lastname, email, phone, program, timezone, message } =
      userData;
    if (
      firstname &&
      lastname &&
      email &&
      phone &&
      program &&
      timezone &&
      message
    ) {
      const res = await fetch(
        "https://mlsclasses-default-rtdb.firebaseio.com/contactDetails.json",
        {
          method: "POST",
          Headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname,
            lastname,
            email,
            phone,
            program,
            timezone,
            message,
          }),
        }
      );
      if (res) {
        setUserData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          program: "",
          timezone: "",
          message: "",
        });
        alert(
          "Your Feedback/Query would be shortly addressed by our team, keep an eye on your mail"
        );
      } else {
        alert("Please fill the data properly");
      }
    } else {
      alert("Please fill the data properly");
    }
  };
  useEffect(() => {
    // Fetch the list of time zones and update the userData with the first time zone from the list
    setUserData((prevUserData) => ({
      ...prevUserData,
      timezone: allTimeZones[0], // Set the first time zone as the default selected value
    }));
  }, []);

  return (
    <div className="flex-wrapper">
      <Whatsapp_icon />
      <div class="f-template-contact">
        <img src={first_img} alt="first Template" />
      </div>

      <div class="contact">
        <div class="contact-sub" method="POST">
          <div class="contact-h">We're here to help you!</div>
          <div class="contact-sub-h">
            Please share the required details below related to your inquiry.
          </div>

          <div class="contact-input">
            <div class="contact-sub-input">
              <label for="">
                First Name<span class="star-cl-red">*</span>
              </label>
              <input
                type="text"
                value={userData.firstname}
                name="firstname"
                id=""
                onChange={postUserData}
                placeholder="First Name"
              />
            </div>

            <div class="contact-sub-input">
              <label for="">
                Last Name<span class="star-cl-red">*</span>
              </label>
              <input
                type="text"
                value={userData.lastname}
                name="lastname"
                id=""
                onChange={postUserData}
                placeholder="Last Name"
              />
            </div>

            <div class="contact-sub-input">
              <label for="">
                E-mail<span class="star-cl-red">*</span>
              </label>
              <input
                type="text"
                value={userData.email}
                name="email"
                id=""
                onChange={postUserData}
                placeholder="Email"
              />
            </div>

            <div class="contact-sub-input">
              <label for="">
                Phone Number<span class="star-cl-red">*</span>
              </label>
              <input
                type="text"
                value={userData.phone}
                name="phone"
                id=""
                onChange={postUserData}
                placeholder="Phone"
              />
            </div>

            <div class="contact-sub-input">
              <label for="">Program</label>
              <input
                type="text"
                value={userData.program}
                name="program"
                id=""
                onChange={postUserData}
                placeholder="Program"
              />
            </div>

            <div class="contact-sub-input">
              <label for="">TimeZone</label>
              <select
                name="timezone"
                value={userData.timezone}
                id=""
                onChange={postUserData}
              >
                {allTimeZones.map((zone, index) => (
                  <option key={index} value={zone}>
                    {zone}
                  </option>
                ))}
              </select>
            </div>

            <div class="contact-sub-input">
              <label for="">Message</label>
              <textarea
                name="message"
                value={userData.message}
                id=""
                onChange={postUserData}
                cols="30"
                rows="10"
                placeholder="Enter Message"
              ></textarea>
            </div>
          </div>

          <div onClick={submitData} class="contact-btn" style={btnStyle}>
            <button>Submit</button>
          </div>
        </div>
      </div>
      <br /><br />
      <FooterComponent />
    </div >
  );
};
export default ContactComponent;
