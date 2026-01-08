import React from "react";


// ReportPage.tsx
import './Styles/ReportDetails.css';  
import './Styles/MainReport.css';
import './Styles/Footer.css';
import './Styles/RelatedReport.css';
import './Styles/UserHeader.css';
import './Styles/Attachments.css'
import './Styles/Conversation.css';
import "./Styles/Darckmode.css";

import CommentsSection from "./Components/Convirsation";
import MainReport from "./Components/MainReport";
import RelatedSession from "./Components/RelatedReports";
import {useNavigate} from "react-router-dom";




export type Person = 
{
  type: string;
  Firstname: string;
  LastName: string;
};

export type Attachment = 
{
  name: string;
  url: string;
  type: string;
};

export type Report = 
{
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

const zoubir: Person = 
{
  type: "zoubir",
  Firstname: "Zoubir",
  LastName: "El Amrani",
};

const person1: Person = 
{
  type: "staff",
  Firstname: "Alice",
  LastName: "Johnson",
};

const person2: Person = 
{
  type: "student",
  Firstname: "Bob",
  LastName: "Smith",
};

const person3: Person = 
{
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


const reportZoubir: Report = 
{
  ReportFrom: person1,
  ReportTo: zoubir, // 👈 important
  Title: "Disciplinary Report",
  Description: "Incident report requiring review and comments.",
  Location: "Campus A",
  Priority: "High",
  Status: "Open",
  Categorie: "Discipline",
  Date: "2025-12-01",
  Attachments: [
    { name: "evidence.png", url: "../public/download.png", type: "image/png" },
  ],
  Related: [],
};

// ===============================================
// MAIN PAGE COMPONENT
// ===============================================

export default function ReportDetailsPage() 
{
  const report: Report = report3;
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <button onClick={() => navigate(-1)}>Back</button>
      <MainReport report={report} />
      <CommentsSection report={report}/>
      {/* {report.ReportTo.type === "staff" && (<RelatedSession reports={report.Related} />)}
      {report.ReportTo.type === "zoubir" && <CommentsSection report={report} />} */}
    </div>
  );
}