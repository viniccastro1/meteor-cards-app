import React from "react";
import { Meteor } from "meteor/meteor";

import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { CardsCollection } from "../api/CardsCollection";

// What it does:
// Is the card that holds people information (just name and image url path)
// Will be rendered in a list on <SearchResults/>

export const PersonCard = ({ id, name, url }) => {
  //Gets the id from it's parent component, and deletes itself
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
