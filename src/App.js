//Dependencies
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Navbar from './components/navbar';
import Footer from './components/footer';
//pages
import Home from './pages/home';
import Courses from './pages/courses';
import Contact from './pages/contact_component';
import Pricing from './pages/pricing';
import Programs from './pages/programs';
import StudentJob from './pages/studentJob';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="courses" element={<Courses />} />
          <Route path="/programs" element={<Programs />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/studentjob" element={<StudentJob />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
