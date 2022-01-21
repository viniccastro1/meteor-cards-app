import React from "react";

import Navbar from "react-bootstrap/Navbar";

// What it does:
// Make the application less ugly
// Really, just a visual component

export const Header = () => {
  return (
    <>
      <Navbar sticky="top" bg="primary" className="text-white h1 px-3">
        Demo App
      </Navbar>
    </>
  );
};
