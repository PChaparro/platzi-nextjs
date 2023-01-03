import React from "react";
import Navbar from "@components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <Navbar />
      {children}
      <footer>This is the footer placeholder</footer>
    </div>
  );
};

export default Layout;
