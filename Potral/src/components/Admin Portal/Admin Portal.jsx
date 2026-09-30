import { useState } from "react";
import "./AdminPortal.css";
import { FaSearch, FaEye } from "react-icons/fa";

const AdminPortal = () => {
  const [activeTab, setActiveTab] = useState("Students");

  const students = [
    { name: "Muhammad Asif", roll: "776685", email: "asif@gmail.com", status: "ENROLLED" },
    { name: "Ahmed Raza", roll: "776686", email: "ahmed@gmail.com", status: "ENROLLED" },
    { name: "Ali Khan", roll: "776687", email: "ali.khan@gmail.com", status: "ENROLLED" },
    { name: "Sara Ahmed", roll: "776688", email: "sara@gmail.com", status: "ENROLLED" },
    { name: "Fatima Noor", roll: "776689", email: "fatima@gmail.com", status: "ENROLLED" },
    { name: "Hassan Ali", roll: "776690", email: "hassan@gmail.com", status: "ENROLLED" },
    { name: "Ayesha Malik", roll: "776691", email: "ayesha@gmail.com", status: "ENROLLED" },
    { name: "Usman Ghani", roll: "776692", email: "usman@gmail.com", status: "ENROLLED" },
    { name: "Zainab Tariq", roll: "776693", email: "zainab@gmail.com", status: "ENROLLED" },
    { name: "Bilal Sheikh", roll: "776694", email: "bilal@gmail.com", status: "ENROLLED" },
  ];

  return (
    <div className="admin-portal">
      {/* Header */}
      <div className="admin-breadcrumb">
        <span>Dashboard</span> <span>›</span> <b>Modern Web Application Development</b>
        <button className="feedback-btn">Feedback</button>
      </div>

      <h2 className="admin-title">Modern Web Application Development</h2>

      <div className="admin-top-bar">
        <div className="search-box">
          <FaSearch /> <input placeholder="Search by name, email or roll no..." />
        </div>
        <select className="filter-select">
          <option>All</option>
          <option>Enrolled</option>
          <option>Pending</option>
        </select>
      </div>

      {/* Tabs */}
      <div className="admin-tabs">
        <button className={activeTab === "Students" ? "active" : ""} onClick={()=>setActiveTab("Students")}>👥 Students</button>
        <button className={activeTab === "Attendance" ? "active" : ""} onClick={()=>setActiveTab("Attendance")}>📅 Attendance</button>
        <button className={activeTab === "Assignments" ? "active" : ""} onClick={()=>setActiveTab("Assignments")}>📄 Assignments</button>
        <button className={activeTab === "Quizzes" ? "active" : ""} onClick={()=>setActiveTab("Quizzes")}>📝 Quizzes</button>
        <button className={activeTab === "Progress" ? "active" : ""} onClick={()=>setActiveTab("Progress")}>📈 Course Progress</button>
      </div>

      {/* Content - Jo aapne green box me hide kiya tha */}
      {activeTab === "Students" && (
        <div className="admin-table-card">
          <div className="admin-table-head">
            <span>Name</span>
            <span>Roll Number</span>
            <span>Email</span>
            <span>Status</span>
            <span>Action</span>
          </div>

          {students.map((s, i) => (
            <div className="admin-table-row" key={i}>
              <span className="student-name"><img src={`https://i.pravatar.cc/30?img=${i+1}`} alt="" /> {s.name}</span>
              <span>{s.roll}</span>
              <span>{s.email}</span>
              <span><span className="enrolled-badge">{s.status}</span></span>
              <span><FaEye className="eye-icon" /></span>
            </div>
          ))}

          <div className="admin-pagination">
            <span>Showing 1-10 of 201 records</span>
            <div className="pages">
              <span>‹ Previous</span>
              <span className="p-active">1</span>
              <span>2</span>
              <span>... </span>
              <span>21</span>
              <span>Next ›</span>
            </div>
          </div>
        </div>
      )}

      {activeTab !== "Students" && (
        <div className="empty-tab">
          <h3>{activeTab}</h3>
          <p>{activeTab} ka content yahan ayega</p>
        </div>
      )}
    </div>
  );
};

export default AdminPortal;