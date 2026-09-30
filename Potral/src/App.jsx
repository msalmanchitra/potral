import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LMSPotral from "./components/LMSPotral";
import StudentPotral from "./components/StudentPotral";
import Progress from "./components/Progress"; // 1. Bas ye import add kiya hai

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LMSPotral />} />
        
        {/* Student Portal card click hone par StudentPotral.jsx khule ga */}
        <Route path="/student" element={<StudentPotral />} />
        
        {/* 2. Progress ko link karne ke liye ye Route add ki hai */}
        {/* <Route path="/progress" element={<Progress />} /> */}
        
        <Route path="/admin" element={<h1 style={{textAlign:'center', marginTop:'100px'}}>Admin Portal Page</h1>} />
        <Route path="/institution" element={<h1 style={{textAlign:'center', marginTop:'100px'}}>Institution Portal Page</h1>} /> 
      </Routes>
    </Router>
  );
}

export default App;