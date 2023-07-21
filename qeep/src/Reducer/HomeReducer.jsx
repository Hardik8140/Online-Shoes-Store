export const initState = {
  loading: false,
  products: [],
  err: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "PRODUCTS_LOADING": {
      return {
        loading: true,
        err: false,
        products: [],
      };
    }
    case "PRODUCTS_SUCCESS": {
      return {
        loading: false,
        err: false,
        products: action.payload,
      };
    }
    case "PRODUCTS_ERROR": {
      return {
        loading: false,
        err: true,
        products: [],
      };
    }

    default: {
      throw new Error(`invalid action type`);
    }
  }
};
