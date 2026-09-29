import { BrowserRouter, Routes, Route } from "react-router-dom";
import LMSPotral from "./components/LMSPotral";
import StudentPotral from "./components/StudentPotral";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LMSPotral />} />
        
        {/* Student Portal card click hone par StudentPotral.jsx khule ga */}
        <Route path="/student" element={<StudentPotral />} />
        
        <Route path="/admin" element={<h1 style={{textAlign:'center', marginTop:'100px'}}>Admin Portal Page</h1>} />
        <Route path="/institution" element={<h1 style={{textAlign:'center', marginTop:'100px'}}>Institution Portal Page</h1>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;