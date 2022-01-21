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

export const App = () => {
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
