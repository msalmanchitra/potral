import { useState } from "react";
import "./Attendance.css";
import { FaCalendarAlt, FaCheckCircle, FaTimesCircle, FaRegTimesCircle } from "react-icons/fa";

const Attendance = () => {
  const [selectedMonth, setSelectedMonth] = useState("April 2026");

  // Har month ka alag data
  const monthData = {
    "April 2026": [
      { id: 1, date: "Mon, Apr 1, 2026", status: "PRESENT" },
      { id: 2, date: "Wed, Apr 3, 2026", status: "PRESENT" },
      { id: 3, date: "Fri, Apr 6, 2026", status: "ABSENT" },
      { id: 4, date: "Mon, Apr 8, 2026", status: "PRESENT" },
      { id: 5, date: "Wed, Apr 10, 2026", status: "PRESENT" },
      { id: 6, date: "Fri, Apr 13, 2026", status: "LEAVE" },
      { id: 7, date: "Mon, Apr 15, 2026", status: "PRESENT" },
      { id: 8, date: "Wed, Apr 17, 2026", status: "ABSENT" },
      { id: 9, date: "Fri, Apr 20, 2026", status: "PRESENT" },
      { id: 10, date: "Mon, Apr 20, 2026", status: "PRESENT" },
      { id: 11, date: "Wed, Apr 20, 2026", status: "PRESENT" },
      { id: 12, date: "Fri, Apr 20, 2026", status: "PRESENT" },
    ],
    "May 2026": [
      { id: 1, date: "Mon, May 1, 2026", status: "PRESENT" },
      { id: 2, date: "Wed, May 3, 2026", status: "PRESENT" },
      { id: 3, date: "Fri, May 5, 2026", status: "PRESENT" },
      { id: 4, date: "Mon, May 7, 2026", status: "PRESENT" },
      { id: 5, date: "Wed, May 9, 2026", status: "ABSENT" },
      { id: 6, date: "Fri, May 12, 2026", status: "PRESENT" },
      { id: 7, date: "Mon, May 14, 2026", status: "PRESENT" },
      { id: 8, date: "Wed, May 16, 2026", status: "PRESENT" },
      { id: 9, date: "Fri, May 19, 2026", status: "LEAVE" },
      { id: 10, date: "Mon, May 19, 2026", status: "LEAVE" },
      { id: 11, date: "Wed, May 19, 2026", status: "LEAVE" },
      { id: 12, date: "Fri, May 19, 2026", status: "LEAVE" },
    ],
    "June 2026": [
      { id: 1, date: "Mon, Jun 1, 2026", status: "PRESENT" },
      { id: 2, date: "Wed, Jun 3, 2026", status: "PRESENT" },
      { id: 3, date: "Fri, Jun 5, 2026", status: "ABSENT" },
      { id: 4, date: "Mon, Jun 7, 2026", status: "PRESENT" },
      { id: 5, date: "Wed, Jun 9, 2026", status: "PRESENT" },
      { id: 6, date: "Fri, Jun 11, 2026", status: "PRESENT" },
      { id: 7, date: "Mon, Jun 13, 2026", status: "PRESENT" },
      { id: 8, date: "Wed, Jun 15, 2026", status: "PRESENT" },
      { id: 9, date: "Fri, Jun 17, 2026", status: "ABSENT" },
      { id: 10, date: "Mon, Jun 17, 2026", status: "ABSENT" },
      { id: 11, date: "Wed, Jun 17, 2026", status: "ABSENT" },
      { id: 12, date: "Fri, Jun 17, 2026", status: "ABSENT" },
    ],
  };

  const data = monthData[selectedMonth];

  return (
    <div className="att-page">
      <div className="att-cards">
        <div className="att-card">
          <div><h2>118</h2><p>Total Classes</p></div>
          <div className="att-icon"><FaCalendarAlt /></div>
        </div>
        <div className="att-card">
          <div><h2>89</h2><p>Present</p></div>
          <div className="att-icon green"><FaCheckCircle /></div>
        </div>
        <div className="att-card">
          <div><h2>7</h2><p>Leave</p></div>
          <div className="att-icon orange"><FaTimesCircle /></div>
        </div>
        <div className="att-card">
          <div><h2>22</h2><p>Absent</p></div>
          <div className="att-icon red"><FaRegTimesCircle /></div>
        </div>
      </div>

      <div className="att-overview">
        <div className="overview-top">
          <div>
            <h3>Attendance Overview</h3>
            <p>Your attendance is good. Keep it up!</p>
          </div>
          <h2 className="per">75%</h2>
        </div>
        <div className="overview-bar">
          <div className="overview-fill" style={{ width: "75%" }}></div>
        </div>
      </div>

      {/* Filter ab kaam karega */}
      <div className="att-filter">
        <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
          <option>April 2026</option>
          <option>May 2026</option>
          <option>June 2026</option>
        </select>
      </div>

      <div className="att-table-card">
        <div className="att-table-head">
          <span>Class</span>
          <span>Date</span>
          <span>Status</span>
        </div>
        {data.map((row) => (
          <div className="att-table-row" key={row.id}>
            <span>{row.id}</span>
            <span>{row.date}</span>
            <span>
              <span className={
                row.status === "PRESENT"? "badge-present" :
                row.status === "ABSENT"? "badge-absent" : "badge-leave"
              }>
                {row.status}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendance;