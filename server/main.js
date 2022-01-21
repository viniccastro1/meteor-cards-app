import { Meteor } from "meteor/meteor";

// Imports not used in this file, but they are used indirectly
import { CardsCollection } from "/imports/api/CardsCollection.js";
import { CardsMethods } from "/imports/api/CardsMethods.js";
import { CardsPublications } from "/imports/api/CardsPublications.js";

// Those are sample cards so the application starts populated
const insertCard = ({ name, url }) => {
  CardsCollection.insert({ name: name, url: url });
};

const cardsSample = [
  {
    name: "Randall Holt",
    url: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    name: "Kristin Johnston",
    url: "https://randomuser.me/api/portraits/women/49.jpg",
  },
  {
    name: "Bertha Thomas",
    url: "https://randomuser.me/api/portraits/women/48.jpg",
  },
  {
    name: "Sean Burtton",
    url: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

Meteor.startup(() => {
  if (CardsCollection.find().count() === 0) {
    cardsSample.map((e) => insertCard({ name: e.name, url: e.url }));
  }
});
