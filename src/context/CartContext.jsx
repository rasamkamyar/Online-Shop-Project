import React, { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../helper";

const CartContext = createContext();
const initialData = {
  selectedItems: [],
  itemCounter: 0,
  total: 0,
  checkout: false,
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      const selectedProduct = state.selectedItems.find(
        (item) => item.id === action.payload.id
      );
      if (!selectedProduct) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkout: false,
      };
    default:
      throw new Error("Invalid Action!");
  }
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialData);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;
export { useCart };
