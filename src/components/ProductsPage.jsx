import axios from "axios";
import { useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducer";
import { APIProducts } from "../APIs/APIs";
import NotFoundPage from "./404";

const ProductsPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(APIProducts)
      .then((res) => dispatch({ type: "GETPRODUCTS", payload: res.data }))
      .catch((err) => dispatch({ type: "FAILED", payload: err.message }));
  }, []);
  return (
    <div>
      {state.isLoading && <p> loading ...</p>}
      <div>
        {state.data.map((item) => (
          <h1 key={item.id}>{item.title}</h1>
        ))}
      </div>
      <div>{!!state.error && <NotFoundPage /> }</div>
    </div>
  );
};

export default ProductsPage;
