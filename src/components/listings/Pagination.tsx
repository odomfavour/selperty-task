import { PaginationProps } from '@/types/pagination';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const Pagination = ({
  totalItems,
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="flex gap-4 justify-center items-center mt-6 md:p-4 px-2 rounded-lg">
      {/* Total Items */}
      <span className="text-gray-600 font-medium mb-2 md:mb-0 md:mr-4 text-xs md:text-sm">
        Total {totalItems} items
      </span>

      {/* Pagination Controls */}
      <div className="flex items-center space-x-1 md:space-x-2">
        {/* Previous Button */}
        <button
          className="h-7 w-7 md:h-8 md:w-8 flex items-center justify-center border border-[#D9D9D9] bg-white rounded disabled:opacity-50 hover:bg-gray-100"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <FaChevronLeft className="text-xs md:text-sm" />
        </button>

        {/* Current Page */}
        <span className="h-7 w-7 md:h-8 md:w-8 flex items-center justify-center border rounded border-primary text-xs md:text-sm text-primary bg-white">
          {currentPage}
        </span>

        {/* Page Numbers (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-2">
          <span className="px-2 text-[#D9D9D9]">...</span>
          <span className="h-8 w-8 flex items-center justify-center border rounded bg-white text-sm">
            8
          </span>
          <span className="px-2 text-[#D9D9D9]">...</span>
          <span className="h-8 w-8 flex items-center justify-center border rounded border-[#D9D9D9] bg-white text-sm">
            {totalPages}
          </span>
        </div>

        {/* Next Button */}
        <button
          className="h-7 w-7 md:h-8 md:w-8 flex items-center justify-center border border-[#D9D9D9] bg-white rounded disabled:opacity-50 hover:bg-gray-100"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <FaChevronRight className="text-xs md:text-sm" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
