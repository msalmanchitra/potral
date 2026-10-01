import { useState } from "react";
import "./AdminPotral.css";
import { FaSearch, FaEye } from "react-icons/fa";

const AdminPotral = () => {
  const [activeTab, setActiveTab] = useState("Students");

  const students = [
    { name: "Muhammad Saad", roll: "776685", email: "saad.khi@gmail.com" },
    { name: "Ahmed Khan", roll: "776686", email: "ahmed.khan@gmail.com" },
    { name: "Ali Raza", roll: "776687", email: "ali.raza@gmail.com" },
    { name: "Sara Ali", roll: "776688", email: "sara.ali@gmail.com" },
    { name: "Fatima Javed", roll: "776689", email: "fatima@gmail.com" },
    { name: "Hassan Shah", roll: "776690", email: "hassan@gmail.com" },
    { name: "Ayesha Noor", roll: "776691", email: "ayesha@gmail.com" },
    { name: "Bilal Ahmed", roll: "776692", email: "bilal@gmail.com" },
    { name: "Zainab Akram", roll: "776693", email: "zainab@gmail.com" },
    { name: "Usman Tariq", roll: "776694", email: "usman@gmail.com" },
  ];

  return (
    <div className="admin-wrapper">
      <div className="admin-breadcrumb">
        <p>Dashboard <span>›</span> <b>Modern Web Application Development</b></p>
      </div>
      <h2 className="admin-title">Modern Web Application Development</h2>
      <div className="admin-top-bar">
        <div className="search-box"><FaSearch /> <input placeholder="Search by name, email or roll no..." /></div>
        <select><option>All</option></select>
      </div>
      <div className="admin-tabs">
        <button className={activeTab==="Students"?"active":""} onClick={()=>setActiveTab("Students")}>Students</button>
        <button className={activeTab==="Attendance"?"active":""} onClick={()=>setActiveTab("Attendance")}>Attendance</button>
        <button className={activeTab==="Assignments"?"active":""} onClick={()=>setActiveTab("Assignments")}>Assignments</button>
        <button className={activeTab==="Quizzes"?"active":""} onClick={()=>setActiveTab("Quizzes")}>Quizzes</button>
        <button className={activeTab==="Progress"?"active":""} onClick={()=>setActiveTab("Progress")}>Course Progress</button>
      </div>
      <div className="admin-table-card">
        <div className="admin-thead"><span>Name</span><span>Roll Number</span><span>Email</span><span>Status</span><span>Action</span></div>
        {students.map((s,i)=>(
          <div className="admin-trow" key={i}>
            <span className="name-cell"><img src={`https://i.pravatar.cc/100?img=${i+11}`} /> {s.name}</span>
            <span>{s.roll}</span>
            <span>{s.email}</span>
            <span><span className="enrolled-badge">ENROLLED</span></span>
            <span><FaEye className="eye-icon" /></span>
          </div>
        ))}
        <div className="admin-pagination"><span>Showing 1-10 of 201 records</span><div className="pages"><span>‹ Previous</span><span className="page-active">1</span><span>2</span><span>...</span><span>21</span><span>Next ›</span></div></div>
      </div>
    </div>
  );
};
export default AdminPotral;