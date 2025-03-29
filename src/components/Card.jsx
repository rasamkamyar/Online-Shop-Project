import React from "react";
import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBag } from "react-icons/tb";
import { shortenTitle } from "../helper/helper";

function Card({ data }) {
  const { id, title, price, image } = data;
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-36 object-contain p-3 group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
      </div>

      <div className="p-3">
        <h3 className="text-base font-semibold text-gray-800 mb-1">
          {shortenTitle(title)}
        </h3>
        <p className="text-lg font-bold text-gray-600 mb-2">${price}</p>

        <div className="flex items-center justify-between">
          <Link
            to={`/products/${id}`}
            className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <TbListDetails className="w-4 h-4" />
            <span className="text-sm">Details</span>
          </Link>

          <button className="flex items-center gap-1 cursor-pointer bg-gray-600 text-white px-3 py-1.5 rounded-md hover:bg-gray-700 transition-colors text-sm">
            <TbShoppingBag className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
