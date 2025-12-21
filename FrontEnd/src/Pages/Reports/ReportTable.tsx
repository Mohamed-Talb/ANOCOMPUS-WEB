import { useState } from 'react';
import { reports } from './illussiondata';
import PaginationTable from './Pagination';
import Badge from '../../Common/Badges.tsx';
import './styles/ReportsTable.css';

export type Report = {
  id: number;
  user: string;
  avatar: string;
  title: string;
  category: string;
  date: string;
  severity: string;
  severityColor: string;
  status: string;
};

export function Table({ data, columns, onRowClick }: { 
  data: Report[], 
  columns: string[],
  onRowClick: (report: Report) => void 
}) {
  return (
    <div className="reports-table-container">
      <div className="table-scroll-wrapper">
        <table className="reports-table">
          <thead className="table-header">
            <tr>
              {columns.map(col => (
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
                onClick={() => onRowClick(report)}
                style={{ cursor: 'pointer' }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onRowClick(report);
                  }
                }}
              >
                <td className="table-cell">
                  <div className="user-cell">
                    <div className="user-avatar">
                      {report.avatar}
                    </div>
                    <span className="user-name">{report.user}</span>
                  </div>
                </td>
                <td className="table-cell table-cell-date">{report.date}</td>
                <td className="table-cell table-cell-title">{report.title}</td>
                <td className="table-cell">
                  <Badge text={report.category} type='category' />
                </td>
                <td className="table-cell">
                  <Badge text={report.severity} type='severity' />
                </td>
                <td className="table-cell">
                  <Badge text={report.status} type='status' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ReportsTable() {
  const columns: string[] = ["user", "date", "title", "priority", "status", "severity"];
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(reports.length / rowsPerPage);
  const currentReports = reports.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const handleRowClick = (report: Report) => {
    // Navigate to report details page
    // Option 1: Using React Router (uncomment if using React Router)
    // navigate(`/reports/${report.id}`);
    
    // Option 2: Using window.location (uncomment to use)
    // window.location.href = `/reports/${report.id}`;
    
    // Option 3: For testing - logs the clicked report
    console.log('Navigating to report details:', report);
    alert(`Opening report: ${report.title} (ID: ${report.id})`);
  };
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
