import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import React from "react";
import Home from "./components/Home/Home";
import MainLayout from "./MainLayout";
import Details from "./components/Details";

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
