import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./organisms/ProductList/ProductList";
import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage/OrderConfirmationPage";
import SellerDashboard from "./pages/SellerDashboard/SellerDashboard";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import NotFound from "./pages/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";

const RoutesMap = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={ProductPage} />
      <Route path="/cart" element={CartPage} />
      <Route path="/checkout" element={CheckoutPage} />
      <Route path="/order-confirmation" element={OrderConfirmationPage} />
      <Route path="/seller-dashboard" element={SellerDashboard} />
      <Route path="/admin-dashboard" element={AdminDashboard} />
      <Route element={<NotFound />} />
    </Routes>
  );
};

export default RoutesMap;
