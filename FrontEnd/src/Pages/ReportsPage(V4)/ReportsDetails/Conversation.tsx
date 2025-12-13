import React from "react";
import "../styles/CommentsSection.css";
import type { Report } from "./ReportPage";

export default function CommentsSection({Report}: {Report:Report}) {
  return (
    <div className="comments-container">
      <h3 className="chat-title">Chat Room {Report.ReportFrom.Firstname} & {Report.ReportTo.Firstname}</h3>

      {/* Comment 1 */}
      <div className="comment left">
        <div className="bubble">
          <p className="author">{Report.ReportTo.Firstname}</p>
          I've checked the HVAC system. Cooling seems malfunctioning.
        </div>
      </div>

      {/* Comment 2 */}
      <div className="comment right">
        <div className="bubble">
          <p className="author staff">{Report.ReportFrom.Firstname}</p>
          Thanks for the quick response. Temperature is going down now.
        </div>
      </div>

      {/* Comment 3 */}
      <div className="comment left">
        <div className="bubble">
          <p className="author">{Report.ReportTo.Firstname}</p>
          Technician is on site now. Will be resolved soon.
        </div>
      </div>

      {/* Message input */}
      <div className="message-box">
        <input className="msg-input" placeholder="Type your message..." />
        <button className="send-btn">Send</button>
      </div>
    </div>
  );
}
