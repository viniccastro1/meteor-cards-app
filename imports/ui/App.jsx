import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { useState } from "react";

import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { SearchResults } from "./SearchResults";
import { Header } from "./Header";
import { SearchAndAdd } from "./SearchAndAdd";
import { AddCardModal } from "./AddCardModal";

// What it does:
//  is the application's GUI core
//. . .  . . .  . . .
// Has state lifted up from:
//  <AddCardModal/> (the modal's visibility state)
//  Which is passed to :
//  <SearchAndAdd/> (where the button to open modal resides)
//
//  <SearchAndAdd/> (the search input's value, that is used for
//  searching).
//  It is passed to:
//  <SearchResults/> to be used to display

export const App = () => {
  //Other components states (lifted up here)
  const [showModal, setShowModal] = useState(false);
  const [formSearchValue, setFormSearchValue] = useState("");

  return (
    <>
      <AddCardModal show={showModal} setShow={setShowModal} />
      <Header />
      <Container fluid>
        <SearchAndAdd
          setShowModal={setShowModal}
          setFormSearchValue={setFormSearchValue}
        />
        <SearchResults formSearchValue={formSearchValue} />
      </Container>
    </>
  );
};
