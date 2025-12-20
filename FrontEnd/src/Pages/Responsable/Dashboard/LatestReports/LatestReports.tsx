import './LatestReports.css'
import './DarkMode.css'
import { FileText } from 'lucide-react'

function ReportItem({ title, content, date, status }: { title: string; content: string; date: string; status: string }) {
    return (
        <div className="report-item">
            <div className="report-header">
                <div className="report-title-section">
                    <h3 className='title-el-func'>{title}</h3>
                </div>
                <span className="report-date">
                    <FileText className="date-icon" />
                    {date}
                </span>
            </div>
            <div className="report-status-badge">
                <span className={`status-indicator status-${status.toLowerCase()}`}>{status}</span>
            </div>
            <p className='content-el-func'>{content}</p>
        </div>
    );
}

function LatestReports() {

    const reports = [
        { 
            id: 1, 
            title: "Server Error Detected", 
            content: "Critical server error in production environment", 
            date: "2025-12-14",
            status: "Critical"
        },
        { 
            id: 2, 
            title: "Network Issue", 
            content: "Network connectivity issues in Building A", 
            date: "2025-12-13",
            status: "Pending"
        },
        { 
            id: 3, 
            title: "Database Connection", 
            content: "Database connection successfully restored", 
            date: "2025-12-12",
            status: "Fixed"
        },
        { 
            id: 4, 
            title: "Security Update", 
            content: "Security patches applied to all systems", 
            date: "2025-12-11",
            status: "Fixed"
        },
        { 
            id: 5, 
            title: "Performance Issue", 
            content: "Application performance degradation detected", 
            date: "2025-12-10",
            status: "Pending"
        }
    ];

    return (
        <div className='LatestReports'>

            <div className='header-el'>
                <h2 className='title-el'>Latest Reports</h2>
                <button className='view-all-el'>View all</button>
            </div>

            {reports.map(report => (
                <ReportItem
                    key={report.id}
                    title={report.title}
                    content={report.content}
                    date={report.date}
                    status={report.status}
                />
            ))}

        </div>
    );
}

export default LatestReports;
