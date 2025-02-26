import { FiSearch } from 'react-icons/fi';

const Filters = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center items-start justify-between gap-4 py-4 bg-gray-100 rounded-lg">
      <div className="flex flex-col md:flex-row md:items-center flex-wrap gap-3 w-full">
        {/* Search Input */}
        <div className="relative flex items-center border rounded-lg overflow-hidden w-full md:w-auto">
          <input
            type="text"
            placeholder="Lekki"
            className="px-4 py-2 w-full md:w-40 border-none outline-none"
          />
          <button className="px-3 border-l bg-white h-[40px]">
            <FiSearch className="text-gray-500" />
          </button>
        </div>

        {/* Filter Dropdowns */}
        <div className="grid grid-cols-2 md:flex md:flex-row gap-3 w-full md:w-auto">
          <select className="border p-2 px-4 rounded-lg bg-white w-full md:w-auto">
            <option>Property Type</option>
            <option>Apartment</option>
            <option>Land</option>
          </select>
          <select className="border p-2 px-4 rounded-lg bg-white w-full md:w-auto">
            <option>Price</option>
            <option>₦100M - ₦300M</option>
          </select>
          <select className="border p-2 px-4 rounded-lg bg-white w-full md:w-auto">
            <option>Bath</option>
            <option>1+</option>
            <option>2+</option>
          </select>
          <select className="border p-2 px-4 rounded-lg bg-white w-full md:w-auto">
            <option>Bed</option>
            <option>2+</option>
            <option>3+</option>
          </select>
        </div>
      </div>

      {/* Sort Dropdown */}
      <div className="w-full md:w-auto">
        <select className="border p-2 px-4 rounded-lg bg-white font-medium w-full md:w-auto">
          <option>Sort by: Newest</option>
          <option>Oldest</option>
          <option>Price: High to Low</option>
          <option>Price: Low to High</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
