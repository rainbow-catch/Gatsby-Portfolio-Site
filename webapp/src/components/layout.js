import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";

if (typeof window !== `undefined`) {
  console.log("%c Built & Managed     \n by GATSBOY          \n https://gatsboy.com ", "background: #062484; color: #fff; font-size: normal; padding: 10px;");
}

function Layout({ children }) {
  return (
    <div className="w-full mx-auto flex-col font-lora-regular text-primary" style={{maxWidth:"1440px"}}>
      <div className="fixed w-full bg-white z-50" style={{maxWidth:"1440px"}}>
        <Header />
      </div>

      <main className="flex-1 w-full text-color mx-auto z-10">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
