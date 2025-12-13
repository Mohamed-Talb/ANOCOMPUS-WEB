import React from "react";
import type { Report } from "../../reports/components/ReportPage";
import AttachmentGrid from "../Shared/Attachments";
import UserHeader from "../Shared/UserHeader";
import IconDots from "../Shared/IconDots";
import "../Styles/style.css";

export function RelatedHeader({ count }: { count: number }) {
  return (
    <div className="related-header">
      <div className="header-content">
        <div className="grid-icon">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
          </svg>
        </div>
        <h3 className="related-title">Related Reports</h3>
        <span className="related-count">{count}</span>
      </div>
      <div className="sort-dropdown">
        <span>Sort By</span>
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

import ReportBody from "./ReportBody";

export function RelatedCard({ report }: { report: Report }) 
{
  return (
    <div className="related-card">
      <ReportBody report={report} /> {/* REUSED COMPONENT */}
    </div>
  );
}

export default function RelatedReports({ report }: { report: Report }) 
{
  const relatedReports = report.Related;
  if (!relatedReports || relatedReports.length === 0) {
    return <div className="related-empty">No related reports.</div>;
  }

  return (
    <div className="related-wrapper">
      <RelatedHeader count={relatedReports.length} />
      <div className="related-cards">
        {relatedReports.map((r, idx) => (
          <RelatedCard key={idx} report={r} />
        ))}
      </div>
    </div>
  );
}
