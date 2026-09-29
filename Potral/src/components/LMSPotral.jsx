import { Link } from "react-router-dom";
import "./LMSPotral.css";

const LMSPotral = () => {
  return (
    <div className="portal-wrapper">
      <div className="portal-header">
        <div className="tt-logo">TT</div>
        <h1>ThinkTests LMS Portal</h1>
        <p>Select your portal to continue</p>
      </div>

      <div className="portal-cards">
        <Link to="/student" className="card">
          <div className="icon-box blue">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="3.5"/></svg>
          </div>
          <h3>Student Portal</h3>
          <span>Access your tests, practice sessions, and track your progress</span>
          <div className="enter-link blue-text">Enter Portal →</div>
        </Link>

        <Link to="/admin" className="card">
          <div className="icon-box purple">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3>Admin Portal</h3>
          <span>Manage students, tests, questions, and view analytics</span>
          <div className="enter-link purple-text">Enter Portal →</div>
        </Link>

        <Link to="/institution" className="card">
          <div className="icon-box green">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          </div>
          <h3>Institution Portal</h3>
          <span>Monitor student performance, manage batches and assignments</span>
          <div className="enter-link green-text">Enter Portal →</div>
        </Link>
      </div>

      <p className="footer-text">© 2026 ThinkTests LMS. All rights reserved.</p>
    </div>
  );
};

export default LMSPotral;