import React from 'react';
import '../assets/css/studentNavbar.css';
import logoImg from '../assets/img/mlslogo.png'
const StudentNavbar = () => {
    return (
        <div className="navbar">
            <ul className="nav-list">
                <img className="logo" src={logoImg} />
                <li className="nav-item">Home</li>
                <li className="nav-item">Students</li>
                <li className="nav-item">Parent</li>
                <li className="nav-item">Chat</li>
                <li className="nav-item">Refer Us</li>
                <li className="nav-item">Billing</li>
            </ul>
        </div>
    );
}
export default StudentNavbar;