import type { Report } from "../ReportDetails";

export default function CommentsSection({ report }: { report: Report }) {
  return (
    <div className="comments-container w-full max-w-[900px] mx-auto bg-[#1c1c1e] rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
      <h3 className="chat-title text-lg font-semibold text-[#ffffff] mb-5 pb-3 border-b border-[#38383a]">
        Chat Room {report.ReportFrom.Firstname} & {report.ReportTo.Firstname}
      </h3>

      {/* Comment 1 */}
      <div className="comment flex mb-4 justify-start">
        <div className="bubble max-w-[70%] p-3 rounded-xl bg-[#2c2c2e] text-[#e5e5e7] text-sm leading-6">
          <p className="author font-semibold text-xs text-[#98989d] mb-1">{report.ReportTo.Firstname}</p>
          I've checked the HVAC system. Cooling seems malfunctioning.
        </div>
      </div>

      {/* Comment 2 */}
      <div className="comment flex mb-4 justify-end">
        <div className="bubble max-w-[70%] p-3 rounded-xl bg-[#0a84ff] text-white text-sm leading-6">
          <p className="author font-semibold text-xs text-[#d0e8ff] mb-1">{report.ReportFrom.Firstname}</p>
          Thanks for the quick response. Temperature is going down now.
        </div>
      </div>

      {/* Comment 3 */}
      <div className="comment flex mb-4 justify-start">
        <div className="bubble max-w-[70%] p-3 rounded-xl bg-[#2c2c2e] text-[#e5e5e7] text-sm leading-6">
          <p className="author font-semibold text-xs text-[#98989d] mb-1">{report.ReportTo.Firstname}</p>
          Technician is on site now. Will be resolved soon.
        </div>
      </div>

      {/* Message input */}
      <div className="message-box flex gap-3 mt-6 pt-4 border-t border-[#38383a]">
        <input
          className="msg-input flex-1 px-4 py-2 rounded-md bg-[#2c2c2e] border border-[#38383a] text-[#e5e5e7] text-sm placeholder:text-[#636366] focus:outline-none focus:border-[#0a84ff] transition-colors"
          placeholder="Type your message..."
        />
        <button className="send-btn px-6 py-2 bg-[#0a84ff] hover:bg-[#0070f3] rounded-md text-sm font-medium text-white">
          Send
        </button>
      </div>
    </div>
  );
}