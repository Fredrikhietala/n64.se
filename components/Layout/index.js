import React from "react";
import Menu from "../Menu";

const Layout = ({ children }) => {
  return (
    <div className="absolute inset-0 bg-gradient-to-r from-nintendo-yellow via-nintendo-green to-nintendo-blue">
      <Menu />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
