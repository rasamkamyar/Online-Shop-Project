import React from "react";
import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBag } from "react-icons/tb";
import { shortenTitle } from "../helper/helper";

function Card({ data }) {
  const { id, title, price, image } = data;
  return (
    <div className="bg-white shadow-xl border-2 place-items-center rounded-xl p-10 flex justify-evenly">
      <div>
        <img src={image} alt={title} className="w-16" />
      </div>
      <div>
        <h3>{shortenTitle(title)}</h3>
        <p>{price} $</p>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <button>
          <TbShoppingBag />
        </button>
      </div>
    </div>
  );
}

export default Card;
