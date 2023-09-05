//Dependencies
import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route,useNavigate} from "react-router-dom";
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
function App() {
  let mainContent=[
    {title:"Introduction of ACT Reading & Writing",content:"The ACT Reading & Writing section assesses a student's ability to comprehend and analyze written text while also evaluating their writing skills. This section aims to measure a student's proficiency in reading comprehension, analysis, and effective written communication."},
    {title:"Importance of ACT Reading & Writing:",content:"The ACT Reading & Writing section is of paramount importance as it reflects a student's aptitude in comprehending and responding to complex written material. Strong reading and writing skills are essential not only for academic success but also for effective communication in various personal and professional scenarios."},
    {title:"Benefits to Students:",content:"Scoring well on the ACT Reading & Writing section can significantly impact a student's college application. A high score demonstrates advanced literacy skills and the ability to convey ideas coherently. Moreover, excelling in this section showcases a student's adaptability and proficiency in crucial skills for college-level coursework and beyond."},
    {title:"Parts Included in ACT Reading & Writing:",content:"The ACT Reading & Writing section comprises two main components:Reading: This component presents passages from various genres and assesses a student's ability to comprehend, analyze, and draw conclusions from the text.Writing & English Language Usage: This component evaluates a student's writing skills, including grammar, punctuation, sentence structure, and rhetorical strategies."},
    {title:"ACT Reading & Writing Prep Plan for Students:",content:"A comprehensive preparation plan for the ACT Reading & Writing section might include the following steps:Practice Reading: Engage in regular reading of diverse texts to improve comprehension skills and expand vocabulary.Analyze Passages: Develop the ability to dissect passages, identify main ideas, and extract key information.Writing Practice: Enhance writing skills by composing essays, focusing on structure, clarity, and effective argumentation.Grammar Review: Refresh grammar rules and usage to strengthen writing and language skills.Time Management: Practice timed reading and writing exercises to manage the test's time constraints effectively."},
    {title:"How to Prepare for the ACT Reading & Writing Test:",content:"The ACT Reading & Writing section is suitable for any student aspiring to pursue higher education. The skills tested in this section are applicable across a wide range of academic disciplines."},
    {title:"MLS Classes' Role in ACT Reading & Writing Tutoring:",content:"MLS Classes offers specialized tutoring for the ACT Reading & Writing section to help students reach their full potential. Their experienced tutors provide personalized instruction, targeted practice, and valuable strategies for both reading comprehension and effective writing. With a tailored approach, MLS Classes aims to boost students' confidence and competence in this critical section."},
    {title:"Student Feedback of ACT Reading & Writing Tutoring by MLS Classes:",content:"Students who have undergone ACT Reading & Writing tutoring with MLS Classes praise the tutors' expertise, encouraging approach, and effective teaching techniques. Many students report feeling better equipped to analyze complex passages and write structured, coherent essays after receiving tutoring from MLS Classes."},
    
  ];

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
          <Route path="/student_portal" element={<StudentDashboard/>}></Route>
          <Route path="/act_reading_writing" element={<ACT_READING_WRITING headingText="Excelling in ACT Reading & Writing with MLS Classes: A Comprehensive Guide" mainContent={mainContent} conclusion="Mastering the ACT Reading & Writing section is a significant step toward achieving success on the ACT. With the guidance and resources provided by MLS Classes, you can confidently prepare for this section, refine your reading and writing skills, and achieve an exceptional score. Embark on your journey to success today with MLS Classes' comprehensive ACT Reading & Writing test prep program." />}></Route>
         {/* 👇️ only match this when no other routes match */}
         {/* <Route path="*" element={<PageNotFound />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );

}



export default App;
function PageNotFound() {
  window.location.href="/";
    return (
        <div>
              <h2>404 Page not found</h2>
                  </div>
                    );
                    }

