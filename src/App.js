//Dependencies
import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
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
import StudentDashboard from "./pages/student/student_dashboard";
import AppLayout from './components/layout/AppLayout';
import ACT_READING_WRITING from './blogs/act_reading_writing';
import banner from  "./assets/img/banner_img.jpeg"
import { act_english, act_english_conclusion, act_english_heading, act_reading_writing, act_reading_writing_conculsion, act_reading_writing_heading, act_science, act_science_conclusion, act_science_heading, sat_reading_writing, sat_reading_writing_conclusion, sat_reading_writing_heading } from './pages/mls_constants';
function App() {
  return (
    <div class="body">
      <Whatsapp_icon />
      <BrowserRouter>
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
          <Route path="/student_portal" element={<StudentDashboard />}></Route>
          <Route path="/act_reading_writing" element={<ACT_READING_WRITING banner_img={banner} headingText={act_reading_writing_heading} mainContent={act_reading_writing} conclusion={act_reading_writing_conculsion} />}></Route>
          <Route path="/act_science" element={<ACT_READING_WRITING banner_img={banner} headingText={act_science_heading} mainContent={act_science} conclusion={act_science_conclusion} />}></Route>
          <Route path="/act_english" element={<ACT_READING_WRITING banner_img={banner} headingText={act_english_heading} mainContent={act_english} conclusion={act_english_conclusion} />}></Route>
          <Route path="/act_math" element={<ACT_READING_WRITING banner_img={banner} headingText={act_english_heading} mainContent={act_english} conclusion={act_english_conclusion} />}></Route>
          <Route path="/sat_reading_writing" element={<ACT_READING_WRITING feedback={true} banner_img={banner} headingText={sat_reading_writing_heading} mainContent={sat_reading_writing} conclusion={sat_reading_writing_conclusion} />}></Route>
          <Route path="/sat_math" element={<ACT_READING_WRITING feedback={true} banner_img={banner} headingText={sat_reading_writing_heading} mainContent={sat_reading_writing} conclusion={sat_reading_writing_conclusion} />}></Route>
          {/* 👇️ only match this when no other routes match */}
          {/* <Route path="*" element={<PageNotFound />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );

}



export default App;
function PageNotFound() {
  window.location.href = "/";
  return (
    <div>
      <h2>404 Page not found</h2>
    </div>
  );
}

