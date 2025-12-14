import getFileIcon from "./GetFileIcon";
import type { Attachment } from "../ReportDetails";

function AttachmentPreview({ attachment }: {attachment: Attachment}) {
  
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
        <path
          fillRule="evenodd"
          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
          clipRule="evenodd"
        />
      </svg>
      <span className="file-label">{type.toUpperCase()}</span>
    </div>
  );
}

export default function AttachmentGrid({attachments }: {attachments: Attachment[]}) 
{
  if (!attachments || attachments.length === 0) return null;

  const visible = attachments.slice(0, 3);
  const remaining = attachments.length - 3;

  return (
    <div className="attachments-grid">
      {visible.map((attachment, index) => (
        <AttachmentPreview key={index} attachment={attachment} />
      ))}

      {remaining > 0 && (
        <div className="attachment-item more-button">
          <span>+{remaining}</span>
        </div>
      )}
    </div>
  );
}