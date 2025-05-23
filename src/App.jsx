import { Navigate, Route, Routes } from "react-router-dom";
import { CheckoutPage, DetailsPage, NotFoundPage, ProductsPage } from "./Pages";
import ProductsProvider from "./context/ProductsContext";
import CartProvider from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <ProductsProvider>
        <Routes>
          <Route index element={<Navigate to={"/products"} replace />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<DetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route />
        </Routes>
      </ProductsProvider>
    </CartProvider>
  );
};

export default App;
