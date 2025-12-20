import React from 'react';
import { useState } from 'react';


type Report = 
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

function getBadgeStyles(text: string, type: string) 
{
  const lowerText = text.toLowerCase();

    if (type === "category")
        return {backgroundColor: "#e3f2fd", color: "#1565c0",};
    if (type === "severity") 
    {
        if (lowerText.includes("high")) 
            return { backgroundColor: "#ffe5e5", color: "#d32f2f" };
        else if (lowerText.includes("medium"))
            return { backgroundColor: "#fff4e5", color: "#f57c00" };
        else if (lowerText.includes("low"))
            return { backgroundColor: "#e8f5e9", color: "#2e7d32" };
        else 
            return { backgroundColor: "#f5f5f5", color: "#616161" };
    }
    else
    {
        if (lowerText.includes("pending"))
            return { backgroundColor: "#fff8e1", color: "#f57c00" };
        else if (lowerText.includes("completed"))
            return { backgroundColor: "#e8f5e9", color: "#2e7d32" };
        else if (lowerText.includes("in progress"))
            return { backgroundColor: "#e3f2fd", color: "#1565c0" };
        else
            return { backgroundColor: "#f5f5f5", color: "#616161" };
    }
}

export function Badge({ text, type }: { text: string; type: string}) {
  const styles = getBadgeStyles(text, type);

  return (
    <button style=
    {{
      display: "inline-block",
      padding: "8px 20px",
      borderRadius: "20px",
      fontSize: "16px",
      fontWeight: 600,
      color: styles.color,
      backgroundColor: styles.backgroundColor,
      border: "none",
      cursor: "pointer",
      transition: "all 0.2s ease",
    }}> {text} </button>
  );
}



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


export function PaginatedTable({currentPage,totalPages,setCurrentPage,}: {currentPage: number;totalPages: number;setCurrentPage: (page: number) => void}) 
{
    const buttons = [];
    let startPage = currentPage - 1;
    if (startPage < 1) startPage = 1;

    let endPage = startPage + 2;
    if (endPage > totalPages) 
    {
        endPage = totalPages;
        startPage = endPage - 2;
    }
    if (startPage < 1) 
        startPage = 1;
    const baseStyle = 
    {
        padding: "6px 12px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        cursor: "pointer",
        background: "white",
        transition: "0.2s",
    };
    const activeStyle =
    {
        ...baseStyle,
        background: "#ff8c43",
        color: "white",
        border: "1px solid #ff6a00",
        fontWeight: "bold",
    };
    const arrowStyle = 
    {
        ...baseStyle,
        fontSize: "16px",
        padding: "6px 14px",
    };
    buttons.push(
        <button
            key="prev"
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            style={{...arrowStyle,opacity: currentPage === 1 ? 0.5 : 1,}}>
        </button>);
    for (let i = startPage; i <= endPage; i++) 
    {
    buttons.push(
        <button
        key={i}
        onClick={() => setCurrentPage(i)}
        style={i === currentPage ? activeStyle : baseStyle}
        > {i} </button>);
    }
    buttons.push(<button
        key="next"
        onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{...arrowStyle,opacity: currentPage === totalPages ? 0.5 : 1,}}></button>);
    return (<div style={{marginTop: "20px",display: "flex",justifyContent: "center",gap: "8px",}}>{buttons}</div>);}


export function SetUpTable({})
{
    const columns: string[] = ["user", "date", "title", "priority", "status", "severity"];
    const reports: Report[] = [
    { id: 1, user: "Alice", avatar: "👩", title: "Monthly Sales Report", category: "Finance", date: "2025-11-23", severity: "High", severityColor: "red", status: "Pending" },
    { id: 2, user: "Charlie", avatar: "👨", title: "Quarterly Budget Review", category: "Finance", date: "2025-11-22", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 3, user: "Bob", avatar: "👨", title: "Bug Fix Deployment", category: "Development", date: "2025-11-20", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 4, user: "Diana", avatar: "👩", title: "New Feature Implementation", category: "Development", date: "2025-11-18", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 5, user: "Eve", avatar: "👩", title: "Server Maintenance", category: "IT", date: "2025-11-17", severity: "High", severityColor: "red", status: "Completed" },
    { id: 6, user: "Frank", avatar: "👨", title: "Customer Feedback Analysis", category: "Support", date: "2025-11-15", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 7, user: "Grace", avatar: "👩", title: "Security Audit", category: "IT", date: "2025-11-14", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 8, user: "Henry", avatar: "👨", title: "Website Optimization", category: "Marketing", date: "2025-11-13", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 9, user: "Ivy", avatar: "👩", title: "Social Media Campaign", category: "Marketing", date: "2025-11-12", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 10, user: "Jack", avatar: "👨", title: "Database Migration", category: "IT", date: "2025-11-10", severity: "High", severityColor: "red", status: "Pending" },
    { id: 11, user: "Kelly", avatar: "👩", title: "Bug Triage Meeting", category: "Development", date: "2025-11-09", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 12, user: "Leo", avatar: "👨", title: "Financial Forecast", category: "Finance", date: "2025-11-07", severity: "High", severityColor: "red", status: "Pending" },
    { id: 13, user: "Mia", avatar: "👩", title: "UI/UX Redesign", category: "Design", date: "2025-11-06", severity: "Medium", severityColor: "orange", status: "In Progress" },
    { id: 14, user: "Nick", avatar: "👨", title: "Client Support Tickets", category: "Support", date: "2025-11-05", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 15, user: "Olivia", avatar: "👩", title: "Performance Review", category: "HR", date: "2025-11-04", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 16, user: "Paul", avatar: "👨", title: "New Employee Onboarding", category: "HR", date: "2025-11-03", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 17, user: "Quinn", avatar: "👩", title: "Server Downtime Report", category: "IT", date: "2025-11-02", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 18, user: "Ryan", avatar: "👨", title: "Feature Request Evaluation", category: "Development", date: "2025-11-01", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 19, user: "Sophia", avatar: "👩", title: "Customer Satisfaction Survey", category: "Support", date: "2025-10-30", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 20, user: "Tom", avatar: "👨", title: "SEO Analysis", category: "Marketing", date: "2025-10-29", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 2, user: "Charlie", avatar: "👨", title: "Quarterly Budget Review", category: "Finance", date: "2025-11-22", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 3, user: "Bob", avatar: "👨", title: "Bug Fix Deployment", category: "Development", date: "2025-11-20", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 4, user: "Diana", avatar: "👩", title: "New Feature Implementation", category: "Development", date: "2025-11-18", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 5, user: "Eve", avatar: "👩", title: "Server Maintenance", category: "IT", date: "2025-11-17", severity: "High", severityColor: "red", status: "Completed" },
    { id: 6, user: "Frank", avatar: "👨", title: "Customer Feedback Analysis", category: "Support", date: "2025-11-15", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 7, user: "Grace", avatar: "👩", title: "Security Audit", category: "IT", date: "2025-11-14", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 8, user: "Henry", avatar: "👨", title: "Website Optimization", category: "Marketing", date: "2025-11-13", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 9, user: "Ivy", avatar: "👩", title: "Social Media Campaign", category: "Marketing", date: "2025-11-12", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 10, user: "Jack", avatar: "👨", title: "Database Migration", category: "IT", date: "2025-11-10", severity: "High", severityColor: "red", status: "Pending" },
    { id: 11, user: "Kelly", avatar: "👩", title: "Bug Triage Meeting", category: "Development", date: "2025-11-09", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 12, user: "Leo", avatar: "👨", title: "Financial Forecast", category: "Finance", date: "2025-11-07", severity: "High", severityColor: "red", status: "Pending" },
    { id: 13, user: "Mia", avatar: "👩", title: "UI/UX Redesign", category: "Design", date: "2025-11-06", severity: "Medium", severityColor: "orange", status: "In Progress" },
    { id: 14, user: "Nick", avatar: "👨", title: "Client Support Tickets", category: "Support", date: "2025-11-05", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 15, user: "Olivia", avatar: "👩", title: "Performance Review", category: "HR", date: "2025-11-04", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 16, user: "Paul", avatar: "👨", title: "New Employee Onboarding", category: "HR", date: "2025-11-03", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 17, user: "Quinn", avatar: "👩", title: "Server Downtime Report", category: "IT", date: "2025-11-02", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 18, user: "Ryan", avatar: "👨", title: "Feature Request Evaluation", category: "Development", date: "2025-11-01", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 19, user: "Sophia", avatar: "👩", title: "Customer Satisfaction Survey", category: "Support", date: "2025-10-30", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 20, user: "Tom", avatar: "👨", title: "SEO Analysis", category: "Marketing", date: "2025-10-29", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 2, user: "Charlie", avatar: "👨", title: "Quarterly Budget Review", category: "Finance", date: "2025-11-22", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 3, user: "Bob", avatar: "👨", title: "Bug Fix Deployment", category: "Development", date: "2025-11-20", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 4, user: "Diana", avatar: "👩", title: "New Feature Implementation", category: "Development", date: "2025-11-18", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 5, user: "Eve", avatar: "👩", title: "Server Maintenance", category: "IT", date: "2025-11-17", severity: "High", severityColor: "red", status: "Completed" },
    { id: 6, user: "Frank", avatar: "👨", title: "Customer Feedback Analysis", category: "Support", date: "2025-11-15", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 7, user: "Grace", avatar: "👩", title: "Security Audit", category: "IT", date: "2025-11-14", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 8, user: "Henry", avatar: "👨", title: "Website Optimization", category: "Marketing", date: "2025-11-13", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 9, user: "Ivy", avatar: "👩", title: "Social Media Campaign", category: "Marketing", date: "2025-11-12", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 10, user: "Jack", avatar: "👨", title: "Database Migration", category: "IT", date: "2025-11-10", severity: "High", severityColor: "red", status: "Pending" },
    { id: 11, user: "Kelly", avatar: "👩", title: "Bug Triage Meeting", category: "Development", date: "2025-11-09", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 12, user: "Leo", avatar: "👨", title: "Financial Forecast", category: "Finance", date: "2025-11-07", severity: "High", severityColor: "red", status: "Pending" },
    { id: 13, user: "Mia", avatar: "👩", title: "UI/UX Redesign", category: "Design", date: "2025-11-06", severity: "Medium", severityColor: "orange", status: "In Progress" },
    { id: 14, user: "Nick", avatar: "👨", title: "Client Support Tickets", category: "Support", date: "2025-11-05", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 15, user: "Olivia", avatar: "👩", title: "Performance Review", category: "HR", date: "2025-11-04", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 16, user: "Paul", avatar: "👨", title: "New Employee Onboarding", category: "HR", date: "2025-11-03", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 17, user: "Quinn", avatar: "👩", title: "Server Downtime Report", category: "IT", date: "2025-11-02", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 18, user: "Ryan", avatar: "👨", title: "Feature Request Evaluation", category: "Development", date: "2025-11-01", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 19, user: "Sophia", avatar: "👩", title: "Customer Satisfaction Survey", category: "Support", date: "2025-10-30", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 20, user: "Tom", avatar: "👨", title: "SEO Analysis", category: "Marketing", date: "2025-10-29", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 2, user: "Charlie", avatar: "👨", title: "Quarterly Budget Review", category: "Finance", date: "2025-11-22", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 3, user: "Bob", avatar: "👨", title: "Bug Fix Deployment", category: "Development", date: "2025-11-20", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 4, user: "Diana", avatar: "👩", title: "New Feature Implementation", category: "Development", date: "2025-11-18", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 5, user: "Eve", avatar: "👩", title: "Server Maintenance", category: "IT", date: "2025-11-17", severity: "High", severityColor: "red", status: "Completed" },
    { id: 6, user: "Frank", avatar: "👨", title: "Customer Feedback Analysis", category: "Support", date: "2025-11-15", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 7, user: "Grace", avatar: "👩", title: "Security Audit", category: "IT", date: "2025-11-14", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 8, user: "Henry", avatar: "👨", title: "Website Optimization", category: "Marketing", date: "2025-11-13", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 9, user: "Ivy", avatar: "👩", title: "Social Media Campaign", category: "Marketing", date: "2025-11-12", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 10, user: "Jack", avatar: "👨", title: "Database Migration", category: "IT", date: "2025-11-10", severity: "High", severityColor: "red", status: "Pending" },
    { id: 11, user: "Kelly", avatar: "👩", title: "Bug Triage Meeting", category: "Development", date: "2025-11-09", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 12, user: "Leo", avatar: "👨", title: "Financial Forecast", category: "Finance", date: "2025-11-07", severity: "High", severityColor: "red", status: "Pending" },
    { id: 13, user: "Mia", avatar: "👩", title: "UI/UX Redesign", category: "Design", date: "2025-11-06", severity: "Medium", severityColor: "orange", status: "In Progress" },
    { id: 14, user: "Nick", avatar: "👨", title: "Client Support Tickets", category: "Support", date: "2025-11-05", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 15, user: "Olivia", avatar: "👩", title: "Performance Review", category: "HR", date: "2025-11-04", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 16, user: "Paul", avatar: "👨", title: "New Employee Onboarding", category: "HR", date: "2025-11-03", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 17, user: "Quinn", avatar: "👩", title: "Server Downtime Report", category: "IT", date: "2025-11-02", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 18, user: "Ryan", avatar: "👨", title: "Feature Request Evaluation", category: "Development", date: "2025-11-01", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 19, user: "Sophia", avatar: "👩", title: "Customer Satisfaction Survey", category: "Support", date: "2025-10-30", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 20, user: "Tom", avatar: "👨", title: "SEO Analysis", category: "Marketing", date: "2025-10-29", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 2, user: "Charlie", avatar: "👨", title: "Quarterly Budget Review", category: "Finance", date: "2025-11-22", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 3, user: "Bob", avatar: "👨", title: "Bug Fix Deployment", category: "Development", date: "2025-11-20", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 4, user: "Diana", avatar: "👩", title: "New Feature Implementation", category: "Development", date: "2025-11-18", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 5, user: "Eve", avatar: "👩", title: "Server Maintenance", category: "IT", date: "2025-11-17", severity: "High", severityColor: "red", status: "Completed" },
    { id: 6, user: "Frank", avatar: "👨", title: "Customer Feedback Analysis", category: "Support", date: "2025-11-15", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 7, user: "Grace", avatar: "👩", title: "Security Audit", category: "IT", date: "2025-11-14", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 8, user: "Henry", avatar: "👨", title: "Website Optimization", category: "Marketing", date: "2025-11-13", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 9, user: "Ivy", avatar: "👩", title: "Social Media Campaign", category: "Marketing", date: "2025-11-12", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 10, user: "Jack", avatar: "👨", title: "Database Migration", category: "IT", date: "2025-11-10", severity: "High", severityColor: "red", status: "Pending" },
    { id: 11, user: "Kelly", avatar: "👩", title: "Bug Triage Meeting", category: "Development", date: "2025-11-09", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 12, user: "Leo", avatar: "👨", title: "Financial Forecast", category: "Finance", date: "2025-11-07", severity: "High", severityColor: "red", status: "Pending" },
    { id: 13, user: "Mia", avatar: "👩", title: "UI/UX Redesign", category: "Design", date: "2025-11-06", severity: "Medium", severityColor: "orange", status: "In Progress" },
    { id: 14, user: "Nick", avatar: "👨", title: "Client Support Tickets", category: "Support", date: "2025-11-05", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 15, user: "Olivia", avatar: "👩", title: "Performance Review", category: "HR", date: "2025-11-04", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 16, user: "Paul", avatar: "👨", title: "New Employee Onboarding", category: "HR", date: "2025-11-03", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 17, user: "Quinn", avatar: "👩", title: "Server Downtime Report", category: "IT", date: "2025-11-02", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 18, user: "Ryan", avatar: "👨", title: "Feature Request Evaluation", category: "Development", date: "2025-11-01", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 19, user: "Sophia", avatar: "👩", title: "Customer Satisfaction Survey", category: "Support", date: "2025-10-30", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 20, user: "Tom", avatar: "👨", title: "SEO Analysis", category: "Marketing", date: "2025-10-29", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 2, user: "Charlie", avatar: "👨", title: "Quarterly Budget Review", category: "Finance", date: "2025-11-22", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 3, user: "Bob", avatar: "👨", title: "Bug Fix Deployment", category: "Development", date: "2025-11-20", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 4, user: "Diana", avatar: "👩", title: "New Feature Implementation", category: "Development", date: "2025-11-18", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 5, user: "Eve", avatar: "👩", title: "Server Maintenance", category: "IT", date: "2025-11-17", severity: "High", severityColor: "red", status: "Completed" },
    { id: 6, user: "Frank", avatar: "👨", title: "Customer Feedback Analysis", category: "Support", date: "2025-11-15", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 7, user: "Grace", avatar: "👩", title: "Security Audit", category: "IT", date: "2025-11-14", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 8, user: "Henry", avatar: "👨", title: "Website Optimization", category: "Marketing", date: "2025-11-13", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 9, user: "Ivy", avatar: "👩", title: "Social Media Campaign", category: "Marketing", date: "2025-11-12", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 10, user: "Jack", avatar: "👨", title: "Database Migration", category: "IT", date: "2025-11-10", severity: "High", severityColor: "red", status: "Pending" },
    { id: 11, user: "Kelly", avatar: "👩", title: "Bug Triage Meeting", category: "Development", date: "2025-11-09", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 12, user: "Leo", avatar: "👨", title: "Financial Forecast", category: "Finance", date: "2025-11-07", severity: "High", severityColor: "red", status: "Pending" },
    { id: 13, user: "Mia", avatar: "👩", title: "UI/UX Redesign", category: "Design", date: "2025-11-06", severity: "Medium", severityColor: "orange", status: "In Progress" },
    { id: 14, user: "Nick", avatar: "👨", title: "Client Support Tickets", category: "Support", date: "2025-11-05", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 15, user: "Olivia", avatar: "👩", title: "Performance Review", category: "HR", date: "2025-11-04", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 16, user: "Paul", avatar: "👨", title: "New Employee Onboarding", category: "HR", date: "2025-11-03", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 17, user: "Quinn", avatar: "👩", title: "Server Downtime Report", category: "IT", date: "2025-11-02", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 18, user: "Ryan", avatar: "👨", title: "Feature Request Evaluation", category: "Development", date: "2025-11-01", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 19, user: "Sophia", avatar: "👩", title: "Customer Satisfaction Survey", category: "Support", date: "2025-10-30", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 20, user: "Tom", avatar: "👨", title: "SEO Analysis", category: "Marketing", date: "2025-10-29", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 2, user: "Charlie", avatar: "👨", title: "Quarterly Budget Review", category: "Finance", date: "2025-11-22", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 3, user: "Bob", avatar: "👨", title: "Bug Fix Deployment", category: "Development", date: "2025-11-20", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 4, user: "Diana", avatar: "👩", title: "New Feature Implementation", category: "Development", date: "2025-11-18", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 5, user: "Eve", avatar: "👩", title: "Server Maintenance", category: "IT", date: "2025-11-17", severity: "High", severityColor: "red", status: "Completed" },
    { id: 6, user: "Frank", avatar: "👨", title: "Customer Feedback Analysis", category: "Support", date: "2025-11-15", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 7, user: "Grace", avatar: "👩", title: "Security Audit", category: "IT", date: "2025-11-14", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 8, user: "Henry", avatar: "👨", title: "Website Optimization", category: "Marketing", date: "2025-11-13", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 9, user: "Ivy", avatar: "👩", title: "Social Media Campaign", category: "Marketing", date: "2025-11-12", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 10, user: "Jack", avatar: "👨", title: "Database Migration", category: "IT", date: "2025-11-10", severity: "High", severityColor: "red", status: "Pending" },
    { id: 11, user: "Kelly", avatar: "👩", title: "Bug Triage Meeting", category: "Development", date: "2025-11-09", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 12, user: "Leo", avatar: "👨", title: "Financial Forecast", category: "Finance", date: "2025-11-07", severity: "High", severityColor: "red", status: "Pending" },
    { id: 13, user: "Mia", avatar: "👩", title: "UI/UX Redesign", category: "Design", date: "2025-11-06", severity: "Medium", severityColor: "orange", status: "In Progress" },
    { id: 14, user: "Nick", avatar: "👨", title: "Client Support Tickets", category: "Support", date: "2025-11-05", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 15, user: "Olivia", avatar: "👩", title: "Performance Review", category: "HR", date: "2025-11-04", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 16, user: "Paul", avatar: "👨", title: "New Employee Onboarding", category: "HR", date: "2025-11-03", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 17, user: "Quinn", avatar: "👩", title: "Server Downtime Report", category: "IT", date: "2025-11-02", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 18, user: "Ryan", avatar: "👨", title: "Feature Request Evaluation", category: "Development", date: "2025-11-01", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 19, user: "Sophia", avatar: "👩", title: "Customer Satisfaction Survey", category: "Support", date: "2025-10-30", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 20, user: "Tom", avatar: "👨", title: "SEO Analysis", category: "Marketing", date: "2025-10-29", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 2, user: "Charlie", avatar: "👨", title: "Quarterly Budget Review", category: "Finance", date: "2025-11-22", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 3, user: "Bob", avatar: "👨", title: "Bug Fix Deployment", category: "Development", date: "2025-11-20", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 4, user: "Diana", avatar: "👩", title: "New Feature Implementation", category: "Development", date: "2025-11-18", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 5, user: "Eve", avatar: "👩", title: "Server Maintenance", category: "IT", date: "2025-11-17", severity: "High", severityColor: "red", status: "Completed" },
    { id: 6, user: "Frank", avatar: "👨", title: "Customer Feedback Analysis", category: "Support", date: "2025-11-15", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 7, user: "Grace", avatar: "👩", title: "Security Audit", category: "IT", date: "2025-11-14", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 8, user: "Henry", avatar: "👨", title: "Website Optimization", category: "Marketing", date: "2025-11-13", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 9, user: "Ivy", avatar: "👩", title: "Social Media Campaign", category: "Marketing", date: "2025-11-12", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 10, user: "Jack", avatar: "👨", title: "Database Migration", category: "IT", date: "2025-11-10", severity: "High", severityColor: "red", status: "Pending" },
    { id: 11, user: "Kelly", avatar: "👩", title: "Bug Triage Meeting", category: "Development", date: "2025-11-09", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 12, user: "Leo", avatar: "👨", title: "Financial Forecast", category: "Finance", date: "2025-11-07", severity: "High", severityColor: "red", status: "Pending" },
    { id: 13, user: "Mia", avatar: "👩", title: "UI/UX Redesign", category: "Design", date: "2025-11-06", severity: "Medium", severityColor: "orange", status: "In Progress" },
    { id: 14, user: "Nick", avatar: "👨", title: "Client Support Tickets", category: "Support", date: "2025-11-05", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 15, user: "Olivia", avatar: "👩", title: "Performance Review", category: "HR", date: "2025-11-04", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 16, user: "Paul", avatar: "👨", title: "New Employee Onboarding", category: "HR", date: "2025-11-03", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 17, user: "Quinn", avatar: "👩", title: "Server Downtime Report", category: "IT", date: "2025-11-02", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 18, user: "Ryan", avatar: "👨", title: "Feature Request Evaluation", category: "Development", date: "2025-11-01", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 19, user: "Sophia", avatar: "👩", title: "Customer Satisfaction Survey", category: "Support", date: "2025-10-30", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 20, user: "Tom", avatar: "👨", title: "SEO Analysis", category: "Marketing", date: "2025-10-29", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 2, user: "Charlie", avatar: "👨", title: "Quarterly Budget Review", category: "Finance", date: "2025-11-22", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 3, user: "Bob", avatar: "👨", title: "Bug Fix Deployment", category: "Development", date: "2025-11-20", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 4, user: "Diana", avatar: "👩", title: "New Feature Implementation", category: "Development", date: "2025-11-18", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 5, user: "Eve", avatar: "👩", title: "Server Maintenance", category: "IT", date: "2025-11-17", severity: "High", severityColor: "red", status: "Completed" },
    { id: 6, user: "Frank", avatar: "👨", title: "Customer Feedback Analysis", category: "Support", date: "2025-11-15", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 7, user: "Grace", avatar: "👩", title: "Security Audit", category: "IT", date: "2025-11-14", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 8, user: "Henry", avatar: "👨", title: "Website Optimization", category: "Marketing", date: "2025-11-13", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 9, user: "Ivy", avatar: "👩", title: "Social Media Campaign", category: "Marketing", date: "2025-11-12", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 10, user: "Jack", avatar: "👨", title: "Database Migration", category: "IT", date: "2025-11-10", severity: "High", severityColor: "red", status: "Pending" },
    { id: 11, user: "Kelly", avatar: "👩", title: "Bug Triage Meeting", category: "Development", date: "2025-11-09", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 12, user: "Leo", avatar: "👨", title: "Financial Forecast", category: "Finance", date: "2025-11-07", severity: "High", severityColor: "red", status: "Pending" },
    { id: 13, user: "Mia", avatar: "👩", title: "UI/UX Redesign", category: "Design", date: "2025-11-06", severity: "Medium", severityColor: "orange", status: "In Progress" },
    { id: 14, user: "Nick", avatar: "👨", title: "Client Support Tickets", category: "Support", date: "2025-11-05", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 15, user: "Olivia", avatar: "👩", title: "Performance Review", category: "HR", date: "2025-11-04", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 16, user: "Paul", avatar: "👨", title: "New Employee Onboarding", category: "HR", date: "2025-11-03", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 17, user: "Quinn", avatar: "👩", title: "Server Downtime Report", category: "IT", date: "2025-11-02", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 18, user: "Ryan", avatar: "👨", title: "Feature Request Evaluation", category: "Development", date: "2025-11-01", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 19, user: "Sophia", avatar: "👩", title: "Customer Satisfaction Survey", category: "Support", date: "2025-10-30", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 20, user: "Tom", avatar: "👨", title: "SEO Analysis", category: "Marketing", date: "2025-10-29", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 2, user: "Charlie", avatar: "👨", title: "Quarterly Budget Review", category: "Finance", date: "2025-11-22", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 3, user: "Bob", avatar: "👨", title: "Bug Fix Deployment", category: "Development", date: "2025-11-20", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 4, user: "Diana", avatar: "👩", title: "New Feature Implementation", category: "Development", date: "2025-11-18", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 5, user: "Eve", avatar: "👩", title: "Server Maintenance", category: "IT", date: "2025-11-17", severity: "High", severityColor: "red", status: "Completed" },
    { id: 6, user: "Frank", avatar: "👨", title: "Customer Feedback Analysis", category: "Support", date: "2025-11-15", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 7, user: "Grace", avatar: "👩", title: "Security Audit", category: "IT", date: "2025-11-14", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 8, user: "Henry", avatar: "👨", title: "Website Optimization", category: "Marketing", date: "2025-11-13", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 9, user: "Ivy", avatar: "👩", title: "Social Media Campaign", category: "Marketing", date: "2025-11-12", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 10, user: "Jack", avatar: "👨", title: "Database Migration", category: "IT", date: "2025-11-10", severity: "High", severityColor: "red", status: "Pending" },
    { id: 11, user: "Kelly", avatar: "👩", title: "Bug Triage Meeting", category: "Development", date: "2025-11-09", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 12, user: "Leo", avatar: "👨", title: "Financial Forecast", category: "Finance", date: "2025-11-07", severity: "High", severityColor: "red", status: "Pending" },
    { id: 13, user: "Mia", avatar: "👩", title: "UI/UX Redesign", category: "Design", date: "2025-11-06", severity: "Medium", severityColor: "orange", status: "In Progress" },
    { id: 14, user: "Nick", avatar: "👨", title: "Client Support Tickets", category: "Support", date: "2025-11-05", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 15, user: "Olivia", avatar: "👩", title: "Performance Review", category: "HR", date: "2025-11-04", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 16, user: "Paul", avatar: "👨", title: "New Employee Onboarding", category: "HR", date: "2025-11-03", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 17, user: "Quinn", avatar: "👩", title: "Server Downtime Report", category: "IT", date: "2025-11-02", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 18, user: "Ryan", avatar: "👨", title: "Feature Request Evaluation", category: "Development", date: "2025-11-01", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 19, user: "Sophia", avatar: "👩", title: "Customer Satisfaction Survey", category: "Support", date: "2025-10-30", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 20, user: "Tom", avatar: "👨", title: "SEO Analysis", category: "Marketing", date: "2025-10-29", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 2, user: "Charlie", avatar: "👨", title: "Quarterly Budget Review", category: "Finance", date: "2025-11-22", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 3, user: "Bob", avatar: "👨", title: "Bug Fix Deployment", category: "Development", date: "2025-11-20", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 4, user: "Diana", avatar: "👩", title: "New Feature Implementation", category: "Development", date: "2025-11-18", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 5, user: "Eve", avatar: "👩", title: "Server Maintenance", category: "IT", date: "2025-11-17", severity: "High", severityColor: "red", status: "Completed" },
    { id: 6, user: "Frank", avatar: "👨", title: "Customer Feedback Analysis", category: "Support", date: "2025-11-15", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 7, user: "Grace", avatar: "👩", title: "Security Audit", category: "IT", date: "2025-11-14", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 8, user: "Henry", avatar: "👨", title: "Website Optimization", category: "Marketing", date: "2025-11-13", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 9, user: "Ivy", avatar: "👩", title: "Social Media Campaign", category: "Marketing", date: "2025-11-12", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 10, user: "Jack", avatar: "👨", title: "Database Migration", category: "IT", date: "2025-11-10", severity: "High", severityColor: "red", status: "Pending" },
    { id: 11, user: "Kelly", avatar: "👩", title: "Bug Triage Meeting", category: "Development", date: "2025-11-09", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 12, user: "Leo", avatar: "👨", title: "Financial Forecast", category: "Finance", date: "2025-11-07", severity: "High", severityColor: "red", status: "Pending" },
    { id: 13, user: "Mia", avatar: "👩", title: "UI/UX Redesign", category: "Design", date: "2025-11-06", severity: "Medium", severityColor: "orange", status: "In Progress" },
    { id: 14, user: "Nick", avatar: "👨", title: "Client Support Tickets", category: "Support", date: "2025-11-05", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 15, user: "Olivia", avatar: "👩", title: "Performance Review", category: "HR", date: "2025-11-04", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 16, user: "Paul", avatar: "👨", title: "New Employee Onboarding", category: "HR", date: "2025-11-03", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 17, user: "Quinn", avatar: "👩", title: "Server Downtime Report", category: "IT", date: "2025-11-02", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 18, user: "Ryan", avatar: "👨", title: "Feature Request Evaluation", category: "Development", date: "2025-11-01", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 19, user: "Sophia", avatar: "👩", title: "Customer Satisfaction Survey", category: "Support", date: "2025-10-30", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 20, user: "Tom", avatar: "👨", title: "SEO Analysis", category: "Marketing", date: "2025-10-29", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 2, user: "Charlie", avatar: "👨", title: "Quarterly Budget Review", category: "Finance", date: "2025-11-22", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 3, user: "Bob", avatar: "👨", title: "Bug Fix Deployment", category: "Development", date: "2025-11-20", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 4, user: "Diana", avatar: "👩", title: "New Feature Implementation", category: "Development", date: "2025-11-18", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 5, user: "Eve", avatar: "👩", title: "Server Maintenance", category: "IT", date: "2025-11-17", severity: "High", severityColor: "red", status: "Completed" },
    { id: 6, user: "Frank", avatar: "👨", title: "Customer Feedback Analysis", category: "Support", date: "2025-11-15", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 7, user: "Grace", avatar: "👩", title: "Security Audit", category: "IT", date: "2025-11-14", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 8, user: "Henry", avatar: "👨", title: "Website Optimization", category: "Marketing", date: "2025-11-13", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 9, user: "Ivy", avatar: "👩", title: "Social Media Campaign", category: "Marketing", date: "2025-11-12", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 10, user: "Jack", avatar: "👨", title: "Database Migration", category: "IT", date: "2025-11-10", severity: "High", severityColor: "red", status: "Pending" },
    { id: 11, user: "Kelly", avatar: "👩", title: "Bug Triage Meeting", category: "Development", date: "2025-11-09", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 12, user: "Leo", avatar: "👨", title: "Financial Forecast", category: "Finance", date: "2025-11-07", severity: "High", severityColor: "red", status: "Pending" },
    { id: 13, user: "Mia", avatar: "👩", title: "UI/UX Redesign", category: "Design", date: "2025-11-06", severity: "Medium", severityColor: "orange", status: "In Progress" },
    { id: 14, user: "Nick", avatar: "👨", title: "Client Support Tickets", category: "Support", date: "2025-11-05", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 15, user: "Olivia", avatar: "👩", title: "Performance Review", category: "HR", date: "2025-11-04", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 16, user: "Paul", avatar: "👨", title: "New Employee Onboarding", category: "HR", date: "2025-11-03", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 17, user: "Quinn", avatar: "👩", title: "Server Downtime Report", category: "IT", date: "2025-11-02", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 18, user: "Ryan", avatar: "👨", title: "Feature Request Evaluation", category: "Development", date: "2025-11-01", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 19, user: "Sophia", avatar: "👩", title: "Customer Satisfaction Survey", category: "Support", date: "2025-10-30", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 20, user: "Tom", avatar: "👨", title: "SEO Analysis", category: "Marketing", date: "2025-10-29", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 2, user: "Charlie", avatar: "👨", title: "Quarterly Budget Review", category: "Finance", date: "2025-11-22", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 3, user: "Bob", avatar: "👨", title: "Bug Fix Deployment", category: "Development", date: "2025-11-20", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 4, user: "Diana", avatar: "👩", title: "New Feature Implementation", category: "Development", date: "2025-11-18", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 5, user: "Eve", avatar: "👩", title: "Server Maintenance", category: "IT", date: "2025-11-17", severity: "High", severityColor: "red", status: "Completed" },
    { id: 6, user: "Frank", avatar: "👨", title: "Customer Feedback Analysis", category: "Support", date: "2025-11-15", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 7, user: "Grace", avatar: "👩", title: "Security Audit", category: "IT", date: "2025-11-14", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 8, user: "Henry", avatar: "👨", title: "Website Optimization", category: "Marketing", date: "2025-11-13", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 9, user: "Ivy", avatar: "👩", title: "Social Media Campaign", category: "Marketing", date: "2025-11-12", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 10, user: "Jack", avatar: "👨", title: "Database Migration", category: "IT", date: "2025-11-10", severity: "High", severityColor: "red", status: "Pending" },
    { id: 11, user: "Kelly", avatar: "👩", title: "Bug Triage Meeting", category: "Development", date: "2025-11-09", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 12, user: "Leo", avatar: "👨", title: "Financial Forecast", category: "Finance", date: "2025-11-07", severity: "High", severityColor: "red", status: "Pending" },
    { id: 13, user: "Mia", avatar: "👩", title: "UI/UX Redesign", category: "Design", date: "2025-11-06", severity: "Medium", severityColor: "orange", status: "In Progress" },
    { id: 14, user: "Nick", avatar: "👨", title: "Client Support Tickets", category: "Support", date: "2025-11-05", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 15, user: "Olivia", avatar: "👩", title: "Performance Review", category: "HR", date: "2025-11-04", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 16, user: "Paul", avatar: "👨", title: "New Employee Onboarding", category: "HR", date: "2025-11-03", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 17, user: "Quinn", avatar: "👩", title: "Server Downtime Report", category: "IT", date: "2025-11-02", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 18, user: "Ryan", avatar: "👨", title: "Feature Request Evaluation", category: "Development", date: "2025-11-01", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 19, user: "Sophia", avatar: "👩", title: "Customer Satisfaction Survey", category: "Support", date: "2025-10-30", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 20, user: "Tom", avatar: "👨", title: "SEO Analysis", category: "Marketing", date: "2025-10-29", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 2, user: "Charlie", avatar: "👨", title: "Quarterly Budget Review", category: "Finance", date: "2025-11-22", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 3, user: "Bob", avatar: "👨", title: "Bug Fix Deployment", category: "Development", date: "2025-11-20", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 4, user: "Diana", avatar: "👩", title: "New Feature Implementation", category: "Development", date: "2025-11-18", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 5, user: "Eve", avatar: "👩", title: "Server Maintenance", category: "IT", date: "2025-11-17", severity: "High", severityColor: "red", status: "Completed" },
    { id: 6, user: "Frank", avatar: "👨", title: "Customer Feedback Analysis", category: "Support", date: "2025-11-15", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 7, user: "Grace", avatar: "👩", title: "Security Audit", category: "IT", date: "2025-11-14", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 8, user: "Henry", avatar: "👨", title: "Website Optimization", category: "Marketing", date: "2025-11-13", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 9, user: "Ivy", avatar: "👩", title: "Social Media Campaign", category: "Marketing", date: "2025-11-12", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 10, user: "Jack", avatar: "👨", title: "Database Migration", category: "IT", date: "2025-11-10", severity: "High", severityColor: "red", status: "Pending" },
    { id: 11, user: "Kelly", avatar: "👩", title: "Bug Triage Meeting", category: "Development", date: "2025-11-09", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 12, user: "Leo", avatar: "👨", title: "Financial Forecast", category: "Finance", date: "2025-11-07", severity: "High", severityColor: "red", status: "Pending" },
    { id: 13, user: "Mia", avatar: "👩", title: "UI/UX Redesign", category: "Design", date: "2025-11-06", severity: "Medium", severityColor: "orange", status: "In Progress" },
    { id: 14, user: "Nick", avatar: "👨", title: "Client Support Tickets", category: "Support", date: "2025-11-05", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 15, user: "Olivia", avatar: "👩", title: "Performance Review", category: "HR", date: "2025-11-04", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 16, user: "Paul", avatar: "👨", title: "New Employee Onboarding", category: "HR", date: "2025-11-03", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 17, user: "Quinn", avatar: "👩", title: "Server Downtime Report", category: "IT", date: "2025-11-02", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 18, user: "Ryan", avatar: "👨", title: "Feature Request Evaluation", category: "Development", date: "2025-11-01", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 19, user: "Sophia", avatar: "👩", title: "Customer Satisfaction Survey", category: "Support", date: "2025-10-30", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 20, user: "Tom", avatar: "👨", title: "SEO Analysis", category: "Marketing", date: "2025-10-29", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 2, user: "Charlie", avatar: "👨", title: "Quarterly Budget Review", category: "Finance", date: "2025-11-22", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 3, user: "Bob", avatar: "👨", title: "Bug Fix Deployment", category: "Development", date: "2025-11-20", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 4, user: "Diana", avatar: "👩", title: "New Feature Implementation", category: "Development", date: "2025-11-18", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 5, user: "Eve", avatar: "👩", title: "Server Maintenance", category: "IT", date: "2025-11-17", severity: "High", severityColor: "red", status: "Completed" },
    { id: 6, user: "Frank", avatar: "👨", title: "Customer Feedback Analysis", category: "Support", date: "2025-11-15", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 7, user: "Grace", avatar: "👩", title: "Security Audit", category: "IT", date: "2025-11-14", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 8, user: "Henry", avatar: "👨", title: "Website Optimization", category: "Marketing", date: "2025-11-13", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 9, user: "Ivy", avatar: "👩", title: "Social Media Campaign", category: "Marketing", date: "2025-11-12", severity: "Low", severityColor: "green", status: "Pending" },
    { id: 10, user: "Jack", avatar: "👨", title: "Database Migration", category: "IT", date: "2025-11-10", severity: "High", severityColor: "red", status: "Pending" },
    { id: 11, user: "Kelly", avatar: "👩", title: "Bug Triage Meeting", category: "Development", date: "2025-11-09", severity: "Medium", severityColor: "orange", status: "Completed" },
    { id: 12, user: "Leo", avatar: "👨", title: "Financial Forecast", category: "Finance", date: "2025-11-07", severity: "High", severityColor: "red", status: "Pending" },
    { id: 13, user: "Mia", avatar: "👩", title: "UI/UX Redesign", category: "Design", date: "2025-11-06", severity: "Medium", severityColor: "orange", status: "In Progress" },
    { id: 14, user: "Nick", avatar: "👨", title: "Client Support Tickets", category: "Support", date: "2025-11-05", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 15, user: "Olivia", avatar: "👩", title: "Performance Review", category: "HR", date: "2025-11-04", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 16, user: "Paul", avatar: "👨", title: "New Employee Onboarding", category: "HR", date: "2025-11-03", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 17, user: "Quinn", avatar: "👩", title: "Server Downtime Report", category: "IT", date: "2025-11-02", severity: "High", severityColor: "red", status: "In Progress" },
    { id: 18, user: "Ryan", avatar: "👨", title: "Feature Request Evaluation", category: "Development", date: "2025-11-01", severity: "Medium", severityColor: "orange", status: "Pending" },
    { id: 19, user: "Sophia", avatar: "👩", title: "Customer Satisfaction Survey", category: "Support", date: "2025-10-30", severity: "Low", severityColor: "green", status: "Completed" },
    { id: 20, user: "Tom", avatar: "👨", title: "SEO Analysis", category: "Marketing", date: "2025-10-29", severity: "Medium", severityColor: "orange", status: "Pending" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 11;
    const totalPages = Math.ceil(reports.length / rowsPerPage);
    const currentReports = reports.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
    return(
        <div>
            <ReportTable data={currentReports} columns={columns} />
            <PaginatedTable currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
        </div>)
}



