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

import CommentsSection from "./Components/Convirsation";
import MainReport from "./Components/MainReport";
import RelatedSession from "./Components/RelatedReports";
import {useNavigate} from "react-router-dom";


/* ===========================
   Types & sample data
   =========================== */

export type Person = {
  type: string;
  Firstname: string;
  LastName: string;
};

export type Attachment = {
  name: string;
  url: string;
  type: string;
};

export type Report = {
  ReportFrom: Person;
  ReportTo: Person;
  Title: string;
  Description: string;
  Location: string;
  Priority: string;
  Status: string;
  Categorie: string;
  Date: string;
  Attachments: Attachment[];
  Related: Report[];
};

/* sample people + reports (same as original) */
const zoubir: Person = { type: "zoubir", Firstname: "Zoubir", LastName: "El Amrani" };
const person1: Person = { type: "staff", Firstname: "Alice", LastName: "Johnson" };
const person2: Person = { type: "student", Firstname: "Bob", LastName: "Smith" };
const person3: Person = { type: "staff", Firstname: "Charlie", LastName: "Brown" };

const report1: Report = {
  ReportFrom: person1,
  ReportTo: person2,
  Title: "Monthly Sales",
  Description: "Monthly sales report shows increase in revenue.",
  Location: "New York Office",
  Priority: "High",
  Status: "Pending",
  Categorie: "Sales",
  Date: "2025-11-30",
  Attachments: [
    { name: "sales-graph.png", url: "/download.png", type: "image/png" },
    { name: "summary.pdf", url: "/summary.pdf", type: "application/pdf" },
    { name: "sales-graph.png", url: "/download.png", type: "image/png" },
    { name: "sales-graph.png", url: "/download.png", type: "image/png" },
  ],
  Related: [],
};

const report2: Report = {
  ReportFrom: person3,
  ReportTo: person2,
  Title: "Product Launch Feedback",
  Description: "Client feedback on new product launch.",
  Location: "London Branch",
  Priority: "Medium",
  Status: "Completed",
  Categorie: "Client Feedback",
  Date: "2025-11-29",
  Attachments: [],
  Related: [report1],
};

const report3: Report = {
  ReportFrom: person2,
  ReportTo: person1,
  Title: "IT Maintenance Summary",
  Description: "Weekly IT system maintenance summary.",
  Location: "Remote",
  Priority: "Low",
  Status: "In Progress",
  Categorie: "IT",
  Date: "2025-11-28",
  Attachments: [
    { name: "sales-graph.png", url: "/download.png", type: "image/png" },
    { name: "summary.pdf", url: "/summary.pdf", type: "application/pdf" },
    { name: "sales-graph.png", url: "/download.png", type: "image/png" },
    { name: "sales-graph.png", url: "/download.png", type: "image/png" },
  ],
  Related: [report1, report2],
};

const reportZoubir: Report = {
  ReportFrom: person1,
  ReportTo: zoubir,
  Title: "Disciplinary Report",
  Description: "Incident report requiring review and comments.",
  Location: "Campus A",
  Priority: "High",
  Status: "Open",
  Categorie: "Discipline",
  Date: "2025-12-01",
  Attachments: [{ name: "evidence.png", url: "/download.png", type: "image/png" }],
  Related: [],
};

/* ===========================
   Small inline icons
   (so you don't need extra imports)
   =========================== */

// function IconLocation() {
//   return (
//     <svg className="w-3.5 h-3.5 text-[#98989d] flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
//       <path d="M10 2a6 6 0 016 6c0 4.5-6 10-6 10S4 12.5 4 8a6 6 0 016-6z" />
//     </svg>
//   );
// }

// function IconDots() {
//   return (
//     <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
//       <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z" />
//     </svg>
//   );
// }

// function IconGrid() {
//   return (
//     <svg className="w-6 h-6 text-[#98989d]" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
//     </svg>
//   );
// }

// function IconChevronDown() {
//   return (
//     <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
//       <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.25 3.99a.75.75 0 01-1.04 0L5.25 8.27a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
//     </svg>
//   );
// }

/* ===========================
   Utilities
   =========================== */

/* ===========================
   Location component (Tailwind dark)
   =========================== */

// export function Location({ location }: { location?: string }) {
//   if (!location) return null;
//   return (
//     <span className="inline-flex items-center gap-2 text-sm text-[#c7c7cc]">
//       <IconLocation />
//       {location}
//     </span>
//   );
// }

/* ===========================
   UserHeader (Tailwind dark)
   =========================== */

// export function UserHeader({
//   firstname,
//   lastname,
//   location,
//   date,
// }: {
//   firstname: string;
//   lastname: string;
//   location?: string;
//   date?: string;
// }) {
//   return (
//     <div className="flex items-center gap-3 flex-1">
//       <div
//         className="flex items-center justify-center rounded-full text-white font-semibold flex-shrink-0"
//         style={{
//           width: 48,
//           height: 48,
//           background: "linear-gradient(135deg,#667eea 0%,#764ba2 100%)",
//           fontSize: 16,
//         }}
//       >
//         {firstname.charAt(0)}
//         {lastname.charAt(0)}
//       </div>

//       <div className="flex flex-col gap-1">
//         <div className="flex items-center gap-2 flex-wrap">
//           <span className="font-semibold text-sm text-[#ffffff]">
//             {firstname} {lastname}
//           </span>
//           <span className="text-sm text-[#98989d]">is in</span>
//         </div>
//         {date && <span className="text-xs text-[#98989d]">{date}</span>}
//       </div>
//     </div>
//   );
// }

/* ===========================
   AttachmentPreview + AttachmentGrid
   (Tailwind dark)
   =========================== */

// function AttachmentPreview({ attachment }: { attachment: Attachment }) {
//   const type = getFileIcon(attachment.type);
//   if (type === "image") {
//     return (
//       <div className="attachment-item image-preview rounded-md overflow-hidden w-full h-[90px] flex items-center justify-center bg-[#2c2c2e] border border-[#38383a]">
//         <img src={attachment.url} alt={attachment.name || "Attachment"} className="w-full h-full object-cover" />
//       </div>
//     );
//   }

//   return (
//     <div className="attachment-item file-icon rounded-md w-full h-[90px] flex flex-col items-center justify-center gap-2 bg-[#1a2332] text-white">
//       <svg className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
//         <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
//       </svg>
//       <span className="text-xs font-semibold uppercase">{type}</span>
//     </div>
//   );
// }

// export function AttachmentGrid({ attachments }: { attachments: Attachment[] }) {
//   if (!attachments || attachments.length === 0) return null;
//   const visible = attachments.slice(0, 3);
//   const remaining = attachments.length - 3;

//   return (
//     <div className="attachments-wrapper w-full md:flex-0 md:w-[200px]">
//       <div className="grid grid-cols-2 gap-2 md:gap-2.5">
//         {visible.map((attachment, index) => (
//           <AttachmentPreview key={index} attachment={attachment} />
//         ))}
//         {remaining > 0 && (
//           <div className="attachment-item more-button rounded-md w-full h-[90px] flex items-center justify-center bg-[#2c3e50] text-white text-2xl font-semibold cursor-pointer hover:bg-[#34495e]">
//             +{remaining}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

/* ===========================
   CommentsSection (Tailwind dark)
   =========================== */

// export function CommentsSection({ report }: { report: Report }) {
//   return (
//     <div className="comments-container w-full max-w-[900px] mx-auto bg-[#1c1c1e] rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
//       <h3 className="chat-title text-lg font-semibold text-[#ffffff] mb-5 pb-3 border-b border-[#38383a]">
//         Chat Room {report.ReportFrom.Firstname} & {report.ReportTo.Firstname}
//       </h3>

//       {/* Comment 1 */}
//       <div className="comment flex mb-4 justify-start">
//         <div className="bubble max-w-[70%] p-3 rounded-xl bg-[#2c2c2e] text-[#e5e5e7] text-sm leading-6">
//           <p className="author font-semibold text-xs text-[#98989d] mb-1">{report.ReportTo.Firstname}</p>
//           I've checked the HVAC system. Cooling seems malfunctioning.
//         </div>
//       </div>

//       {/* Comment 2 */}
//       <div className="comment flex mb-4 justify-end">
//         <div className="bubble max-w-[70%] p-3 rounded-xl bg-[#0a84ff] text-white text-sm leading-6">
//           <p className="author font-semibold text-xs text-[#d0e8ff] mb-1">{report.ReportFrom.Firstname}</p>
//           Thanks for the quick response. Temperature is going down now.
//         </div>
//       </div>

//       {/* Comment 3 */}
//       <div className="comment flex mb-4 justify-start">
//         <div className="bubble max-w-[70%] p-3 rounded-xl bg-[#2c2c2e] text-[#e5e5e7] text-sm leading-6">
//           <p className="author font-semibold text-xs text-[#98989d] mb-1">{report.ReportTo.Firstname}</p>
//           Technician is on site now. Will be resolved soon.
//         </div>
//       </div>

//       {/* Message input */}
//       <div className="message-box flex gap-3 mt-6 pt-4 border-t border-[#38383a]">
//         <input
//           className="msg-input flex-1 px-4 py-2 rounded-md bg-[#2c2c2e] border border-[#38383a] text-[#e5e5e7] text-sm placeholder:text-[#636366] focus:outline-none focus:border-[#0a84ff] transition-colors"
//           placeholder="Type your message..."
//         />
//         <button className="send-btn px-6 py-2 bg-[#0a84ff] hover:bg-[#0070f3] rounded-md text-sm font-medium text-white">
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

/* ===========================
   Footer (tags & buttons) Tailwind dark
   =========================== */

// function Footer({ report }: { report: Report }) {
//   const isStaff = report.ReportTo?.type === "staff";

//   const priorityClass =
//     report.Priority === "High"
//       ? "bg-[#3d1a1a] text-[#ff6b6b]"
//       : report.Priority === "Medium"
//       ? "bg-[#3d2a1a] text-[#ffa726]"
//       : "bg-[#1a3d2a] text-[#66bb6a]";

//   const statusClass =
//     (report.Status || "Pending").toLowerCase() === "pending"
//       ? "bg-[#3d331a] text-[#ffd54f]"
//       : (report.Status || "completed").toLowerCase() === "completed"
//       ? "bg-[#1a3d2a] text-[#66bb6a]"
//       : "bg-[#1a2a3d] text-[#64b5f6]";

//   return (
//     <div className="footer flex justify-between items-center flex-wrap gap-3">
//       <div className="tags flex flex-wrap gap-2">
//         <span className={`tag px-3 py-1 rounded-md text-xs font-medium ${priorityClass}`}>{report.Priority}</span>
//         <span className={`tag px-3 py-1 rounded-md text-xs font-medium ${statusClass}`}>
//           {report.Status || "Pending"}
//         </span>
//         <span className="tag px-3 py-1 rounded-md text-xs font-medium bg-[#2d1a3d] text-[#ba68c8]">{report.Categorie}</span>
//       </div>

//       {isStaff ? (
//         <button className="assign-btn px-4 py-2 rounded-md text-sm font-medium bg-[#0a84ff] hover:bg-[#0070f3] text-white">
//           Assign to Zoubir
//         </button>
//       ) : (
//         <button className="edit-btn px-4 py-2 rounded-md text-sm font-medium bg-[#2c2c2e] border border-[#38383a] text-[#e5e5e7] hover:bg-[#38383a]">
//           Edit Report
//         </button>
//       )}
//     </div>
//   );
// }

/* ===========================
   MainReport (Tailwind dark)
   =========================== */

// export function MainReport({ report }: { report: Report }) {
//   return (
//     <div className="report-card w-full max-w-[900px] mx-auto mb-6 bg-[#1c1c1e] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.3)] p-6 md:p-8 transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
//       {/* Header */}
//       <div className="card-header flex items-start justify-between mb-4">
//         <UserHeader firstname={report.ReportFrom.Firstname} lastname={report.ReportFrom.LastName} date={report.Date} />
//         <button className="menu-button p-2 rounded-md text-[#98989d] hover:text-[#ffffff] hover:bg-[#2c2c2e]">
//           <IconDots />
//         </button>
//       </div>

//       {/* Title */}
//       <h4 className="report-title text-[20px] md:text-[22px] font-semibold text-[#ffffff] mb-4">{report.Title || "Untitled Report"}</h4>

//       {/* Content */}
//       <div className="card-content flex flex-col md:flex-row gap-4">
//         {report.Attachments && report.Attachments.length > 0 && (
//           <div className="attachments-wrapper md:flex-0 md:w-[200px]">
//             <AttachmentGrid attachments={report.Attachments} />
//           </div>
//         )}

//         <div className="description-section flex-1 min-w-0 mt-2">
//           <h5 className="description-label text-sm font-semibold text-[#ffffff] mb-2">Description</h5>
//           <p className="description-text text-sm text-[#98989d] leading-6 mb-10">{report.Description}</p>
//           <Location location={report.Location} />
//         </div>
//       </div>

//       {/* Divider */}
//       <hr className="divider border-t border-[#38383a] my-5" />

//       {/* Footer */}
//       <Footer report={report} />
//     </div>
//   );
// }

/* ===========================
   RelatedCard + RelatedSession (Tailwind dark)
   =========================== */

// function RelatedCard({ report }: { report: Report }) {
//   return (
//     <div className="related-card w-full max-w-[900px] mx-auto bg-[#1c1c1e] px-6 py-6 md:px-8 md:py-8 border-b border-[#38383a] transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
//       <div className="card-header flex items-start justify-between mb-3">
//         <UserHeader firstname={report.ReportFrom.Firstname} lastname={report.ReportFrom.LastName} location={report.Location} date={report.Date} />
//         <button className="menu-button p-2 rounded-md text-[#98989d] hover:text-[#ffffff] hover:bg-[#2c2c2e]">
//           <IconDots />
//         </button>
//       </div>

//       <h4 className="report-title text-[16px] font-semibold text-[#ffffff] mb-3">{report.Title || "Untitled Report"}</h4>

//       <div className="card-content flex flex-col gap-3">
//         {report.Attachments && report.Attachments.length > 0 && (
//           <div className="attachments-wrapper">
//             <AttachmentGrid attachments={report.Attachments} />
//           </div>
//         )}

//         <div className="description-section">
//           <h5 className="description-label text-sm font-semibold text-[#ffffff] mb-1">Description</h5>
//           <p className="description-text text-sm text-[#98989d] leading-6">{report.Description}</p>
//           <div className="mt-2"><Location location={report.Location} /></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function RelatedSession({ reports }: { reports: Report[] }) {
//   if (!reports || reports.length === 0) {
//     return (
//       <div className="related-wrapper w-full max-w-[900px] mx-auto bg-[#1c1c1e] rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.3)] mt-4">
//         <div className="related-empty p-10 text-center text-[#98989d] text-sm">No related reports.</div>
//       </div>
//     );
//   }

//   return (
//     <div className="related-wrapper w-full max-w-[900px] mx-auto bg-[#1c1c1e] rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.3)] mt-4">
//       <div className="related-header flex items-center justify-between px-6 py-4 border-b border-[#38383a]">
//         <div className="header-content flex items-center gap-3">
//           <div className="grid-icon flex items-center justify-center w-6 h-6 text-[#98989d]"><IconGrid /></div>
//           <h3 className="related-title text-[16px] font-semibold text-[#ffffff] m-0">Related Reports</h3>
//           <span className="related-count inline-block bg-[#f97316] text-white text-xs font-semibold px-2 py-1 rounded-full ml-2 min-w-[24px] text-center">{reports.length}</span>
//         </div>

//         <div className="sort-dropdown flex items-center gap-2 text-sm text-[#98989d] cursor-pointer">
//           <span>Sort By</span>
//           <IconChevronDown />
//         </div>
//       </div>

//       <div className="related-cards flex flex-col">
//         {reports.map((r, i) => (
//           <RelatedCard key={i} report={r} />
//         ))}
//       </div>
//     </div>
//   );
// }

/* ===========================
   ReportDetailsPage (default export)
   =========================== */

export default function ReportDetailsPage() 
{
  const report: Report = report3;
  const navigate = useNavigate();

  return (
    <div className="page-container max-w-[1200px] mx-auto p-5 md:p-10 bg-[#0f0f10] min-h-screen">
      <button onClick={() => navigate(-1)} className="mb-4 text-sm text-[#e5e5e7] bg-transparent border border-transparent hover:underline">
        ← Back
      </button>
      <MainReport report={report} />
      <CommentsSection report={report} />
      {/* Uncomment to show related */}
      {/* {report.ReportTo.type === "staff" && <RelatedSession reports={report.Related} />} */}
    </div>
  );
}