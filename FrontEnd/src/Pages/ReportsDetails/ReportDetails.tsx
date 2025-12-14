import React from "react";
import "./Styles/styles.css";


// import "./Styles/index.css";

// import "./Styles/RelatedReports.css"
// import "./Styles/ReportCard.css"
// import "./Styles/Base.css"
// import "./Styles/Attachments.css"
// import "./Styles/Conversation.css"
// import "./Styles/Footer.css"
// import "./Styles/layout.css"

import CommentsSection from "./Components/Convirsation";
import MainReport from "./Components/MainReport";
import RelatedSession from "./Components/RelatedReports";




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

const person1: Person = {
  type: "staff",
  Firstname: "Alice",
  LastName: "Johnson",
};

const person2: Person = {
  type: "student",
  Firstname: "Bob",
  LastName: "Smith",
};

const person3: Person = {
  type: "staff",
  Firstname: "Charlie",
  LastName: "Brown",
};

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
    { name: "sales-graph.png", url: "../public/download.png", type: "image/png" },
    { name: "summary.pdf", url: "../public/summary.pdf", type: "application/pdf" },
    { name: "sales-graph.png", url: "../public/download.png", type: "image/png" },
    { name: "sales-graph.png", url: "../public/download.png", type: "image/png" },
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
    { name: "sales-graph.png", url: "../public/download.png", type: "image/png" },
    { name: "summary.pdf", url: "../public/summary.pdf", type: "application/pdf" },
    { name: "sales-graph.png", url: "../public/download.png", type: "image/png" },
    { name: "sales-graph.png", url: "../public/download.png", type: "image/png" },
  ],
  Related: [report1, report2],
};

// ===============================================
// MAIN PAGE COMPONENT
// ===============================================

export default function ReportPage() 
{
  const report: Report = report3;

  return (
    <div className="page-container">
      {/* Main Report */}
      <MainReport report={report} />
      {/* Related Reports Session (if recipient is staff) */}
      {report.ReportTo.type === "staff" && (<RelatedSession reports={report.Related} />)}
      {/* Comments Section (if recipient is Zoubir) */}
      {report.ReportTo.type === "zoubir" && <CommentsSection report={report} />}
    </div>
  );
}