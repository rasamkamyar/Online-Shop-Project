import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}

const useProducts = () => {
  return useContext(ProductsContext);
};

const useProductDetails = (id) => {
  const products = useContext(ProductsContext);
  const result = products.find((item) => item.id === id);
  return result;
};

export default ProductsProvider;
export { useProducts, useProductDetails };
