import Quiz from "./Quiz";
import Assignment from "./Assignment";
import Attendance from "./Attendance";
import FeedbackModal from "./FeedbackModal";
import Progress from "./Progress";
import { useState } from "react";
import "./StudentPotral.css";
import { 
  FaThLarge, 
  FaBookOpen, 
  FaCalendarAlt, 
  FaCreditCard, 
  FaClipboardList, 
  FaCheck, 
  FaUser, 
  FaCommentDots, 
  FaClock, 
  FaGraduationCap, 
  FaPrint,
  FaHashtag,
  FaMapMarkerAlt,
  FaBuilding,
  FaCircle
} from "react-icons/fa";

const StudentPortal = () => {
  const [active, setActive] = useState("Dashboard");
  const [showFeedback, setShowFeedback] = useState(false);

  const menu = [
    { name: "Dashboard", icon: <FaThLarge /> },
    { name: "Progress", icon: <FaBookOpen /> },
    { name: "Attendance", icon: <FaCalendarAlt /> },
    // { name: "Payment", icon: <FaCreditCard /> },
    { name: "Assignment", icon: <FaClipboardList /> },
    { name: "Quiz", icon: <FaCheck /> },
  ];

  const DashboardContent = () => (
    <div className="smit-content">
      <div className="left-col">
        <div className="stats-row">
          <div className="stat-card">
            <div><h2>87/116</h2><p>Attendance</p></div>
            <div className="circle-icon green"><FaClock /></div>
          </div>
          <div className="stat-card">
            <div><h2>6/14</h2><p>Assignment</p></div>
            <div className="circle-icon purple"><FaGraduationCap /></div>
          </div>
        </div>

        <h3 className="section-title">Active Course</h3>
        <div className="course-card">
          <div className="course-head">
            <h2>Modern Web Application Development</h2>
            <span className="badge">ENROLLED</span>
          </div>
          <div className="timings">
            <span>Mon 01:00 PM - 03:00 PM</span>
            <span>Wed 01:00 PM - 03:00 PM</span>
            <span>Fri 01:00 PM - 03:00 PM</span>
          </div>
          <div className="progress-wrap">
            <div className="progress-top"><span>Progress</span><span>75% Completed</span></div>
            <div className="progress-bar"><div className="progress-fill"></div></div>
          </div>
          <div className="course-info">
            <span><i><FaHashtag /></i> Batch: 20</span>
            <span><i><FaCircle /></i> Roll: 776685</span>
            <span><i><FaBuilding /></i> Campus: Zaitoon Ashraf IT Park</span>
            <span><i><FaMapMarkerAlt /></i> City: Karachi</span>
          </div>
        </div>

        <h3 className="section-title">Fee</h3>
        <div className="table-card">
          <div className="table-head">
            <span>Month</span><span>Amount</span><span>Type</span><span>Due date</span><span>Voucher ID</span><span>Status</span>
          </div>
          <div className="table-row">
            <span>Sep 2026</span>
            <span>Rs: 1000 /-</span>
            <span>Monthly</span>
            <span>08-Sep-2026</span>
            <span className="voucher">202609776685 <button><FaPrint /></button></span>
            <span><span className="paid">PAID</span></span>
          </div>
        </div>
      </div>

      <div className="right-col">
        <div className="schedule-card">
          <h3><FaCalendarAlt /> Class Schedule</h3>
          <div className="days">
            <div><b>Sun</b>27</div>
            <div className="active-day"><b>Mon</b>28</div>
            <div><b>Tue</b>29</div>
            <div className="active-day"><b>Wed</b>30</div>
            <div><b>Thu</b>01</div>
            <div className="active-day"><b>Fri</b>02</div>
            <div><b>Sat</b>03</div>
          </div>
        </div>
        <div className="quiz-card">
          <div className="tabs">
            <span>Assignments</span>
            <span className="active-tab">Quizzes</span>
            <span>Events</span>
          </div>
          <p className="no-data">No upcoming quizzes</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="smit-layout">
      <aside className="smit-sidebar">
        <div className="smit-top">
          <div className="smit-logo">
            <span className="logo-s">S</span><span className="logo-m">M</span><span className="logo-it">IT</span>
            <small>SAYLANI MASS IT TRAINING</small>
          </div>
        </div>
        <nav className="smit-menu">
          {menu.map((m) => (
            <button key={m.name} className={`menu-item ${active === m.name ? "active" : ""}`} onClick={() => setActive(m.name)}>
              <span>{m.icon}</span> {m.name}
            </button>
          ))}
        </nav>
        <div className="smit-user">
          <div className="avatar"><FaUser /></div>
          <div><b>Muhammad Sa...</b><p>Student</p></div>
        </div>
      </aside>

      <main className="smit-main">
        <div className="smit-header">
          <p>Home <span>›</span> Modern Web Application Development {active !== "Dashboard" ? <><span>›</span> <b>{active}</b></> : ""}</p>
          <button className="feedback-btn" onClick={() => setShowFeedback(true)}><FaCommentDots /> Feedback</button>
        </div>

        {active === "Dashboard" && <DashboardContent />}
        {active === "Progress" && <Progress />}
        {active === "Attendance" && <Attendance />}
        {active === "Assignment" && <Assignment />}
        {active === "Quiz" && <Quiz />}
        {active === "Payment" && (
          <div className="empty-page"><h2>Payment</h2><p>Payment page ka content yahan ayega.</p></div>
        )}
      </main>

      <nav className="mobile-bottom-nav">
        {menu.map((m) => (
          <button key={m.name} className={`mobile-nav-item ${active === m.name ? "active" : ""}`} onClick={() => setActive(m.name)}>
            <span>{m.icon}</span><small>{m.name}</small>
          </button>
        ))}
      </nav>

      <FeedbackModal isOpen={showFeedback} onClose={() => setShowFeedback(false)} />
    </div>
  );
};

export default StudentPortal;