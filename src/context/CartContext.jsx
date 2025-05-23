import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
const initialData = {};
const reducer = (state, action) => {
  console.log(action);
  
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
