import React, { useEffect, useState } from "react";
import "./assets/css/navbarStyle.css";
import { logo } from "./pages/mls_constants";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import FixedHeaderStrip from "./components/headerStrip";


const NavbarPage = () => {
  const [active, setActive] = useState("");
  useEffect(() => {
    let str = window.location.href;
    setActive(str.substring(str.lastIndexOf("/") + 1));
  }, []);
  useEffect(() => {
    const navLink = document.querySelectorAll(".nav-link");
    navLink.forEach((n) => n.addEventListener("click", closeMenu));
  }, [document.querySelectorAll(".nav-link")]);

  function mobileMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  function closeMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
  return (
    <header class="header">
      <FixedHeaderStrip />
      <nav class="navbar">
        <a href="/home">
          <img href="/home" className="logoStyle" src={logo} alt="mls logo" />
        </a>
        <ul class="nav-menu">
          <li class="nav-item">
            <Link
              to="/home"
              className={
                active == "home" || active == ""
                  ? "active nav-link"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="/programs"
              className={active == "programs" ? "active nav-link" : "nav-link"}
            >
              Programs
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="/pricing"
              className={active == "pricing" ? "active nav-link" : "nav-link"}
            >
              Pricing
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="/studentjob"
              className={
                active == "studentjob" ? "active nav-link" : "nav-link"
              }
            >
              Student Corner
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="/contactus"
              className={active == "contactus" ? "active nav-link" : "nav-link"}
            >
              <button class="custom-btn btn-14">Book a free trial</button>
            </Link>
          </li>

          <li>
            <div class="dropdown">
              {/* <li class="nav-item"> */}
              <div className="nav-link ">
                <button class=" dropdownbtn custom-btn btn-14">
                  Login &nbsp;
                  <i
                    style={{ marginTop: "5px" }}
                    class="fa fa-angle-down"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
              {/* </li> */}
              <div class="dropdown-content">
                <a
                  target="_blank"
                  className="nav-link"
                  href="https://mlsclasses.onlineclass.site/login/"
                >
                  Live Classes
                </a>
                <a
                  target="_blank"
                  className="nav-link"
                  href="https://testprep.mlsclasses.com/"
                >
                  Test Series
                </a>
              </div>
            </div>
          </li>
        </ul>
        <div class="hamburger" onClick={mobileMenu}>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </header>
  );
};
export default NavbarPage;
