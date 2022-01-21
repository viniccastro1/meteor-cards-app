import React from "react";
import { useTracker, useSubscribe } from "meteor/react-meteor-data";

import { CardsCollection } from "../api/CardsCollection";

import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

import { PersonCard } from "./PersonCard";

export const SearchResults = ({ formSearchValue }) => {
  const cards = useTracker(() => {
    Meteor.subscribe("cards");
    return CardsCollection.find({
      name: { $regex: formSearchValue, $options: "i" },
    }).fetch();
  });

  return (
    <>
      <Row className="justify-content-center">
        <Col sm={9}>
          <Row>
            {cards.map((e) => (
              <PersonCard key={e._id} id={e._id} name={e.name} url={e.url} />
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};
