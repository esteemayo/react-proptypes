import { useEffect, useContext, useReducer, createContext } from "react";

import { getProducts } from "./../services/productService";
import reducer from "./reducer";

const initialState = {
  products: [],
  loading: true,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data: products } = await getProducts();
    dispatch({ type: "DISPLAY_PRODUCTS", payload: products });
    dispatch({ type: "LOADING" });
  };

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
