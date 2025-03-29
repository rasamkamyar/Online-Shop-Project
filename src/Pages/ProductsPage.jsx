import Card from "../components/Card";
import Category from "../components/Category";
import Loader from "../components/Loader";
import Header from "../components/Header";
import { useProducts } from "../context/ProductsContext";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";

const ProductsPage = () => {
  const products = useProducts();
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-1/4 lg:w-1/5 pt-20">
            <div className="sticky top-20 bg-white rounded-lg shadow-md p-4 mb-4">
              <div className="flex items-center gap-2">
                <input 
                  placeholder="Search..." 
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                />
                <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <FaSearch className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="sticky top-20">
              <Category />
            </div>
          </div>

          {/* Main Content */}
          <div className="md:w-3/4 lg:w-4/5 pt-20">
            {products.length === 0 ? (
              <div className="flex justify-center items-center h-[calc(100vh-200px)]">
                <Loader />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Card key={product.id} data={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
