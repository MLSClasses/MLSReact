//Dependencies
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Navbar from "./components/navbar";
import Footer from "./components/footer";
//pages
import Home from "./pages/home";
import Contact from "./pages/contact_component";
import Pricing from "./pages/pricing";
import Programs from "./pages/programs";
import StudentJob from "./pages/studentJob";
import Login from "./pages/loginpage";
import Signup from "./pages/Signuppage";
import Portal from "./pages/student/portal";
import Whatsapp_icon from "./components/whatsapp_icon";
function App() {
  return (
    <div class="body">
      <Whatsapp_icon />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/programs" element={<Programs />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/studentjob" element={<StudentJob />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/portal" element={<Portal />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
