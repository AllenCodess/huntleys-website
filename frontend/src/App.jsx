import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import HomeScreen from "./Screens/Home";
import About from "./Screens/About";
import ContactScreen from "./Screens/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<ContactScreen />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
