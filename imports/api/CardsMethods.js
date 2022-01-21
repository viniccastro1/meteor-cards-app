import { CardsCollection } from "./CardsCollection";

Meteor.methods({
  // insert a new document on cards collection
  // throws error if at least of the inputs is blank
  "cards.insert"({ name, imgUrl }) {
    if (!name || !imgUrl) {
      throw new Meteor.Error("Please, don't leave any field blank.");
    }

    return CardsCollection.insert({
      name: name,
      url: imgUrl,
    });
  },

  // removes a document from cards collection
  "cards.remove"({ id }) {
    return CardsCollection.remove({
      _id: id,
    });
  },
});
