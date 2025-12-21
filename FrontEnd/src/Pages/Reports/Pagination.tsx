// type Props = {currentPage: number;totalPages: number;setCurrentPage: (page: number) => void;};

import './styles/Pagination.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationTableProps 
{
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export default function PaginationTable({ currentPage, totalPages, setCurrentPage }: PaginationTableProps) 
{
  return (
    <div className="pagination-container">
      <button
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="pagination-btn"
      >
        <ChevronLeft size={20} />
      </button>

      <div className="pagination-info">
        {currentPage} / {totalPages}
      </div>

      <button
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="pagination-btn"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

