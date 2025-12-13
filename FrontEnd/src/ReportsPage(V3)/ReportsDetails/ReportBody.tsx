// components/ReportBody.tsx
import React from "react";
import type { Report } from "./ReportPage";
import AttachmentGrid from "../Shared/Attachments";
import UserHeader from "../Shared/UserHeader";
import IconDots from "../Shared/IconDots";
import "../Styles/style.css";

export default function ReportBody({ report }: { report: Report }) 
{
  return (
    <>
      <div className="card-header">
        <UserHeader
          firstname={report.ReportFrom.Firstname}
          lastname={report.ReportFrom.LastName}
          location={report.Location}
          date={report.Date}
        />
        <button className="menu-button">
          <IconDots />
        </button>
      </div>

      <h4 className="report-title">{report.Title || "Untitled Report"}</h4>
      <div className="card-content">
        {report.Attachments && report.Attachments.length > 0 && (
          <div className="attachments-wrapper">
            <AttachmentGrid attachments={report.Attachments} />
          </div>
        )}

        <div className="description-section">
          <h5 className="description-label">Description</h5>
          <p className="description-text">{report.Description}</p>
        </div>
      </div>
    </>
  );
}