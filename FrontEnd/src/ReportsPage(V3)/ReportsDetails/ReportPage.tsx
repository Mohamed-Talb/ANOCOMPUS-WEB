import React from "react";

import ReportCard from "../../reports/components/ReportCard";
import RelatedReports from "../../reports/components/RelatedReports";
import CommentsSection from "../../reports/components/CommentsSection";
import "../Styles/style.css";

export type Person = {
  type: string;
  Firstname: string;
  LastName: string;
};

export type Attachment = {
  name: string;      // File name
  url: string;       // File URL or base64 string
  type: string;      // MIME t
  // ype
};

export type Report = {
  ReportFrom: Person;
  ReportTo: Person;

  Title: string;
  Description: string;
  Location: string;

  Priority: string;
  Status: string;      // <-- Added Status
  Categorie: string;
  Date: string;

  Attachments: Attachment[];  
  Related: Report[];
};

// Example Persons
const person1: Person = { type: "staff", Firstname: "Alice", LastName: "Johnson" };
const person2: Person = { type: "student", Firstname: "Bob", LastName: "Smith" };
const person3: Person = { type: "staff", Firstname: "Charlie", LastName: "Brown" };

// Example Reports
const report1: Report = {
  ReportFrom: person1,
  ReportTo: person2,
  Title: "Monthly Sales",
  Description: "Monthly sales report shows increase in revenue.",
  Location: "New York Office",
  Priority: "High",
  Status: "Pending",     // <-- Added Status
  Categorie: "Sales",
  Date: "2025-11-30",
  Attachments: [
    { name: "sales-graph.png", url: "../public/download.png", type: "image/png" },
    { name: "summary.pdf", url: "/home/sig/UM6P-PROJECT-STAFF-ZOUBIR-PAGES/public/Python Programming.pdf", type: "application/pdf" },
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
  Status: "Completed",   // <-- Added Status
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
  Status: "In Progress", // <-- Added Status
  Categorie: "IT",
  Date: "2025-11-28",
  Attachments: [
    { name: "sales-graph.png", url: "../public/download.png", type: "image/png" },
    { name: "summary.pdf", url: "/home/sig/UM6P-PROJECT-STAFF-ZOUBIR-PAGES/public/Python Programming.pdf", type: "application/pdf" },
    { name: "sales-graph.png", url: "../public/download.png", type: "image/png" },
    { name: "sales-graph.png", url: "../public/download.png", type: "image/png" },
  ],
  Related: [report1, report2],
};




// Example Reports
export default function ReportPage({ userRole }: { userRole: string }) 
{
  const report: Report = report3;

  return (
    <div className="page-container">
      <ReportCard Report={report} />
      {report.ReportTo.type === "staff" && <RelatedReports report={report} />}
      {report.ReportTo.type === "zoubir" && <CommentsSection Report={report} />}
    </div>
  );
}
