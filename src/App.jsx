import { Navigate, Route, Routes } from "react-router-dom";
import {
  AboutPage,
  CheckoutPage,
  ContactPage,
  DetailsPage,
  NotFoundPage,
  ProductsPage,
} from "./components";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Navigate to="/products" replace />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/products/:id" element={<DetailsPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
