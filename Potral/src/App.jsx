import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LMSPotral from "./components/LMSPotral";
import StudentPotral from "./components/StudentPotral";
import AdminPortal from "./components/AdminPortal"; // <-- Sahi spelling
import Progress from "./components/Progress";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LMSPotral />} />
        
        <Route path="/student" element={<StudentPotral />} />
        <Route path="/admin" element={<AdminPortal />} />
        
        <Route path="/progress" element={<Progress />} />
        
        <Route path="/institution" element={<h1 style={{textAlign:'center', marginTop:'100px'}}>Institution Portal Page</h1>} /> 
      </Routes>
    </Router>
  );
}

export default App;