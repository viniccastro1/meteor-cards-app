import React from "react";
import { Form } from "react-bootstrap";

// What it does:
// Is the form that is held by the <AddCardModal/>
// Basically passes input information there.

export const AddCardForm = ({ setName, setImgUrl }) => {
  return (
    <Form>
      {/* Asks for NAME input */}
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      {/* Asks for IMAGE URL input */}
      <Form.Group className="mb-3">
        <Form.Label>Image url</Form.Label>
        <Form.Control
          type="text"
          placeholder="example.com/example.png"
          onChange={(e) => setImgUrl(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};
