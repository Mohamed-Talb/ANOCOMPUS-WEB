import React from "react";
import type { Attachment } from "../ReportsDetails/ReportPage"; // Or your types file
// import '../Styles/Attachments.css';
import "../Styles/style.css";
export function getFileIcon(type: string): string {
  if (type.startsWith("image/")) return "image";
  if (type === "application/pdf") return "pdf";
  if (type.includes("word")) return "doc";
  if (type.includes("excel") || type.includes("sheet")) return "excel";
  return "file";
}

export function renderAttachmentPreview(attachment: Attachment) {
  const type = getFileIcon(attachment.type);

  if (type === "image") {
    return (
      <div className="attachment-item image-preview">
        <img src={attachment.url} alt={attachment.name || "Attachment"} />
      </div>
    );
  }

  return (
    <div className={`attachment-item file-icon ${type}`}>
      <svg fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
      </svg>
      <span className="file-label">{type.toUpperCase()}</span>
    </div>
  );
}

export default function AttachmentGrid({ attachments }: { attachments: Attachment[] }) {
  if (!attachments || attachments.length === 0) return null;

  const visible = attachments.slice(0, 3);
  const remaining = attachments.length - 3;

  return (
    <div className="attachments-grid">
      {visible.map((a, i) => (
        <React.Fragment key={i}>
          {renderAttachmentPreview(a)}
        </React.Fragment>
      ))}
      
      {remaining > 0 && (
        <div className="attachment-item more-button">
          <span>+{remaining}</span>
        </div>
      )}
    </div>
  );
}