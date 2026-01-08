import type { Person, Report, Attachment } from './types';

// Persons
export const zoubir: Person = { type: "zoubir", Firstname: "Zoubir", LastName: "El Amrani" };
export const person1: Person = { type: "staff", Firstname: "Alice", LastName: "Johnson" };
export const person2: Person = { type: "student", Firstname: "Bob", LastName: "Smith" };
export const person3: Person = { type: "staff", Firstname: "Charlie", LastName: "Brown" };

// Reports
export const report1: Report = {
  id: "report-1",
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
    { name: "summary.pdf", url: "/summary.pdf", type: "application/pdf" }
  ],
  Related: [],
};


export const report2: Report = {
  id: "report-2",
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


export const report3: Report = {
  id: "report-3",
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
    { name: "summary.pdf", url: "/summary.pdf", type: "application/pdf" }
  ],
  Related: [report1, report2],
};


export const reportZoubir: Report = {
  id: "report-zoubir-1",
  ReportFrom: person1,
  ReportTo: zoubir,
  Title: "Disciplinary Report",
  Description: "Incident report requiring review and comments.",
  Location: "Campus A",
  Priority: "High",
  Status: "Open",
  Categorie: "Discipline",
  Date: "2025-12-01",
  Attachments: [
    { name: "evidence.png", url: "/download.png", type: "image/png" }
  ],
  Related: [],
};


export const sampleReports: Report[] = [
  {
    id: "sample-1",
    ReportFrom: { type: "Staff", Firstname: "John", LastName: "Doe" },
    ReportTo: { type: "Admin", Firstname: "Zoubir", LastName: "Admin" },
    Title: "Campus + login(new student)",
    Description: "Heyx, lmhm knt saisit email dyali dt337...",
    Location: "Building A",
    Priority: "high",
    Status: "Fixed",
    Categorie: "IT",
    Date: "2025-01-08T10:00:00",
    Attachments: [],
    Related: []
  },
  {
    id: "sample-2",
    ReportFrom: { type: "Staff", Firstname: "Ahmed", LastName: "Mehdi" },
    ReportTo: { type: "Admin", Firstname: "Zoubir", LastName: "Admin" },
    Title: "Pace 18 issue",
    Description: "Khoya Mehdi, Validit l projects kamlin...",
    Location: "Lab 3",
    Priority: "medium",
    Status: "New",
    Categorie: "Academic",
    Date: "2025-01-08T09:00:00",
    Attachments: [],
    Related: []
  },
  {
    id: "sample-3",
    ReportFrom: { type: "Student", Firstname: "Sara", LastName: "Benjami" },
    ReportTo: { type: "Staff", Firstname: "Rabat", LastName: "Staff" },
    Title: "Login issue",
    Description: "when I try to log into my session...",
    Location: "Computer Lab",
    Priority: "low",
    Status: "New",
    Categorie: "Technical",
    Date: "2025-01-08T08:00:00",
    Attachments: [],
    Related: []
  },
  {
    id: "sample-4",
    ReportFrom: { type: "Staff", Firstname: "Mounir", LastName: "Lrnoo" },
    ReportTo: { type: "Admin", Firstname: "Zoubir", LastName: "Admin" },
    Title: "There is a problem with computers",
    Description: "Wahd l'badge t'7bess t5dit bih...",
    Location: "Room 205",
    Priority: "high",
    Status: "On it",
    Categorie: "Maintenance",
    Date: "2025-01-06T14:00:00",
    Attachments: [],
    Related: []
  }
];
