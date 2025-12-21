import React from 'react';
import { useState } from 'react';
import Badge from '../../Common/Badges';
import { reports } from './illussiondata';
import PaginationTable from './Paginattable';

export type Report = 
{
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

export function ReportTable({ data, columns}: { data: Report[], columns:string[]}) {

  return (
    <div style={{fontFamily:"Arial", maxWidth:"1400px",margin:"0 auto",background:"white",borderRadius:"12px",boxShadow:"0 2px 8px rgba(0,0,0,0.08)",border:"1px solid #e5e5e5",overflow:"hidden"}}>
      <div style={{overflow:"auto",maxHeight:"calc(100vh - 100px)"}}>
        <table style={{width:"100%",borderCollapse:"collapse"}}>
          <thead style={{backgroundColor:"#fafafa",borderBottom:"1px solid #e5e5e5",position:"sticky",top:0,zIndex:10}}>
            <tr>
                {columns.map(col => <th key={col} style={{padding:"16px 24px",textAlign:"left",fontSize:"14px",fontWeight:600,color:"#4a4a4a"}}>{col}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map((report) => (
              <tr key={report.id} style={{borderBottom:"1px solid #f0f0f0",transition:"background-color 0.15s ease"}} onMouseEnter={(event)=>event.currentTarget.style.backgroundColor="#d3d1d1ff"} onMouseLeave={(event)=>event.currentTarget.style.backgroundColor="white"}>
                <td style={{padding:"16px 24px",fontSize:"14px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                    <div style={{width:"40px",height:"40px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px",background:"linear-gradient(135deg,#a855f7 0%,#ec4899 100%)",color:"white"}}> {report.avatar}</div>
                    <span style={{fontWeight:500,color:"#2c2c2c"}}>{report.user}</span>
                  </div>
                </td>
                <td style={{padding:"16px 24px",fontSize:"14px", color:"#2c2c2c"}}>{report.date}</td>
                <td style={{padding:"16px 24px",fontSize:"14px", color:"#2c2c2c"}}>{report.title}</td>
                <td style={{padding:"16px 24px",fontSize:"14px", color:"#2c2c2c"}}><Badge text={report.category} type='category'/></td>
                <td style={{padding:"16px 24px",fontSize:"14px", color:"#2c2c2c"}}><Badge text={report.severity} type='severity'/></td>
                <td style={{padding:"16px 24px",fontSize:"14px", color:"#2c2c2c"}}><Badge text={report.status} type='status'/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export function SetUpTable({})
{
    const columns: string[] = ["user", "date", "title", "priority", "status", "severity"];
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 11;
    const totalPages = Math.ceil(reports.length / rowsPerPage);
    const currentReports = reports.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
    return(
        <div>
            <ReportTable data={currentReports} columns={columns} />
            <PaginationTable currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
        </div>)
}



