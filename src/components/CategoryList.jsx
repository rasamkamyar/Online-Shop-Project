import { TfiMenuAlt } from "react-icons/tfi";

const CategoryList = ({ categoryHandler }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-1 text-lg font-semibold mb-4">
        <TfiMenuAlt />
        CATEGORIES
      </div>
      <ul className="space-y-3" onClick={categoryHandler}>
        <li className="hover:text-gray-600 cursor-pointer">All</li>
        <li className="hover:text-gray-600 cursor-pointer">Electronics</li>
        <li className="hover:text-gray-600 cursor-pointer">Jewelery</li>
        <li className="hover:text-gray-600 cursor-pointer">Men's Clothing</li>
        <li className="hover:text-gray-600 cursor-pointer">Women's Clothing</li>
      </ul>
    </div>
  );
};

export default CategoryList; 