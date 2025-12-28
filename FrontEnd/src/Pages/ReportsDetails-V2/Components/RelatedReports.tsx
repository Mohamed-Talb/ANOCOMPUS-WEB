import type { Report } from "../ReportDetails";
import Location from "../utiles/Location";
import { IconDots } from "../../../Common/icons/Icons";
import AttachmentGrid from "../utiles/Attachments";
import UserHeader from "../utiles/UserHeader";
import { IconChevronDown } from "../../../Common/icons/Icons";
import { IconGrid } from "../../../Common/icons/Icons";

function RelatedCard({ report }: { report: Report }) {
  return (
    <div className="related-card w-full max-w-[900px] mx-auto bg-[#1c1c1e] px-6 py-6 md:px-8 md:py-8 border-b border-[#38383a] transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
      <div className="card-header flex items-start justify-between mb-3">
        <UserHeader firstname={report.ReportFrom.Firstname} lastname={report.ReportFrom.LastName} location={report.Location} date={report.Date} />
        <button className="menu-button p-2 rounded-md text-[#98989d] hover:text-[#ffffff] hover:bg-[#2c2c2e]">
          <IconDots />
        </button>
      </div>

      <h4 className="report-title text-[16px] font-semibold text-[#ffffff] mb-3">{report.Title || "Untitled Report"}</h4>

      <div className="card-content flex flex-col gap-3">
        {report.Attachments && report.Attachments.length > 0 && (
          <div className="attachments-wrapper">
            <AttachmentGrid attachments={report.Attachments} />
          </div>
        )}

        <div className="description-section">
          <h5 className="description-label text-sm font-semibold text-[#ffffff] mb-1">Description</h5>
          <p className="description-text text-sm text-[#98989d] leading-6">{report.Description}</p>
          <div className="mt-2"><Location location={report.Location} /></div>
        </div>
      </div>
    </div>
  );
}

export default function RelatedSession({ reports }: { reports: Report[] }) {
  if (!reports || reports.length === 0) {
    return (
      <div className="related-wrapper w-full max-w-[900px] mx-auto bg-[#1c1c1e] rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.3)] mt-4">
        <div className="related-empty p-10 text-center text-[#98989d] text-sm">No related reports.</div>
      </div>
    );
  }

  return (
    <div className="related-wrapper w-full max-w-[900px] mx-auto bg-[#1c1c1e] rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.3)] mt-4">
      <div className="related-header flex items-center justify-between px-6 py-4 border-b border-[#38383a]">
        <div className="header-content flex items-center gap-3">
          <div className="grid-icon flex items-center justify-center w-6 h-6 text-[#98989d]"><IconGrid /></div>
          <h3 className="related-title text-[16px] font-semibold text-[#ffffff] m-0">Related Reports</h3>
          <span className="related-count inline-block bg-[#f97316] text-white text-xs font-semibold px-2 py-1 rounded-full ml-2 min-w-[24px] text-center">{reports.length}</span>
        </div>

        <div className="sort-dropdown flex items-center gap-2 text-sm text-[#98989d] cursor-pointer">
          <span>Sort By</span>
          <IconChevronDown />
        </div>
      </div>

      <div className="related-cards flex flex-col">
        {reports.map((r, i) => (
          <RelatedCard key={i} report={r} />
        ))}
      </div>
    </div>
  );
}