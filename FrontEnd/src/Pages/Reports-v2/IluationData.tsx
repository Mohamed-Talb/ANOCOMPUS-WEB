import type { Person, Report } from "./types";

// ✅ Persons
export const zoubir: Person = {
  type: "zoubir",
  Firstname: "Zoubir",
  LastName: "El Amrani",
};

export const staff1: Person = {
  type: "staff",
  Firstname: "Alice",
  LastName: "Johnson",
};

export const staff2: Person = {
  type: "staff",
  Firstname: "Charlie",
  LastName: "Brown",
};

export const student1: Person = {
  type: "student",
  Firstname: "Bob",
  LastName: "Smith",
};

// ✅ Report (1) — To Zoubir ✅ => will show CommentsSection
export const reportZoubir: Report = {
  id: "report-zoubir-1",
  ReportFrom: staff1,
  ReportTo: zoubir,
  Title: "Disciplinary Report",
  Description:
    "Incident report requiring review and comments. Student was involved in an issue near the library entrance.",
  Location: "Campus A",
  Priority: "High",
  Status: "Open",
  Categorie: "Discipline",
  Date: "2026-01-08T10:00:00",
  Attachments: [
    { name: "evidence.png", url: "/download.png", type: "image/png" },
    { name: "camera-footage.mp4", url: "/download.png", type: "video/mp4" },
    { name: "witness-report.pdf", url: "/summary.pdf", type: "application/pdf" },
    { name: "second-photo.png", url: "/download.png", type: "image/png" },
  ],
  Related: [],
};

// ✅ Report (2) — Will be used inside RelatedSession cards
export const reportRelated1: Report = {
  id: "report-related-1",
  ReportFrom: student1,
  ReportTo: staff1,
  Title: "Login issue",
  Description:
    "When I try to log into my session, it shows an error and redirects to the home page.\nSteps:\n1- Click login\n2- Add email/password\n3- shows 403 error.",
  Location: "Computer Lab",
  Priority: "Low",
  Status: "New",
  Categorie: "Technical",
  Date: "2026-01-07T09:30:00",
  Attachments: [
    { name: "error-screenshot.png", url: "/download.png", type: "image/png" },
    { name: "console-log.txt", url: "/summary.pdf", type: "text/plain" },
  ],
  Related: [],
};

// ✅ Report (3) — Another related report
export const reportRelated2: Report = {
  id: "report-related-2",
  ReportFrom: staff2,
  ReportTo: staff1,
  Title: "Maintenance request",
  Description:
    "The projector in room 205 is flickering. Needs replacement or check cable connection.",
  Location: "Room 205",
  Priority: "Medium",
  Status: "On it",
  Categorie: "Maintenance",
  Date: "2026-01-06T14:00:00",
  Attachments: [
    { name: "projector-photo.png", url: "/download.png", type: "image/png" },
    { name: "invoice.pdf", url: "/summary.pdf", type: "application/pdf" },
    { name: "wire-photo.png", url: "/download.png", type: "image/png" },
  ],
  Related: [],
};

// ✅ Report (4) — To Staff ✅ => will show RelatedSession
export const reportStaffWithRelated: Report = {
  id: "report-staff-1",
  ReportFrom: student1,
  ReportTo: staff1, // ✅ type === "staff"
  Title: "IT Maintenance Summary",
  Description:
    "Weekly IT system maintenance summary.\n- Network checked\n- Router updated\n- HVAC control panel reset",
  Location: "Remote",
  Priority: "High",
  Status: "In Progress",
  Categorie: "IT",
  Date: "2026-01-08T08:00:00",
  Attachments: [
    { name: "network-diagram.png", url: "/download.png", type: "image/png" },
    { name: "report.pdf", url: "/summary.pdf", type: "application/pdf" },
    { name: "logs.txt", url: "/summary.pdf", type: "text/plain" },
    { name: "room-photo.png", url: "/download.png", type: "image/png" },
  ],
  Related: [reportRelated1, reportRelated2], // ✅ RelatedSession will show
};

// ✅ Sample Reports List used by ReportsList
export const sampleReports: Report[] = [
  reportZoubir, // ✅ comments mode
  reportStaffWithRelated, // ✅ related reports mode
  reportRelated1,
  reportRelated2,
];
