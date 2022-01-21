import React from "react";

import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const SearchAndAdd = ({ setShowModal, setFormSearchValue }) => {
  return (
    <>
      <Row className="vh-25 bg-light justify-content-center">
        <Col md={9} className="m-auto">
          <Form>
            <Form.Group className="input-group-lg">
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
        <Col md={5} className="d-flex justify-content-end">
          <Button onClick={() => setShowModal(true)}> Create card </Button>
        </Col>
      </Row>
    </>
  );
};
