import {IconLocation} from "../../Common/icons/Icons"
import type { Attachment } from "./types";

export function UserHeader({
  firstname,
  lastname,
  date,
}: {
  firstname: string;
  lastname: string;
  location?: string;
  date?: string;
}) {
  return (
    <div className="flex items-center gap-3 flex-1">
      <div
        className="flex items-center justify-center rounded-full text-white font-semibold flex-shrink-0"
        style={{
          width: 48,
          height: 48,
          background: "linear-gradient(135deg,#667eea 0%,#764ba2 100%)",
          fontSize: 16,
        }}
      >
        {firstname.charAt(0)}
        {lastname.charAt(0)}
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold text-sm text-[#ffffff]">
            {firstname} {lastname}
          </span>
          <span className="text-sm text-[#98989d]">is in</span>
        </div>
        {date && <span className="text-xs text-[#98989d]">{date}</span>}
      </div>
    </div>
  );
}

export function Location({ location }: { location?: string }) {
  if (!location) return null;
  return (
    <span className="inline-flex items-center gap-2 text-sm text-[#c7c7cc]">
      <IconLocation />
      {location}
    </span>
  );
}

export function getFileIcon(type: string): string {
  if (type.startsWith("image/")) return "image";
  if (type === "application/pdf") return "pdf";
  if (type.includes("word")) return "doc";
  if (type.includes("excel") || type.includes("sheet")) return "excel";
  return "file";
}


function AttachmentPreview({ attachment }: { attachment: Attachment }) {
  const type = getFileIcon(attachment.type);
  if (type === "image") {
    return (
      <div className="attachment-item image-preview rounded-md overflow-hidden w-full h-[90px] flex items-center justify-center bg-[#2c2c2e] border border-[#38383a]">
        <img src={attachment.url} alt={attachment.name || "Attachment"} className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div className="attachment-item file-icon rounded-md w-full h-[90px] flex flex-col items-center justify-center gap-2 bg-[#1a2332] text-white">
      <svg className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
      </svg>
      <span className="text-xs font-semibold uppercase">{type}</span>
    </div>
  );
}

export default function AttachmentGrid({ attachments }: { attachments: Attachment[] }) {
  if (!attachments || attachments.length === 0) return null;
  const visible = attachments.slice(0, 3);
  const remaining = attachments.length - 3;

  return (
    <div className="attachments-wrapper w-full md:flex-0 md:w-[200px]">
      <div className="grid grid-cols-2 gap-2 md:gap-2.5">
        {visible.map((attachment, index) => (
          <AttachmentPreview key={index} attachment={attachment} />
        ))}
        {remaining > 0 && (
          <div className="attachment-item more-button rounded-md w-full h-[90px] flex items-center justify-center bg-[#2c3e50] text-white text-2xl font-semibold cursor-pointer hover:bg-[#34495e]">
            +{remaining}
          </div>
        )}
      </div>
    </div>
  );
}