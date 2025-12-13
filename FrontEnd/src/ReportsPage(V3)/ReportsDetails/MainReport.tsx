// components/MainReport.tsx
import React from "react";
import type { Report } from "./ReportPage"; // Import from types.ts
import ReportBody from "./ReportBody";
import "../Styles/style.css";

function ReportFooter({ report }: { report: Report }) 
{
   const to = report.ReportTo;
   return (
    <div className="footer">
      <div className="tags">
        <span className={`tag priority-${report.Priority.toLowerCase()}`}>{report.Priority}</span>
        <span className={`tag status-${(report.Status || "Pending").toLowerCase()}`}>{report.Status || "Pending"}</span>
        <span className="tag category">{report.Categorie}</span>
      </div>
      {to?.type === "staff" ? (
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
      <ReportBody report={report} />
      <hr className="divider" />
      <ReportFooter report={report} />
    </div>
  );
}