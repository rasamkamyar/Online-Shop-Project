import { Navigate, Route, Routes } from "react-router-dom";
import { CheckoutPage, DetailsPage, NotFoundPage, ProductsPage } from "./Pages";
import ProductsProvider from "./context/ProductsContext";
import CartProvider from "./context/CartContext";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <CartProvider>
      <ProductsProvider>
        <Layout>
          <Routes>
            <Route index element={<Navigate to={"/products"} replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/*" element={<NotFoundPage />} />
            <Route />
          </Routes>
        </Layout>
      </ProductsProvider>
    </CartProvider>
  );
};

export default App;
