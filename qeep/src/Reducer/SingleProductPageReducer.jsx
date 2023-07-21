export const initialState = {
  loading: false,
  products: {},
  error: null,
};

export const singleProductReducer = (state, action) => {
  switch (action.type) {
    case "SINGLE_PRODUCT_LOADING":
      return { ...state, loading: true, error: null };
    case "SINGLE_PRODUCT_SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "SINGLE_PRODUCT_ERROR":
      return { ...state, loading: false, error: "Failed to fetch product." };
    default:
      throw new Error("invalid action type");
  }
};
