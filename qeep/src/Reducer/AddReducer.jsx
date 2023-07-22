export const initState = {
  brand: "",
  category: "",
  name: "",
  price: "",
  image: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FORM_FIELD": {
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    }
    case "RESET_FORM_FIELDS": {
      return initState;
    }
    default: {
      throw new Error(`invalid action type`);
    }
  }
};
