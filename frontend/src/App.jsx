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
import OrderScreen from "./Screens/OrderScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import AdminRoute from "./components/AdminRoute";
import OrderListScreen from "./Screens/admin/OrderListScreen";
import ProductListScreen from "./Screens/admin/ProductListScreen";
import ProductEditScreen from "./Screens/admin/ProductEditScreen";
import UserListScreen from "./Screens/admin/UserListScreen";
import UserEditScreen from "./Screens/admin/UserEditScreen";
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
            <Route path="/order/:id" element={<OrderScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Route>
          {/* Admin Routes */}
          <Route path="" element={<AdminRoute />}>
            <Route path="/admin/orderlist" element={<OrderListScreen />} />
            <Route path="/admin/productlist" element={<ProductListScreen />} />
            <Route path="/admin/product/:id/edit" element={<ProductEditScreen />} />
            <Route path="/admin/userlist" element={<UserListScreen />} />
            <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
          </Route>
          ;
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
