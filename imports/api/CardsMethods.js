import { CardsCollection } from "./CardsCollection";

Meteor.methods({
  "cards.insert"({ name, imgUrl }) {
    if (!name || !imgUrl) {
      throw new Meteor.Error("Please, don't leave any field blank.");
    }

    return CardsCollection.insert({
      name: name,
      url: imgUrl,
    });
  },
  "cards.remove"({ id }) {
    return CardsCollection.remove({
      _id: id,
    });
  },
});
