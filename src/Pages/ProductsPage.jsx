import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, Loader, Header, SearchBar, CategoryList } from "../components";
import { useProducts } from "../context/ProductsContext";
import { searchProduct, filteredCategory, createQueryObject } from "../helper";

const ProductsPage = () => {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    let finalProducts = searchProduct(products, query.search);
    finalProducts = filteredCategory(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  const handleSearch = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText;
    if (tagName !== "LI") return;

    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-1/4 lg:w-1/5 pt-20">
            <div className="sticky top-20 space-y-4">
              <SearchBar search={search} setSearch={setSearch} handleSearch={handleSearch} />
              <CategoryList categoryHandler={categoryHandler} />
            </div>
          </div>

          {/* Main Content */}
          <div className="md:w-3/4 lg:w-4/5 pt-20">
            {displayed.length === 0 ? (
              <div className="flex justify-center items-center h-[calc(100vh-200px)]">
                <Loader />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayed.map((product) => (
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
