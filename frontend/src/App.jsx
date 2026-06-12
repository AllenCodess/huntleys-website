import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import HomeScreen from "./Screens/Home";
import About from "./Screens/About";
import ContactScreen from "./Screens/Contact";
import ProductsScreen from "./Screens/Products";
import ProductDetails from "./Screens/ProductDetails";
import CartScreen from "./Screens/CartScreen";
import LoginScreen from "./Screens/Login";
import RegisterScreen from "./Screens/register";
import ShippingScreen from "./Screens/Shipping";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/PrivateRoutes";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          {/* Normal Routes */}
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cart" element={<CartScreen />}></Route>
          <Route path="/contact" element={<ContactScreen />}></Route>
          <Route path="/register" element={<RegisterScreen />}></Route>
          <Route path="/login" element={<LoginScreen />}></Route>
          <Route path="/products" element={<ProductsScreen />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          {/* Private Routes */}
          <Route path="" element={<PrivateRoute />}>
            <Route path="/shipping" element={<ShippingScreen />}></Route>
            <Route path="/payment" element={<PaymentScreen />}></Route>
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
