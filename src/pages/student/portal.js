// import '../../assets/css/portal.css';
import StudentDashboard from "./student_dashboard";
import AppLayout from "../../components/layout/AppLayout";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blank from "../Blank"; 
import NavBarComponent from "../../components/accountNavbar";
const Portal = () => {
    return (
        <div className="main-container">
           <AppLayout/>
        </div>
    );
}
export default Portal;