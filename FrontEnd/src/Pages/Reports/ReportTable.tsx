import { useState } from 'react';
import { reports } from './illussiondata';
import PaginationTable from './Pagination';
import Badge from '../../Common/Badges.tsx';
import './styles/ReportsTable.css';
import { useNavigate } from "react-router-dom";

/* =========================
   Types
========================= */
export type Report = {
  id: number;
  user: string;
  avatar?: string;
  title: string;
  category: string;
  date: string;
  severity: string;
  severityColor: string;
  status: string;
};

/* =========================
   Default Avatar (SVG)
========================= */
const DEFAULT_AVATAR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%235a5a5a'/%3E%3Ccircle cx='100' cy='70' r='35' fill='%23b8b8b8'/%3E%3Cpath d='M40 200 Q40 140 100 140 Q160 140 160 200 Z' fill='%23b8b8b8'/%3E%3C/svg%3E";

/* =========================
   Table Component
========================= */
export function Table({
  data,
  columns,
  onRowClick,
}: {
  data: Report[];
  columns: string[];
  onRowClick: (report: Report) => void;
}) {
  return (
    <div className="reports-table-container">
      <div className="table-scroll-wrapper">
        <table className="reports-table">
          <thead className="table-header">
            <tr>
              {columns.map((col) => (
                <th key={col} className="table-header-cell">
                  {col.charAt(0).toUpperCase() + col.slice(1)}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="table-body">
            {data.map((report) => (
              <tr
                key={report.id}
                className="table-row"
                role="button"
                tabIndex={0}
                style={{ cursor: "pointer" }}
                onClick={() => onRowClick(report)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onRowClick(report);
                  }
                }}
              >
                {/* USER */}
                <td className="table-cell">
                  <div className="user-cell">
                    <img
                      className="user-avatar"
                      src={report.avatar || DEFAULT_AVATAR}
                      alt={report.user}
                      onError={(e) => {
                        e.currentTarget.src = DEFAULT_AVATAR;
                      }}
                    />
                    <span className="user-name">{report.user}</span>
                  </div>
                </td>

                {/* DATE */}
                <td className="table-cell table-cell-date">
                  {report.date}
                </td>

                {/* TITLE */}
                <td className="table-cell table-cell-title">
                  {report.title}
                </td>

                {/* CATEGORY */}
                <td className="table-cell">
                  <Badge text={report.category} type="category" />
                </td>

                {/* SEVERITY */}
                <td className="table-cell">
                  <Badge text={report.severity} type="severity" />
                </td>

                {/* STATUS */}
                <td className="table-cell">
                  <Badge text={report.status} type="status" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* =========================
   Reports Table Page
========================= */
// export function ReportsTable() {
//   const navigate = useNavigate();

//   const columns: string[] = [
//     "user",
//     "date",
//     "title",
//     "priority",
//     "status",
//     "severity",
//   ];

// export type Report = {
//   id: number;
//   user: string;
//   avatar?: string;
//   title: string;
//   category: string;
//   date: string;
//   severity: string;
//   severityColor: string;
//   status: string;
// };

// const DEFAULT_AVATAR  = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%235a5a5a'/%3E%3Ccircle cx='100' cy='70' r='35' fill='%23b8b8b8'/%3E%3Cpath d='M40 200 Q40 140 100 140 Q160 140 160 200 Z' fill='%23b8b8b8'/%3E%3C/svg%3E";


// export function Table({ data, columns, onRowClick }: { 
//   data: Report[], 
//   columns: string[],
//   onRowClick: (report: Report) => void 
// }) {
//   return (
//     <div className="reports-table-container">
//       <div className="table-scroll-wrapper">
//         <table className="reports-table">
//           <thead className="table-header">
//             <tr>
//               {columns.map(col => (
//                 <th key={col} className="table-header-cell">
//                   {col.charAt(0).toUpperCase() + col.slice(1)}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="table-body">
//             {data.map((report) => (
//               <tr 
//                 key={report.id} 
//                 className="table-row"
//                 onClick={() => onRowClick(report)}
//                 style={{ cursor: 'pointer' }}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={(e) => {
//                   if (e.key === 'Enter' || e.key === ' ') {
//                     e.preventDefault();
//                     onRowClick(report);
//                   }
//                 }}
//               >
//                 <td className="table-cell">
//                   <div className="user-cell">
//                     <div className="user-avatar">
//                       {report.avatar}
//                     </div>
//                     <span className="user-name">{report.user}</span>
//                   </div>
//                 </td>
//                 <td className="table-cell table-cell-date">{report.date}</td>
//                 <td className="table-cell table-cell-title">{report.title}</td>
//                 <td className="table-cell">
//                   <Badge text={report.category} type='category' />
//                 </td>
//                 <td className="table-cell">
//                   <Badge text={report.severity} type='severity' />
//                 </td>
//                 <td className="table-cell">
//                   <Badge text={report.status} type='status' />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

export function ReportsTable() {
  const columns: string[] = ["user", "date", "title", "priority", "status", "severity"];
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(reports.length / rowsPerPage);
  const currentReports = reports.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
  const navigate = useNavigate();
  const handleRowClick = (report: Report) => {navigate(`/reports/${report.id}`);};
  return (
    <div className="reports-page-wrapper">

      <Table data={currentReports} columns={columns} onRowClick={handleRowClick}/>
      <PaginationTable currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage}/>
    </div>
  );
}


// add the redirect to reports details
// chnage the icon of profile 
// the user always displaying 
