export function getFileIcon(type: string): string 
{
  if (type.startsWith("image/")) return "image";
  if (type === "application/pdf") return "pdf";
  if (type.includes("word")) return "doc";
  if (type.includes("excel") || type.includes("sheet")) return "excel";
  return "file";
}
