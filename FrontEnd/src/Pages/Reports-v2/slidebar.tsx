import { X } from "lucide-react";
import type { Report } from "./types";
import { MainReport, CommentsSection, RelatedSession } from "./ReportsDetails-V2/ReportDetails";

export default function ReportDetailsSidebarLayout({
  report,
  onClose,
}: {
  report: Report;
  onClose?: () => void;
}) {
  return (
    <div className="h-full flex flex-col bg-[#0f0f10]">

      {/* ✅ HEADER */}
      <div className="sticky top-0 z-20 bg-[#0f0f10] border-b border-[#2c2c2e] px-6 py-4 flex items-start justify-between">
        <div>
          <h2 className="text-white font-bold text-xl">{report.Title}</h2>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs px-2 py-1 rounded-md bg-green-700/30 text-green-400">
              {report.Status}
            </span>
            <span className="text-xs text-[#98989d]">{report.Date}</span>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="text-[#98989d] hover:text-white"
          >
            <X />
          </button>
        )}
      </div>

      {/* ✅ BODY (scrollable) */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-6 py-6 space-y-6">
        {/* Main report card */}
        <MainReport report={report} />

        {/* Comments (if zoubir) */}
        {report.ReportTo.type === "zoubir" && (
          <CommentsSection report={report} />
        )}

        {/* Related (if staff) */}
        {report.ReportTo.type === "staff" && (
          <RelatedSession reports={report.Related ?? []} />
        )}
      </div>

      {/* ✅ FOOTER (fixed input like discord) */}
      <div className="border-t border-[#2c2c2e] px-6 py-4 bg-[#0f0f10]">
        <div className="flex gap-3">
          <input
            placeholder={`Message about "${report.Title}"`}
            className="flex-1 px-4 py-2 rounded-md bg-[#2c2c2e] border border-[#38383a] text-[#e5e5e7] text-sm placeholder:text-[#636366] focus:outline-none focus:border-[#0a84ff]"
          />
          <button className="px-6 py-2 bg-[#0a84ff] hover:bg-[#0070f3] rounded-md text-sm font-medium text-white">
            Send
          </button>
        </div>
      </div>

    </div>
  );
}
