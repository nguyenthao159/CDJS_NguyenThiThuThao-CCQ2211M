import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";

const LayoutAdmin = () => {
  return (
    <div>
      
      <section className="maicontent my-3">
      <Outlet />
      </section>
      <Footer/>
    </div>
  );
};

export default LayoutAdmin;