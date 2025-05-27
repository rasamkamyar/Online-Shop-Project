import React from "react";
import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBag } from "react-icons/tb";
import { MdOutlineDelete } from "react-icons/md";
import { productQuantity, shortenTitle } from "../helper";
import Details from "./Details";
import { useCart } from "../context/CartContext";

const Card = ({ data }) => {
  const { id, title, price, image } = data;
  const [state, dispatch] = useCart();

  const quantity = productQuantity(state, id);

  const clickHandler = (type) => {
    dispatch({
      type,
      payload: data,
    });
  };
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
            className="text-slate-800 hover:text-slate-900 transition-colors"
          >
            <TbListDetails className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2">
            {quantity === 1 && (
              <button
                onClick={() => clickHandler("REMOVE_ITEM")}
                className="flex items-center justify-center w-8 h-8 cursor-pointer bg-rose-100 text-rose-900 rounded-full hover:bg-rose-200 transition-colors shadow-sm hover:shadow-md"
                title="Remove item"
              >
                <MdOutlineDelete className="w-5 h-5" />
              </button>
            )}
            {quantity > 1 && (
              <button
                onClick={() => clickHandler("DECREASE_ITEM")}
                className="flex items-center justify-center w-8 h-8 cursor-pointer bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-colors shadow-sm hover:shadow-md"
                title="Decrease quantity"
              >
                -
              </button>
            )}

            {!!quantity && (
              <span className="min-w-[2rem] text-center font-medium text-slate-800">
                {quantity}
              </span>
            )}

            {quantity === 0 ? (
              <button
                onClick={() => clickHandler("ADD_ITEM")}
                className="flex items-center justify-center w-8 h-8 cursor-pointer bg-emerald-100 text-emerald-900 rounded-full hover:bg-emerald-200 transition-colors shadow-sm hover:shadow-md"
                title="Add to cart"
              >
                <TbShoppingBag className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={() => clickHandler("INCREASE_ITEM")}
                className="flex items-center justify-center w-8 h-8 cursor-pointer bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-colors shadow-sm hover:shadow-md"
                title="Increase quantity"
              >
                +
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
