import Navbar from "../../components/studentNavbar";
import AccountNavbar from "../../components/accountNavbar";
import '../../assets/css/portal.css';
const Portal = () => {
    return (
        <div className="container">
            <Navbar />
            <div className="blank-column"></div>
            <div className="content">
                <AccountNavbar />
            </div>
        </div>
    );
}
export default Portal;