import React, { useEffect, useState } from 'react';
import './assets/css/navbarStyle.css';
import { logo } from './pages/mls_constants';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const NavbarPage=()=>{
    const [active, setActive] = useState('');
    useEffect(() => {
        let str= window.location.href;
        setActive(str.substring(str.lastIndexOf("/") + 1));
    }, []);
    useEffect(()=>{
        const navLink = document.querySelectorAll(".nav-link");
        navLink.forEach(n => n.addEventListener("click", closeMenu));
    },[document.querySelectorAll(".nav-link")])
    
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
    return (<header class="header">
    <nav class="navbar">
    <a href="/home">
                <img href="/home" className="logoStyle" src={logo} alt="mls logo" />
              </a>
        <ul class="nav-menu">
            <li class="nav-item">
                <Link to="/home" className={active == "home" || active == "" ? 'active nav-link' : 'nav-link'} >Home</Link>
            </li>
            <li class="nav-item">
                <Link to="/programs" className={active == "programs" ? "active nav-link" : "nav-link"} >Programs</Link>
            </li>
            <li class="nav-item">
            <Link to="/pricing" className={active == "pricing" ? "active nav-link" : "nav-link"} >Pricing</Link>
            </li>
            <li class="nav-item">
            <Link to="/studentjob" className={active == "studentjob" ? "active nav-link" : "nav-link"} >Student Corner</Link>
            </li>
            <li class="nav-item">
            <Link to="/contactus" className={active == "contactus" ? 'active nav-link' : 'nav-link'}><button class="custom-btn btn-14">Book a free trial</button></Link>
            </li>

            <li className='nav-item'>
            <Dropdown className="DrpDwn">
                  <Dropdown.Toggle variant="warning" id="dropdown-basic" style={{ width: "auto" }}>
                    Login
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item target="_blank" href="https://mlsclasses.onlineclass.site/login/">Live Classes</Dropdown.Item>
                    <Dropdown.Item target="_blank" href="https://testprep.mlsclasses.com/">Test Series</Dropdown.Item>
                    {/* <Dropdown.Item target="_blank" href="https://www.march2success.com/login/index/">Test M2S</Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown>
            </li>
            
        </ul>
        <div class="hamburger" onClick={mobileMenu}>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>
</header>
)
    
}
export default NavbarPage;