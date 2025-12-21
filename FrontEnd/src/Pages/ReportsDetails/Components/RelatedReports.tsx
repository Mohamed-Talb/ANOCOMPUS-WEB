import type { Report } from "../ReportDetails";
import Location from "../utiles/Location";
import { IconDots } from "../../../Common/icons/Icons";
import AttachmentGrid from "../utiles/Attachments";
import UserHeader from "../utiles/UserHeader";
import { IconChevronDown } from "../../../Common/icons/Icons";
import { IconGrid } from "../../../Common/icons/Icons";
// --- RelatedCard Component (SPECIFIC) ---
function RelatedCard({ report }: { report: Report }) {
  return (
    <div className="related-card">
      {/* Header */}
      <div className="card-header">
        <UserHeader
          firstname={report.ReportFrom.Firstname}
          lastname={report.ReportFrom.LastName}
          location={report.Location}
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
    </div>
  );
}

// --- RelatedSession Component (Container for all related reports) ---
export default function RelatedSession({ reports }: { reports: Report[] }) {
  if (!reports || reports.length === 0) {
    return (
      <div className="related-wrapper">
        <div className="related-empty">No related reports.</div>
      </div>
    );
  }

  return (
    <div className="related-wrapper">
      {/* Header */}
      <div className="related-header">
        <div className="header-content">
          <div className="grid-icon">
            <IconGrid />
          </div>
          <h3 className="related-title">Related Reports</h3>
          <span className="related-count">{reports.length}</span>
        </div>
        <div className="sort-dropdown">
          <span>Sort By</span>
          <IconChevronDown />
        </div>
      </div>

      {/* Cards */}
      <div className="related-cards">
        {reports.map((report, index) => (
          <RelatedCard key={index} report={report} />
        ))}
      </div>
    </div>
  );
}