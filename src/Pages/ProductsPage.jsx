import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, Loader, Header, SearchBar, CategoryList } from "../components";
import { useProducts } from "../context/ProductsContext";
import {
  searchProduct,
  filteredCategory,
  createQueryObject,
  getInitialQuery,
} from "../helper";

const ProductsPage = () => {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    const filteredProducts = filterProducts(products, query);
    setDisplayed(filteredProducts);
  }, [query, products, setSearchParams]);

  const filterProducts = (products, query) => {
    let filtered = searchProduct(products, query.search);
    return filteredCategory(filtered, query.category);
  };

  const handleSearch = () => {
    setQuery((prevQuery) => createQueryObject(prevQuery, { search }));
  };

  const categoryHandler = (e) => {
    const { tagName, innerText: category } = e.target;
    if (tagName !== "LI") return;

    setQuery((prevQuery) => createQueryObject(prevQuery, { category }));
  };

  const renderContent = () => {
    if (displayed.length === 0) {
      return (
        <div className="flex flex-col justify-center items-center h-[calc(100vh-200px)]">
          {products.length > 0 ? (
            <div className="text-center">
              {query.search && query.category && (
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  No Products Found
                </h2>
              )}
            </div>
          ) : (
            <Loader />
          )}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6">
        {displayed.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-1/5 pt-16 lg:pt-20">
            <div className="sticky top-16 lg:top-20 space-y-4">
              <SearchBar
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
              />
              <CategoryList categoryHandler={categoryHandler} />
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-4/5 pt-16 lg:pt-20 mb-3">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
