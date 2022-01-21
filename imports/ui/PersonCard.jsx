import React from "react";
import { Meteor } from "meteor/meteor";

import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { CardsCollection } from "../api/CardsCollection";

export const PersonCard = ({ id, name, url }) => {
  const removeCard = (id) => {
    CardsCollection.remove({ _id: id });
  };

  return (
    <Col md={3}>
      <Card className="my-2 bg-light">
        <Card.Img variant="top" src={url} className="card-fit-img" />
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end">
          <Button
            variant="danger"
            onClick={() => Meteor.call("cards.remove", { id })}
          >
            Delete
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};
