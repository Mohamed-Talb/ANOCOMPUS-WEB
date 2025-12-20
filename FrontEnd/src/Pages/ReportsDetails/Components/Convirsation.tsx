import type { Report } from "../ReportDetails";

export default function CommentsSection({ report }: { report: Report }) {
  return (
    <div className="comments-container">
      <h3 className="chat-title">
        Chat Room {report.ReportFrom.Firstname} & {report.ReportTo.Firstname}
      </h3>

      {/* Comment 1 */}
      <div className="comment left">
        <div className="bubble">
          <p className="author">{report.ReportTo.Firstname}</p>
          I've checked the HVAC system. Cooling seems malfunctioning.
        </div>
      </div>

      {/* Comment 2 */}
      <div className="comment right">
        <div className="bubble">
          <p className="author staff">{report.ReportFrom.Firstname}</p>
          Thanks for the quick response. Temperature is going down now.
        </div>
      </div>

      {/* Comment 3 */}
      <div className="comment left">
        <div className="bubble">
          <p className="author">{report.ReportTo.Firstname}</p>
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
