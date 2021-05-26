import { ToastContainer } from "react-toastify";
import axios from "axios";

import Products from "./components/Products";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

axios.defaults.baseURL = "https://course-api.com";

function App() {
  return (
    <div className="container">
      <ToastContainer />
      <Products />
    </div>
  );
}

export default App;
