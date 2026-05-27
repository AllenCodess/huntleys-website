import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router";
import "../App.css";
import HomeScreen from "./Screens/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
