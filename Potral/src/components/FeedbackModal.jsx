import { useState } from "react";
import "./FeedbackModal.css";

const FeedbackModal = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = () => {
    // سیلیبریشن شروع
    setIsSubmitted(true);
    setShowConfetti(true);

    // 3 سیکنڈ بعد بند ہو جائے گا
    setTimeout(() => {
      setIsSubmitted(false);
      setShowConfetti(false);
      setRating(0);
      onClose();
    }, 3000);
  };

  return (
    <div className="fb-overlay" onClick={onClose}>
      {/* پھلجڑیاں / ستارے */}
      {showConfetti && (
        <div className="confetti-box">
          {[...Array(30)].map((_, i) => (
            <div key={i} className={`confetti c${i % 5}`} style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 0.8}s` }}></div>
          ))}
          {[...Array(20)].map((_, i) => (
            <div key={`s-${i}`} className="star-burst" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 0.5}s` }}>★</div>
          ))}
        </div>
      )}

      <div className="fb-modal" onClick={(e) => e.stopPropagation()}>
        {!isSubmitted ? (
          <>
            <div className="fb-top">
              <h3>Feedback</h3>
              <button className="fb-close" onClick={onClose}>✕</button>
            </div>
            <div className="fb-content">
              <p className="fb-subtitle">How would you rate your experience?</p>
              <div className="fb-stars">
                {[1,2,3,4,5].map((num) => (
                  <span key={num} className={num <= rating ? "star active" : "star"} onClick={() => setRating(num)}>★</span>
                ))}
              </div>
              <label>Your Feedback</label>
              <textarea placeholder="Write your feedback here..."></textarea>
              <div className="fb-actions">
                <button className="btn-cancel" onClick={onClose}>Cancel</button>
                <button className="btn-submit" onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </>
        ) : (
          // Submit کے بعد والا میسج
          <div className="success-box">
            <div className="success-icon">🎉</div>
            <h2>Shukriya!</h2>
            <p>Apka Feedback Submit Ho Gaya Hai</p>
            <div className="success-stars">⭐⭐⭐⭐⭐</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackModal;