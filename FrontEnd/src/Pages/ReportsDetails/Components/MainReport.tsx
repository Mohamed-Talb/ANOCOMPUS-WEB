import type { Report } from "../ReportDetails";
import Location from "../SharedComponents/Location";
import { IconDots } from "../SharedComponents/Icons";
import AttachmentGrid from "../SharedComponents/Attachments";
import UserHeader from "../SharedComponents/UserHeader";

function Footer({ report }: { report: Report }) {
  const isStaff = report.ReportTo?.type === "staff";

  return (
    <div className="footer">
      <div className="tags">
        <span className={`tag priority-${report.Priority.toLowerCase()}`}>
          {report.Priority}
        </span>
        <span
          className={`tag status-${(report.Status || "Pending")
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
        >
          {report.Status || "Pending"}
        </span>
        <span className="tag category">{report.Categorie}</span>
      </div>

      {isStaff ? (
        <button className="assign-btn">Assign to Zoubir</button>
      ) : (
        <button className="edit-btn">Edit Report</button>
      )}
    </div>
  );
}

export default function MainReport({ report }: { report: Report }) {
  return (
    <div className="report-card">
      {/* Header */}
      <div className="card-header">
        <UserHeader
          firstname={report.ReportFrom.Firstname}
          lastname={report.ReportFrom.LastName}
          // location={report.Location}
          date={report.Date}
        />
        <button className="menu-button" aria-label="More options">
          <IconDots />
        </button>
      </div>

      {/* Title */}
      <h4 className="report-title">{report.Title || "Untitled Report"}</h4>

      {/* Content */}
      <div className="card-content">
        {report.Attachments && report.Attachments.length > 0 && (
          <div className="attachments-wrapper">
            <AttachmentGrid attachments={report.Attachments} />
          </div>
        )}

        <div className="description-section">
          <h5 className="description-label">Description</h5>
          <p className="description-text">{report.Description}</p>
          <Location location={report.Location} />
        </div>
      </div>

      {/* Divider */}
      <hr className="divider" />

      {/* Footer */}
      <Footer report={report} />
    </div>
  );
}