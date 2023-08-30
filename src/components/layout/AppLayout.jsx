import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import NavBarComponent from "../accountNavbar";

const AppLayout = () => {
    return <div style={{
        // padding: '50px 0px 0px 370px'
    }}>
        <Sidebar />
        <NavBarComponent/>
        <Outlet />
    </div>;
};

export default AppLayout;
