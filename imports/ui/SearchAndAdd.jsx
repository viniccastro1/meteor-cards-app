import React from "react";

import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

// What it does:
// Is the component that holds the Search Bar Input
// and the "Create Card" button that opens a modal

export const SearchAndAdd = ({ setShowModal, setFormSearchValue }) => {
  return (
    <>
      <Row className="vh-25 bg-light justify-content-center">
        <Col md={9} className="m-auto">
          <Form>
            <Form.Group className="input-group-lg">
              {/*Passes value to <App/> to be used on <SearchResults/> */}
              <Form.Control
                type="text"
                placeholder="Search for a card..."
                onChange={(e) => setFormSearchValue(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <Row className="justify-content-center my-3">
        <Col md={4} className="h2">
          Results
        </Col>
        {/*Opens <AddCardModal/>'s modal */}
        <Col md={5} className="d-flex justify-content-end">
          <Button onClick={() => setShowModal(true)}> Create card </Button>
        </Col>
      </Row>
    </>
  );
};
