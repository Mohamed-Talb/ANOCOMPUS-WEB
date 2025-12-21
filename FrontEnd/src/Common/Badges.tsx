
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

export default function Badge({ text, type }: { text: string; type: string}) {
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