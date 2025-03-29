import { TfiMenuAlt } from "react-icons/tfi";

const Category = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-1 text-lg font-semibold mb-4">
        <TfiMenuAlt />
        CATEGORIES
      </div>
      <div className="space-y-3">
        <p className="hover:text-gray-600 cursor-pointer">All</p>
        <p className="hover:text-gray-600 cursor-pointer">Electronics</p>
        <p className="hover:text-gray-600 cursor-pointer">Jewelery</p>
        <p className="hover:text-gray-600 cursor-pointer">Men's Clothing</p>
        <p className="hover:text-gray-600 cursor-pointer">Women's Clothing</p>
      </div>
    </div>
  );
};

export default Category;
