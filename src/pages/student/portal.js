import Navbar from "../../components/studentNavbar";
import AccountNavbar from "../../components/accountNavbar";
import "../../assets/css/portal.css";
import StudentDashboard from "./student_dashboard";
const Portal = () => {
    return (
        <div className="main-portal">
            {/* <Navbar />
            <AccountNavbar />
            <p>Student Dashboard Page</p> */}
            <StudentDashboard/>
        </div>
    );
}
export default Portal;