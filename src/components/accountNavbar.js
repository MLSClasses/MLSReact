import React, { useEffect, useState } from 'react';
import '../assets/css/accountNavbar.css';
import dp from '../assets/img/PeronsonilzedLearning.png';
import icon1 from '../assets/img/icon1.png';
import icon2 from '../assets/img/icon2.png';
const NavBarComponent = (props) => {
    return (
        <nav className="full">
            <ul>
                <li className="name">Joe John</li>
                <li className="dash">Dashboard</li>
                <img className="icon1" src={icon1} />
                <img className="icon2" src={icon2} />
                <img className="dp" src={dp} />
            </ul >
        </nav >
    );
};
export default NavBarComponent;