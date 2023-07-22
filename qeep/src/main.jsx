import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "./Context/CartContext.jsx";
import { WishlistProvider } from "./Context/WishlistContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <WishlistProvider>
    <CartProvider>
      <BrowserRouter>
        <ChakraProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ChakraProvider>
      </BrowserRouter>
    </CartProvider>
  </WishlistProvider>
);
