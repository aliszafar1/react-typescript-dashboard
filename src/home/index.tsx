import React from "react";
import TopMenu from "./topmenu";
import SideMenu from "./sidemenu";
import AppRoutes from "../routes";

const Home = () => {
  return (
    <div className="app">
      <main className="content">
        <TopMenu />
        <SideMenu />
        <AppRoutes />
      </main>
    </div>
  );
};

export default Home;
