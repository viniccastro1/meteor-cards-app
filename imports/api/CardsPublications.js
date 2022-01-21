import { Meteor } from "meteor/meteor";
import { CardsCollection } from "./CardsCollection";

// publicates cards collection
Meteor.publish("cards", () => {
  return CardsCollection.find();
});
