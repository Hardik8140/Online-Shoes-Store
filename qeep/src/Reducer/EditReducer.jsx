export const initState = {
  brand: "",
  category: "",
  name: "",
  price: "",
  image: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "EDIT_FORM_FIELD": {
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    }
    case "RESET_EDIT_FORM_FIELDS": {
      return initState;
    }
    case "PREFILL_FORM_FIELD": {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      throw new Error(`invalid action type`);
    }
  }
};
