import { useState } from "react";
import "./AdminPortal.css";
import { FaClock, FaCalendarAlt, FaCheckCircle, FaTimesCircle, FaRegClock } from "react-icons/fa";
import { MdDashboard, MdOutlineGridView, MdCalendarToday, MdOutlineEventNote, MdFeedback } from "react-icons/md";
import { FiUsers, FiClipboard, FiFileText, FiBarChart2 } from "react-icons/fi";

const studentsData = Array.from({length: 57}, (_, i) => ({
  roll: `46790${4+i}`,
  name: ["Abdul Wadood", "Muhammad Saad", "Ahmed Khan", "Sara Ali", "Ali Raza", "Fatima Javed", "Hassan Shah", "Ayesha Noor", "Bilal Ahmed", "Zainab Akram"][i%10] + (i>9? ` ${i}` : ""),
  status: "NOT MARKED"
}));

const AdminPortal = () => {
  const [activeTab, setActiveTab] = useState("Attendance");
  const [date, setDate] = useState("Tue Sep 15 2026");
  const [attendance, setAttendance] = useState({});
  const [page, setPage] = useState(1);
  const [showFeedback, setShowFeedback] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const perPage = 10;
  const present = Object.values(attendance).filter(v=>v==="Present").length;
  const absent = Object.values(attendance).filter(v=>v==="Absent").length;
  const leave = Object.values(attendance).filter(v=>v==="Leave").length;

  const markStatus = (roll, status) => {
    setAttendance(prev => ({...prev, [roll]: status}));
  };

  const currentStudents = studentsData.slice((page-1)*perPage, page*perPage);

  return (
    <div className="smit-layout">
      {/* SIDEBAR - ye work karega */}
      <aside className={`smit-sidebar ${sidebarOpen? 'open' : ''}`}>
        <div className="sidebar-logo">SMIT</div>
        <nav>
          <a className="active"><MdDashboard /> Dashboard</a>
          <a><MdOutlineGridView /></a>
          <a><MdCalendarToday /></a>
          <a><MdOutlineEventNote /></a>
        </nav>
        <div className="sidebar-bottom">
          <img src="https://i.pravatar.cc/100?img=12" alt="user" />
        </div>
      </aside>

      {/* MAIN */}
      <main className="smit-main">
        <div className="smit-topbar">
          <div className="breadcrumb">
            <span onClick={()=>setSidebarOpen(!sidebarOpen)} className="hamburger">›</span>
            <span>Dashboard</span> <span>›</span> <b>Modern Web Application Development</b>
          </div>
          <button className="feedback-btn" onClick={()=>setShowFeedback(true)}><MdFeedback /> Feedback</button>
        </div>

        <h1 className="course-title">Modern Web Application Development</h1>

        <div className="tabs">
          <button className={activeTab==="Students"?"active":""} onClick={()=>setActiveTab("Students")}><FiUsers /> Students</button>
          <button className={activeTab==="Attendance"?"active":""} onClick={()=>setActiveTab("Attendance")}><FiClipboard /> Attendance</button>
          <button className={activeTab==="Assignments"?"active":""} onClick={()=>setActiveTab("Assignments")}><FiFileText /> Assignments</button>
          <button className={activeTab==="Quizzes"?"active":""} onClick={()=>setActiveTab("Quizzes")}><FiFileText /> Quizzes</button>
          <button className={activeTab==="Progress"?"active":""} onClick={()=>setActiveTab("Progress")}><FiBarChart2 /> Course Progress</button>
        </div>

        {activeTab === "Attendance"? (
          <>
            <div className="date-row">
              <div></div>
              <div className="date-picker-wrap">
                <label>Select a Date</label>
                <input type="date" onChange={e=> setDate(e.target.value)} />
                <div className="date-display">{date}</div>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-card"><div className="stat-icon clock"><FaClock /></div><div><h3>{studentsData.length}</h3><p>Total Students</p></div><span className="stat-right"><FaCalendarAlt /></span></div>
              <div className="stat-card"><div className="stat-icon"><h2>{present}</h2><p>Present</p></div><span className="stat-right green"><FaCheckCircle /></span></div>
              <div className="stat-card"><div className="stat-icon"><h2>{absent}</h2><p>Absent</p></div><span className="stat-right red"><FaTimesCircle /></span></div>
              <div className="stat-card"><div className="stat-icon"><h2>{leave}</h2><p>Leave</p></div><span className="stat-right orange"><FaRegClock /></span></div>
            </div>

            <div className="table-card">
              <div className="table-head"><span>Roll #</span><span>Full Name</span><span>Status</span></div>
              {currentStudents.map(s=>{
                const st = attendance[s.roll] || "NOT MARKED";
                return (
                  <div className="table-row" key={s.roll}>
                    <span>{s.roll}</span>
                    <span>{s.name}</span>
                    <span>
                      <div className="status-actions">
                        <span className={`badge ${st.replace(' ', '-')}`}>{st}</span>
                        <div className="mark-btns">
                          <button onClick={()=>markStatus(s.roll, "Present")} className="p">P</button>
                          <button onClick={()=>markStatus(s.roll, "Absent")} className="a">A</button>
                          <button onClick={()=>markStatus(s.roll, "Leave")} className="l">L</button>
                        </div>
                      </div>
                    </span>
                  </div>
                )
              })}
              <div className="pagination">
                <span>Showing { (page-1)*perPage+1 }-{Math.min(page*perPage, 57)} of 57 students</span>
                <div className="pages">
                  <button disabled={page===1} onClick={()=>setPage(p=>p-1)}>‹ Previous</button>
                  {[1,2,3,4,5,6].map(n=> <button key={n} className={page===n?'active':''} onClick={()=>setPage(n)}>{n}</button>)}
                  <button disabled={page===6} onClick={()=>setPage(p=>p+1)}>Next ›</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="table-card" style={{padding:'40px', textAlign:'center'}}>
            <h3>{activeTab} Section</h3>
            <p>Ye {activeTab} ka content hai, Attendance ki tarah work kar raha hai.</p>
          </div>
        )}
      </main>

      {showFeedback && (
        <div className="modal-overlay" onClick={()=>setShowFeedback(false)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <h3>Send Feedback</h3>
            <textarea placeholder="Apna feedback likhein..."></textarea>
            <div className="modal-actions"><button onClick={()=>setShowFeedback(false)}>Cancel</button><button className="send" onClick={()=>setShowFeedback(false)}>Send</button></div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AdminPortal;