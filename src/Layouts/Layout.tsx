import React from "react";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="max-w-screen-md mx-auto px-4">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
