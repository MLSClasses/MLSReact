import React from 'react';
import '../assets/css/studentNavbar.css';
import logoImg from '../assets/img/mlslogo.png'
const StudentNavbar = () => {
    const renderComponents=(param)=>{
        switch(param){
            case 1:

                break;
            case 2:
                break;
            
        }
    }
    return (
        <div className="navbar">
            <ul className="nav-list">
                <img className="logo" src={logoImg} />
                <li className="nav-item" onClick={renderComponents(1)}>Home</li>
                <li className="nav-item" onClick={renderComponents(2)}>Students</li>
                <li className="nav-item" onClick={renderComponents(3)}>Parent</li>
                <li className="nav-item" onClick={renderComponents(4)}>Chat</li>
                <li className="nav-item" onClick={renderComponents(5)}>Refer Us</li>
                <li className="nav-item" onClick={renderComponents(6)}>Billing</li>
            </ul>
        </div>
    );
}
export default StudentNavbar;