export const initialState = {
  isLoading: true,
  data: [],
  error: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "GETPRODUCTS":
      return {
        isLoading: false,
        data: action.payload,
        error: "",
      };
    case "FAILED":
      return {
        isLoading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
