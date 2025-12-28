import type { Report } from "../ReportDetails";
import Location from "../utiles/Location"
import { IconDots } from "../../../Common/icons/Icons";
import AttachmentGrid from "../utiles/Attachments";
import UserHeader from "../utiles/UserHeader";

function Footer({ report }: { report: Report }) {
  const isStaff = report.ReportTo?.type === "staff";

  const priorityClass =
    report.Priority === "High"
      ? "bg-[#3d1a1a] text-[#ff6b6b]"
      : report.Priority === "Medium"
      ? "bg-[#3d2a1a] text-[#ffa726]"
      : "bg-[#1a3d2a] text-[#66bb6a]";

  const statusClass =
    (report.Status || "Pending").toLowerCase() === "pending"
      ? "bg-[#3d331a] text-[#ffd54f]"
      : (report.Status || "completed").toLowerCase() === "completed"
      ? "bg-[#1a3d2a] text-[#66bb6a]"
      : "bg-[#1a2a3d] text-[#64b5f6]";

  return (
    <div className="footer flex justify-between items-center flex-wrap gap-3">
      <div className="tags flex flex-wrap gap-2">
        <span className={`tag px-3 py-1 rounded-md text-xs font-medium ${priorityClass}`}>{report.Priority}</span>
        <span className={`tag px-3 py-1 rounded-md text-xs font-medium ${statusClass}`}>
          {report.Status || "Pending"}
        </span>
        <span className="tag px-3 py-1 rounded-md text-xs font-medium bg-[#2d1a3d] text-[#ba68c8]">{report.Categorie}</span>
      </div>

      {isStaff ? (
        <button className="assign-btn px-4 py-2 rounded-md text-sm font-medium bg-[#0a84ff] hover:bg-[#0070f3] text-white">
          Assign to Zoubir
        </button>
      ) : (
        <button className="edit-btn px-4 py-2 rounded-md text-sm font-medium bg-[#2c2c2e] border border-[#38383a] text-[#e5e5e7] hover:bg-[#38383a]">
          Edit Report
        </button>
      )}
    </div>
  );
}



export default function MainReport({ report }: { report: Report }) {
  return (
    <div className="report-card w-full max-w-[900px] mx-auto mb-6 bg-[#1c1c1e] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.3)] p-6 md:p-8 transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
      {/* Header */}
      <div className="card-header flex items-start justify-between mb-4">
        <UserHeader firstname={report.ReportFrom.Firstname} lastname={report.ReportFrom.LastName} date={report.Date} />
        <button className="menu-button p-2 rounded-md text-[#98989d] hover:text-[#ffffff] hover:bg-[#2c2c2e]">
          <IconDots />
        </button>
      </div>

      {/* Title */}
      <h4 className="report-title text-[20px] md:text-[22px] font-semibold text-[#ffffff] mb-4">{report.Title || "Untitled Report"}</h4>

      {/* Content */}
      <div className="card-content flex flex-col md:flex-row gap-4">
        {report.Attachments && report.Attachments.length > 0 && (
          <div className="attachments-wrapper md:flex-0 md:w-[200px]">
            <AttachmentGrid attachments={report.Attachments} />
          </div>
        )}

        <div className="description-section flex-1 min-w-0 mt-2">
          <h5 className="description-label text-sm font-semibold text-[#ffffff] mb-2">Description</h5>
          <p className="description-text text-sm text-[#98989d] leading-6 mb-10">{report.Description}</p>
          <Location location={report.Location} />
        </div>
      </div>

      {/* Divider */}
      <hr className="divider border-t border-[#38383a] my-5" />

      {/* Footer */}
      <Footer report={report} />
    </div>
  );
}