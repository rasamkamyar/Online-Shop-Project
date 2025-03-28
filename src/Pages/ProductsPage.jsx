import Card from "../components/Card";
import Category from "../components/Category";
import Loader from "../components/Loader";
import Header from "../components/Header";
import { useProducts } from "../context/ProductsContext";

const ProductsPage = () => {
  const products = useProducts();
  console.log(products.length);
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-1/4 lg:w-1/5 pt-20">
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
