import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Register from "../Page/Register";
import Products from "../Page/Products";
import SingleProduct from "../Page/SingleProduct";
import Deals from "../Page/Deals";
import Contact from "../Page/Contact";
import Cart from "../Page/Cart";
import Checkout from "../Page/Checkout";
import Wishlist from "../Page/Wishlist";
import Admin from "../Page/Admin";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
