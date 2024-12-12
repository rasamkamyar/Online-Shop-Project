import React from "react";
import Add from "../../public/Icons/icons8-add-48.png";
import Details from "../../public/Icons/icons8-details-48.png";

function CardPage(item) {
  return (
    <div className="Cards">
      <img className="Product_Image" src={item.image} />
      <button className="Details_Button" onClick={() => {}}>
        <img src={Details} alt="" />
      </button>
      <h1 key={item.id} className="Product_Title">
        {item.title}
      </h1>
      <p className="Product_Category">Category: {item.category}</p>
      <h3 className="Product_Price">Price: {item.price} $</h3>
      <button className="Add-Button" onClick={() => {}}>
        <img src={Add} alt="" />
      </button>
    </div>
  );
}

export default CardPage;
