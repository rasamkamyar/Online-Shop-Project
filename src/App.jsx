import { Navigate, Route, Routes } from "react-router-dom";
import { CheckoutPage, DetailsPage, NotFoundPage, ProductsPage } from "./Pages";
import ProductsProvider from "./context/ProductsContext";

const App = () => {
  return (
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
  );
};

export default App;
