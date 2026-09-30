import "./Quiz.css";
import { FaExclamationTriangle } from "react-icons/fa";

const Quiz = () => {
  const quizzes = [
    { title: "Javascript (Quiz-4)", module: "Modern Front-End Development", q: 40, attempt: "1 / 3", per: "38%", status: "FAILED", attemptColor: "normal" },
    { title: "Javascript (Quiz-3)", module: "Modern Front-End Development", q: 40, attempt: "1 / 3", per: "63%", status: "FAILED", attemptColor: "normal" },
    { title: "Javascript (Quiz-2)", module: "Modern Front-End Development", q: 40, attempt: "1 / 3", per: "83%", status: "PASSED", attemptColor: "normal" },
    { title: "Javascript (Quiz-1)", module: "Modern Front-End Development", q: 40, attempt: "2 / 3", per: "85%", status: "PASSED", attemptColor: "red" },
    { title: "CSS Quiz", module: "Front-End Development", q: 40, attempt: "1 / 3", per: "30%", status: "FAILED", attemptColor: "normal" },
    { title: "HTML Quiz", module: "Web Designing", q: 40, attempt: "2 / 3", per: "63%", status: "FAILED", attemptColor: "red" },
  ];

  return (
    <div className="quiz-page">
      {/* Important Info Box */}
      <div className="quiz-info-box">
        <h3><FaExclamationTriangle /> Important Information</h3>
        <ul>
          <li>Once started, quizzes must be completed in one session</li>
          <li>Switching tabs or leaving the window will be recorded</li>
          <li>Ensure you have a stable internet connection</li>
          <li>The quiz will open in fullscreen mode</li>
        </ul>
      </div>

      {/* Table */}
      <div className="quiz-table-card">
        <div className="quiz-table-head">
          <span>Title</span>
          <span>Module</span>
          <span>Questions</span>
          <span>Attempts</span>
          <span>Percentage</span>
          <span>Status</span>
          <span>Note</span>
          <span>Action</span>
        </div>

        {quizzes.map((item, i) => (
          <div className="quiz-table-row" key={i}>
            <span className="q-title">{item.title}</span>
            <span>{item.module}</span>
            <span><span className="q-badge">{item.q}</span></span>
            <span><span className={`attempt-badge ${item.attemptColor === "red" ? "attempt-red" : ""}`}>{item.attempt}</span></span>
            <span>{item.per}</span>
            <span><span className={`quiz-status ${item.status === "PASSED" ? "q-passed" : "q-failed"}`}>{item.status}</span></span>
            <span>—</span>
            <span><button className="completed-btn">Completed</button></span>
          </div>
        ))}
      </div>

      <p className="quiz-footer">Contact your instructor if you have any issues accessing your quizzes.</p>
    </div>
  );
};

export default Quiz;