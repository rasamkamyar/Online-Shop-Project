import { FaSearch } from "react-icons/fa";

const SearchBar = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-center gap-2">
        <input
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
          value={search}
          placeholder="Search..."
          className="flex-1 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
        />
        <button
          onClick={handleSearch}
          className="flex items-center gap-1 cursor-pointer bg-gray-600 text-white px-3 py-2.5 rounded-md hover:bg-gray-700 transition-colors text-sm"
        >
          <FaSearch className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar; 