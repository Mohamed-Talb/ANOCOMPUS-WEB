import React from "react";


// ReportPage.tsx
// import './Styles/ReportDetails.css';  
// import './Styles/MainReport.css';
// import './Styles/Footer.css';
// import './Styles/RelatedReport.css';
// import './Styles/UserHeader.css';
// // import './Styles/Attachments.css'
// import './Styles/Conversation.css';
// import "./Styles/Darckmode.css";

// import CommentsSection from "./Components/Convirsation";
// import MainReport from "./Components/MainReport";
// import RelatedSession from "./Components/RelatedReports";
import {useNavigate} from "react-router-dom";
import { IconDots } from "../../../Common/icons/Icons";
import type {Report, Person, Attachment} from "../types";
import { IconChevronDown } from "../../../Common/icons/Icons";
import { IconLocation } from "../../../Common/icons/Icons";
import { IconGrid } from "../../../Common/icons/Icons";


export function UserHeader({
  firstname,
  lastname,
  date,
}: {
  firstname: string;
  lastname: string;
  location?: string;
  date?: string;
}) {
  return (
    <div className="flex items-center gap-3 flex-1">
      <div
        className="flex items-center justify-center rounded-full text-white font-semibold flex-shrink-0"
        style={{
          width: 48,
          height: 48,
          background: "linear-gradient(135deg,#667eea 0%,#764ba2 100%)",
          fontSize: 16,
        }}
      >
        {firstname.charAt(0)}
        {lastname.charAt(0)}
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold text-sm text-[#ffffff]">
            {firstname} {lastname}
          </span>
          <span className="text-sm text-[#98989d]">is in</span>
        </div>
        {date && <span className="text-xs text-[#98989d]">{date}</span>}
      </div>
    </div>
  );
}

export function Location({ location }: { location?: string }) {
  if (!location) return null;
  return (
    <span className="inline-flex items-center gap-2 text-sm text-[#c7c7cc]">
      <IconLocation />
      {location}
    </span>
  );
}

export function getFileIcon(type: string): string {
  if (type.startsWith("image/")) return "image";
  if (type === "application/pdf") return "pdf";
  if (type.includes("word")) return "doc";
  if (type.includes("excel") || type.includes("sheet")) return "excel";
  return "file";
}


function AttachmentPreview({ attachment }: { attachment: Attachment }) {
  const type = getFileIcon(attachment.type);
  if (type === "image") {
    return (
      <div className="attachment-item image-preview rounded-md overflow-hidden w-full h-[90px] flex items-center justify-center bg-[#2c2c2e] border border-[#38383a]">
        <img src={attachment.url} alt={attachment.name || "Attachment"} className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div className="attachment-item file-icon rounded-md w-full h-[90px] flex flex-col items-center justify-center gap-2 bg-[#1a2332] text-white">
      <svg className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
      </svg>
      <span className="text-xs font-semibold uppercase">{type}</span>
    </div>
  );
}

export function AttachmentGrid({ attachments }: { attachments: Attachment[] }) {
  if (!attachments || attachments.length === 0) return null;
  const visible = attachments.slice(0, 3);
  const remaining = attachments.length - 3;

  return (
    <div className="attachments-wrapper w-full md:flex-0 md:w-[200px]">
      <div className="grid grid-cols-2 gap-2 md:gap-2.5">
        {visible.map((attachment, index) => (
          <AttachmentPreview key={index} attachment={attachment} />
        ))}
        {remaining > 0 && (
          <div className="attachment-item more-button rounded-md w-full h-[90px] flex items-center justify-center bg-[#2c3e50] text-white text-2xl font-semibold cursor-pointer hover:bg-[#34495e]">
            +{remaining}
          </div>
        )}
      </div>
    </div>
  );
}

export function CommentsSection({ report }: { report: Report }) {
  return (
    <div className="comments-container w-full max-w-[900px] mx-auto bg-[#1c1c1e] rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
      <h3 className="chat-title text-lg font-semibold text-[#ffffff] mb-5 pb-3 border-b border-[#38383a]">
        Chat Room {report.ReportFrom.Firstname} & {report.ReportTo.Firstname}
      </h3>

      <div className="comment flex mb-4 justify-start">
        <div className="bubble max-w-[70%] p-3 rounded-xl bg-[#2c2c2e] text-[#e5e5e7] text-sm leading-6">
          <p className="author font-semibold text-xs text-[#98989d] mb-1">
            {report.ReportTo.Firstname}
          </p>
          I've checked the HVAC system. Cooling seems malfunctioning.
        </div>
      </div>

      <div className="comment flex mb-4 justify-end">
        <div className="bubble max-w-[70%] p-3 rounded-xl bg-[#0a84ff] text-white text-sm leading-6">
          <p className="author font-semibold text-xs text-[#d0e8ff] mb-1">
            {report.ReportFrom.Firstname}
          </p>
          Thanks for the quick response. Temperature is going down now.
        </div>
      </div>

      <div className="comment flex mb-4 justify-start">
        <div className="bubble max-w-[70%] p-3 rounded-xl bg-[#2c2c2e] text-[#e5e5e7] text-sm leading-6">
          <p className="author font-semibold text-xs text-[#98989d] mb-1">
            {report.ReportTo.Firstname}
          </p>
          Technician is on site now. Will be resolved soon.
        </div>
      </div>

      <div className="message-box flex gap-3 mt-6 pt-4 border-t border-[#38383a]">
        <input
          className="msg-input flex-1 px-4 py-2 rounded-md bg-[#2c2c2e] border border-[#38383a] text-[#e5e5e7] text-sm placeholder:text-[#636366] focus:outline-none focus:border-[#0a84ff]"
          placeholder="Type your message..."
        />
        <button className="send-btn px-6 py-2 bg-[#0a84ff] hover:bg-[#0070f3] rounded-md text-sm font-medium text-white">
          Send
        </button>
      </div>
    </div>
  );
}


function RelatedCard({ report }: { report: Report }) {
  return (
    <div className="related-card w-full max-w-[900px] mx-auto bg-[#1c1c1e] px-6 py-6 border-b border-[#38383a]">
      {/* Card header */}
      <div className="card-header flex items-start justify-between mb-3">
        <UserHeader
          firstname={report.ReportFrom.Firstname}
          lastname={report.ReportFrom.LastName}
          date={report.Date}
        />
        <button className="menu-button p-2 rounded-md text-[#98989d] hover:text-white hover:bg-[#2c2c2e]">
          <IconDots />
        </button>
      </div>

      {/* Title */}
      <h4 className="text-[16px] font-semibold text-white mb-3">
        {report.Title || "Untitled Report"}
      </h4>

      {/* Attachments + Description */}
      <div className="flex flex-col md:flex-row md:gap-3">
        {/* Attachments */}
        {report.Attachments?.length > 0 && (
          <div className="flex-shrink-0 w-full md:w-1/2">
            <AttachmentGrid attachments={report.Attachments} />
          </div>
        )}

        {/* Description */}
        <div className="mt-3 md:mt-0 w-full md:w-1/2">
          <h5 className="text-sm font-semibold text-white mb-1">Description</h5>
          <p className="text-sm text-[#98989d] leading-6">
            {report.Description}
          </p>
          <div className="mt-2">
            <Location location={report.Location} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function RelatedSession({ reports }: { reports: Report[] }) {
  if (!reports?.length) {
    return (
      <div className="max-w-[900px] mx-auto bg-[#1c1c1e] rounded-xl p-10 text-center text-[#98989d]">
        No related reports.
      </div>
    );
  }

  return (
    <div className="max-w-[900px] mx-auto bg-[#1c1c1e] rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#38383a]">
        <div className="flex items-center gap-3">
          <IconGrid />
          <h3 className="text-white font-semibold">Related Reports</h3>
          <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
            {reports.length}
          </span>
        </div>
        <div className="flex items-center gap-1 text-sm text-[#98989d] cursor-pointer">
          Sort By <IconChevronDown />
        </div>
      </div>

      {/* Report cards */}
      {reports.map((report, index) => (
        <RelatedCard key={index} report={report} />
      ))}
    </div>
  );
}


function Footer({ report }: { report: Report }) {
  const isStaff = report.ReportTo?.type === "staff";

  const priorityClass =
    report.Priority === "High"
      ? "bg-[#3d1a1a] text-[#ff6b6b]"
      : report.Priority === "Medium"
      ? "bg-[#3d2a1a] text-[#ffa726]"
      : "bg-[#1a3d2a] text-[#66bb6a]";

  return (
    <div className="flex justify-between items-center flex-wrap gap-3">
      <span className={`px-3 py-1 rounded-md text-xs ${priorityClass}`}>
        {report.Priority}
      </span>

      {isStaff ? (
        <button className="bg-blue-600 px-4 py-2 rounded-md text-white">
          Assign to Zoubir
        </button>
      ) : (
        <button className="bg-[#2c2c2e] px-4 py-2 rounded-md text-white">
          Edit Report
        </button>
      )}
    </div>
  );
}


export function MainReport({ report }: { report: Report }) {
  return (
    <div className="report-card w-full max-w-[900px] mx-auto mb-6 bg-[#1c1c1e] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.3)] p-6 md:p-8 transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
      {/* Header */}
      <div className="card-header flex items-start justify-between mb-4">
        <UserHeader
          firstname={report.ReportFrom.Firstname}
          lastname={report.ReportFrom.LastName}
          date={report.Date}
        />
        <button className="menu-button p-2 rounded-md text-[#98989d] hover:text-white hover:bg-[#2c2c2e]">
          <IconDots />
        </button>
      </div>

      {/* Title */}
      <h4 className="report-title text-[20px] md:text-[22px] font-semibold text-white mb-4">
        {report.Title || "Untitled Report"}
      </h4>

      {/* Content */}
      <div className="card-content flex flex-col md:flex-row gap-4">
        {report.Attachments?.length > 0 && (
          <div className="attachments-wrapper md:flex-0 md:w-[200px]">
            <AttachmentGrid attachments={report.Attachments} />
          </div>
        )}

        <div className="description-section flex-1 min-w-0 mt-2">
          <h5 className="description-label text-sm font-semibold text-white mb-2">
            Description
          </h5>
          <p className="description-text text-sm text-[#98989d] leading-6 mb-2">
              {report.Description}
          </p>
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

// import { report3 } from "../IuationData";
// export default function ReportDetailsPage() {
//   const report: Report = report3;
//   const navigate = useNavigate();

//   return (
//     <div className="max-w-[1200px] mx-auto p-6 bg-[#0f0f10] min-h-screen">
//       <button onClick={() => navigate(-1)} className="mb-4 text-sm text-white">
//         ← Back
//       </button>

//       <MainReport report={report} />
//       {report.ReportTo.type === "zoubir" && (
//         <CommentsSection report={report} />
//       )}

//       {report.ReportTo.type === "staff" && (
//         <RelatedSession reports={report.Related ?? []} />
//       )}
//     </div>
//   );
// }


import { useParams} from 'react-router-dom';
import { sampleReports } from '../IluationData';

export default function ReportDetailsPage() 
{
  const { id } = useParams();
  const navigate = useNavigate();

  const report = sampleReports.find(r => r.id === id);
  if (!report) return <div className="text-white p-4">Report not found</div>;

  return (
    <div className="max-w-[1200px] mx-auto p-6 bg-[#0f0f10] min-h-screen">
      <button onClick={() => navigate(-1)} className="mb-4 text-sm text-white">← Back</button>

      <MainReport report={report} />
      {report.ReportTo.type === 'zoubir' && <CommentsSection report={report} />}
      {report.ReportTo.type === 'staff' && <RelatedSession reports={report.Related ?? []} />}
    </div>
  );
}
