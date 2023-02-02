import React from "react";
import { Ad } from "./Ad";
import MultiActionAreaCard from "./Card";
import PrimarySearchAppBar, { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const Home = () => {
  return (
    <div>
      <div className="item1">
        <PrimarySearchAppBar />
      </div>
      <div className="grid-container">
        <div>
          <Sidebar />
        </div>
        <div className="right">
          <div className="ad">
            <Ad />
          </div>
          <div className="cards">
            <div className="card">
              <MultiActionAreaCard />
            </div>
            <div className="card">
              <MultiActionAreaCard />
            </div>
            <div className="card">
              <MultiActionAreaCard />
            </div>
            <div className="card">
              <MultiActionAreaCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
