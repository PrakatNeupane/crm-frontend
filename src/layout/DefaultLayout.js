import React from "react";
import { Header } from "./partials/Header.comp";
import { Footer } from "./partials/Footer.comp";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <div className="header mb-2">
        <Header />
      </div>

      <div className="main">{children}</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
