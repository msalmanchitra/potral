import "./Assignment.css";
import { FaRegListAlt, FaRegEdit, FaRegClock, FaEye, FaUpload, FaPencilAlt } from "react-icons/fa";

const Assignment = () => {
  const assignments = [
    { title: "Student & Teacher Login Portal", topics: "6 Topics", date: "September 28, 2026", status: "NOT SUBMITTED", type: "normal" },
    { title: "Admin panel (E commerce Dashboad)", topics: "7 Topics", date: "September 10, 2026", status: "NOT SUBMITTED", type: "normal" },
    { title: "QUICKSERVE WMA (Batch-20)", topics: "No topics", date: "August 29, 2026", status: "NOT SUBMITTED", type: "hackathon", tag: "HACKATHON", closed: true },
    { title: "E-Commerce Website (React js)", topics: "4 Topics", date: "August 17, 2026", status: "LATE SUBMITTED", type: "normal" },
    { title: "Furniture E-Commerce Website", topics: "5 Topics", date: "August 10, 2026", status: "SUBMITTED", type: "normal" },
    { title: "MaintainIQ (Batch-20)", topics: "No topics", date: "July 11, 2026", status: "SUBMITTED", type: "hackathon", tag: "HACKATHON", closed: true },
    { title: "JavaScript Assignment - 25 Questions", topics: "8 Topics", date: "July 10, 2026", status: "LATE SUBMITTED", type: "normal" },
    { title: "Budgetting App", topics: "12 Topics", date: "June 1, 2026", status: "APPROVED", type: "normal" },
  ];

  const getStatusClass = (status) => {
    if (status === "NOT SUBMITTED") return "status-not";
    if (status === "SUBMITTED") return "status-sub";
    if (status === "LATE SUBMITTED") return "status-late";
    if (status === "APPROVED") return "status-approved";
  };

  return (
    <div className="assign-page">
      {/* Top 3 Cards */}
      <div className="assign-cards">
        <div className="assign-card">
          <div><h2>17</h2><p>Assigned</p></div>
          <div className="assign-icon blue"><FaRegListAlt /></div>
        </div>
        <div className="assign-card">
          <div><h2>13</h2><p>Submitted</p></div>
          <div className="assign-icon green"><FaRegEdit /></div>
        </div>
        <div className="assign-card">
          <div><h2>4</h2><p>Pending</p></div>
          <div className="assign-icon yellow"><FaRegClock /></div>
        </div>
      </div>

      {/* Table */}
      <div className="assign-table-card">
        <div className="assign-table-head">
          <span>Assignment</span>
          <span>Topics</span>
          <span>Due Date</span>
          <span>Status</span>
          <span>Action</span>
        </div>

        {assignments.map((item, index) => (
          <div className={`assign-table-row ${item.type === "hackathon" ? "row-hackathon" : ""}`} key={index}>
            <span className="assign-title">
              {item.title} {item.tag && <span className="hack-tag">{item.tag}</span>}
            </span>
            <span><span className={`topic-badge ${item.topics === "No topics" ? "no-topic" : ""}`}>{item.topics}</span></span>
            <span className={item.type === "hackathon" ? "text-purple" : ""}>{item.date}</span>
            <span><span className={`status-badge ${getStatusClass(item.status)}`}>{item.status}</span></span>
            <span className="action-cell">
              {item.closed ? (
                <>
                  <FaEye className="act-icon purple" /> <i className="closed-text">Submissions closed</i>
                </>
              ) : (
                <>
                  <FaEye className="act-icon" /> <FaUpload className="act-icon" /> <FaPencilAlt className="act-icon" />
                </>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignment;