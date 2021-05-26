const reducer = (state, action) => {
  if (action.type === "DISPLAY_PRODUCTS") {
    return { ...state, products: action.payload };
  }

  if (action.type === "LOADING") {
    return { ...state, loading: false };
  }

  throw new Error("No matching action type");
};

export default reducer;
