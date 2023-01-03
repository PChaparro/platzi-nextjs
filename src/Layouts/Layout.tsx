import React from "react";
import Navbar from "../components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <footer>This is the footer placeholder</footer>
    </>
  );
};

export default Layout;
