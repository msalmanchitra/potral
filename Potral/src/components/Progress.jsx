import { useState } from "react";
import "./Progress.css";

const Progress = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const subjects = [
    { 
      name: "Web Designing", total: "20/20", percent: 100, status: "done",
      topics: ["Introduction to Web", "HTML5 Basics", "Forms & Tables", "Semantic HTML", "CSS Basics", "Selectors & Colors", "Box Model", "Flexbox", "Grid System", "Positioning", "Responsive Design", "Media Queries", "CSS Animation", "Transform & Transition", "Bootstrap 5", "Tailwind Basics", "Figma to HTML", "Portfolio Project", "Domain & Hosting", "Final Deployment"]
    },
    { 
      name: "Front-End Development", total: "27/31", percent: 87, status: "pending",
      topics: ["JavaScript Intro", "Variables & DataTypes", "Operators", "If Else", "Loops", "Functions", "Array Methods", "Objects", "DOM Manipulation", "Events Handling", "ES6 Features", "Spread & Rest", "Destructuring", "Promises", "Async Await", "Fetch API", "LocalStorage", "Form Validation", "Git & GitHub", "NPM & Vite", "React Intro", "JSX & Components", "Props & State", "useState Hook", "useEffect Hook", "React Router", "Context API"]
    },
    { 
      name: "Modern Front-End Development", total: "10/14", percent: 71, status: "pending",
      topics: ["Next.js Intro", "File Based Routing", "SSR vs CSR", "API Routes", "Dynamic Routes", "Tailwind in Next.js", "Image Optimization", "Authentication", "Redux Toolkit", "Deployment on Vercel"]
    },
    { 
      name: "Back-End Development", total: "1/16", percent: 6, status: "pending",
      topics: ["Node.js Intro", "NPM Modules", "Express.js Setup", "Routing in Express", "Middleware", "MongoDB Intro", "Mongoose Models", "CRUD Operations", "REST API Design", "JWT Authentication", "File Upload", "Error Handling", "Email Sending", "Payment Integration", "Socket.io", "Final Project"]
    },
  ];

  return (
     <div className="progress-page">
      <div className="progress-stats">
        <div className="p-card"><div><h2>81</h2><p>Total Topics</p></div><div className="p-icon green">📖</div></div>
        <div className="p-card"><div><h2>58</h2><p>Completed Topics</p></div><div className="p-icon purple">🎓</div></div>
        <div className="p-card"><div><h2>23</h2><p>Pending Topics</p></div><div className="p-icon red">⏱️</div></div>
      </div>

      <div className="progress-list">
        {subjects.map((sub, index) => (
          <div key={sub.name} className={`progress-wrapper ${openIndex === index ? "open" : ""}`}>
            <div className="progress-row" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              <div className="row-left">
                <div className={`status-icon ${sub.status}`}>{sub.status === 'done' ? '✔' : '◷'}</div>
                <div>
                  <h4>{sub.name}</h4>
                  <span>Topics: {sub.total}</span>
                </div>
              </div>
              <div className="row-right">
                <div className="circle" style={{ background: `conic-gradient(#0EA5E9 ${sub.percent}%, #E5E7EB ${sub.percent}% 100%)` }}>
                  <div className="circle-inner">{sub.percent}%</div>
                </div>
                <span className={`arrow ${openIndex === index ? "up" : ""}`}>⌄</span>
              </div>
            </div>

            {openIndex === index && (
              <div className="topic-drop">
                <div className="drop-header">
                  <span>{sub.topics.length} Topics Included</span>
                  <span className="badge-done">{sub.percent}% Completed</span>
                </div>
                <div className="drop-grid">
                  {sub.topics.map((t, i) => {
                    const isDone = sub.status === 'done' || i < sub.percent / 4;
                    return (
                      <div key={i} className={`topic-item ${isDone ? "done" : ""}`}>
                        <div className="t-left">
                          <span className="t-num">{String(i + 1).padStart(2, '0')}</span>
                          <span className="t-name">{t}</span>
                        </div>
                        <span className={`t-check ${isDone ? "green" : "gray"}`}>{isDone ? "✔" : "○"}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;