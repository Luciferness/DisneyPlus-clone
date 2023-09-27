import { Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./components/Login";
import Home from "./components/Home/Home";
import Details from "./components/Details";
import MainLayout from "./MainLayout";

function App() {
  return (
    <div className="App">
      <MainLayout />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
