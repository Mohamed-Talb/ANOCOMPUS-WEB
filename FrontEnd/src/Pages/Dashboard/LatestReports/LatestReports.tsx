import { FileText } from "lucide-react";

const getStatusStyles = (status: string) => {
  const baseStyle =
    "inline-flex min-w-[12rem] justify-center px-3 py-1 rounded-xl text-xs font-semibold uppercase tracking-wider font-['Poppins'] border";
  switch (status.toLowerCase()) {
    case "critical":
      return `${baseStyle} bg-gradient-to-br from-red-500/15 to-red-600/15 text-red-600 border-red-500/30`;
    case "pending":
      return `${baseStyle} bg-gradient-to-br from-amber-400/15 to-amber-500/15 text-amber-600 border-amber-400/30 `;
    case "fixed":
      return `${baseStyle} bg-gradient-to-br from-green-500/15 to-green-600/15 text-green-600 border-green-500/30`;
    default:
      return `${baseStyle} bg-gray-100 text-gray-600 border-gray-200`;
  }
};

function ReportItem({
  title,
  content,
  date,
  status,
}: {
  title: string;
  content: string;
  date: string;
  status: string;
}) {
  return (
    <div
      className="group relative flex flex-col w-full mb-4 p-4 md:p-5 rounded-xl border border-orange-500/10 
                        bg-white  cursor-pointer overflow-hidden"
    >
      {/* Orange Hover Strip (Left Side) */}
      <div className="absolute top-0 left-0 h-full"></div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0 mb-3">
        <div className="flex items-center gap-3">
          <h3 className="m-0 text-[17px] md:text-[20px] font-semibold text-slate-800 font-['Poppins'] leading-tight tracking-tight">
            {title}
          </h3>
        </div>
        <span
          className="flex items-center gap-1.5 text-xs md:text-[13px] font-medium text-[#ff6b35] font-['Poppins'] 
                                 px-3 py-1.5 md:px-4 md:py-2 rounded-[20px] border-2 border-[#ff6b35]/20
                                 bg-gradient-to-br from-[#ff6b35]/10 to-[#ff8c42]/10 transition-colors duration-300
                                 group-hover:from-[#ff6b35]/15 group-hover:to-[#ff8c42]/15 group-hover:border-[#ff6b35]/30"
        >
          <FileText className="w-3.5 h-3.5 md:w-4 md:h-4" />
          {date}
        </span>
      </div>

      <div>
        <label className={getStatusStyles(status)}>{status}</label>
      </div>

      <p className="m-0 mt-2 md:mt-3 text-sm md:text-[15px] text-slate-500 font-['Poppins'] leading-relaxed tracking-wide">
        {content}
      </p>
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
      status: "Critical",
    },
    {
      id: 2,
      title: "Network Issue",
      content: "Network connectivity issues in Building A",
      date: "2025-12-13",
      status: "Pending",
    },
    {
      id: 3,
      title: "Database Connection",
      content: "Database connection successfully restored",
      date: "2025-12-12",
      status: "Fixed",
    },
    {
      id: 4,
      title: "Security Update",
      content: "Security patches applied to all systems",
      date: "2025-12-11",
      status: "Fixed",
    },
    {
      id: 5,
      title: "Performance Issue",
      content: "Application performance degradation detected",
      date: "2025-12-10",
      status: "Pending",
    },
  ];

  return (
    <div className="relative w-full h-[450px] md:h-[500px] lg:h-[600px] p-0 overflow-y-auto overflow-x-hidden custom-scrollbar">
      {/* Custom Styles for Scrollbar & Top Gradient Line */}
      <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 3px; margin: 10px 0; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #c1c1c1; border-radius: 3px; margin: 10px 0; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #a8a8a8; }
            `}</style>

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>

      {/* Sticky Header */}
      <div className="sticky top-0 z-10 p-3 flex justify-between items-center mb-6 pb-4 bg-[#222831] border-b border-white-700/20 rounded-md ">
        <h2 className="m-0 text-base md:text-xl lg:text-2xl text-white font-bold font-['Poppins']  ">
          Latest Reports
        </h2>
        <button
          className="relative overflow-hidden px-3.5 py-1.5 md:px-5 md:py-2 bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] 
                                   text-white text-[13px] md:text-sm font-semibold rounded-xl border-none cursor-pointer 
                                   font-['Poppins'] "
        >
          <span className="relative z-10">View all</span>
          {/* Button Shine Effect */}
          <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:left-full"></div>
        </button>
      </div>

      {/* List of Reports */}
      {reports.map((report) => (
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
