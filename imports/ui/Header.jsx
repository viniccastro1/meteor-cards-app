import React from "react";

import Navbar from "react-bootstrap/Navbar";

export const Header = () => {
  return (
    <>
      <Navbar sticky="top" bg="primary" className="text-white h1 px-3">
        Demo App
      </Navbar>
    </>
  );
};
