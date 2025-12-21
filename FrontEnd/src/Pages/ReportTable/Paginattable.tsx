type Props = {currentPage: number;totalPages: number;setCurrentPage: (page: number) => void;};

export default function PaginationTable({currentPage,totalPages,setCurrentPage,}: Props) 
{
  return (
    <div style={{marginTop: "20px",display: "flex",justifyContent: "center",alignItems: "center",gap: "12px",}}>
      {/* Prev */}
      {currentPage > 1 && (<button onClick={() => setCurrentPage(currentPage - 1)}style={arrowStyle}></button>)}
      {/* Current page */}
      <span style={{ padding: "6px 14px",borderRadius: "8px",background: "#ff8c43",color: "white",fontWeight: "bold",border: "1px solid #ff6a00",}}>
        {currentPage} / {totalPages}
      </span>
      {/* Next */}
      {currentPage < totalPages && (<button onClick={() => setCurrentPage(currentPage + 1)} style={arrowStyle}> </button>)}
    </div>
  );
}

const arrowStyle = 
{
  padding: "6px 14px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  cursor: "pointer",
  background: "white",
  fontSize: "16px",
  transition: "0.2s",
};
