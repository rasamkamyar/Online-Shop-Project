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
  switch (action.type) {
    case "ADD_ITEM":
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
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumProducts(newSelectedItems),
      };
    case "INCREASE_ITEM":
      const increasedIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[increasedIndex].quantity++;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    case "DECREASE_ITEM":
      const decreasedIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[decreasedIndex].quantity -=1;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    case "CHECKOUT":
      return {
        ...state,
        selectedItems: [],
        itemCounter: 0,
        total: 0,
        checkout: true,
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
