import React from "react";
import { useProductDetails } from "../context/ProductsContext";
import { useParams, Link } from "react-router-dom";
import Loader from "./Loader";
import { useCart } from "../context/CartContext";

const Details = () => {
  const { id } = useParams();
  const productDetails = useProductDetails(+id);
  const [state, dispatch] = useCart();

  if (!productDetails) return <Loader />;

  const { title, price, description, category, image, rating } = productDetails;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img src={image} alt={title} className="max-h-[400px] object-contain" />
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-3xl font-bold text-emerald-600">${price}</p>
            <p className="text-gray-600">{description}</p>
            <p className="capitalize">Category: {category}</p>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">★</span>
              <span>{rating?.rate} / 5</span>
              <span className="text-gray-500">({rating?.count} reviews)</span>
            </div>
            <Link
              to="/products"
              className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
