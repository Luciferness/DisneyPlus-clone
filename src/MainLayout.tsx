import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function MainLayout() {
  return (
    <>
      <NavBar />
      <main className="main-layout">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
