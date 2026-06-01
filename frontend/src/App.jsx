import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import HomeScreen from "./Screens/Home";
import About from "./Screens/About";
import ContactScreen from "./Screens/Contact";
import ProductsScreen from "./Screens/Products";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<ContactScreen />}></Route>
          <Route path="/products" element={<ProductsScreen />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
