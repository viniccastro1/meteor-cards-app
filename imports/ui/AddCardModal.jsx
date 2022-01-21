import React from "react";
import { useState } from "react";

import { Meteor } from "meteor/meteor";

import { CardsCollection } from "../api/CardsCollection";

import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { AddCardForm } from "./AddCardForm";

export const AddCardModal = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const insertToCards = (name, imgUrl) => {
    Meteor.call(
      "cards.insert",
      { name: name, imgUrl: imgUrl },
      (errorResponse) => {
        if (errorResponse) {
          alert(errorResponse.error);
        }
      }
    );
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddCardForm setName={setName} setImgUrl={setImgUrl} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => insertToCards(name, imgUrl)}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
