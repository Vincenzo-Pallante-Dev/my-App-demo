import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

import california from "./images/california.png";
import dragon from "./images/dragon.png";
import dynamite from "./images/dynamite.png";
import philadelphia from "./images/philadelphia.png";
import rainbow from "./images/rainbow.png";
import shrimp from "./images/shrimp.png";

export default class App extends React.Component {
  state = {
    cards: [
      {
        id: 0,
        nome: "California",
        prezzo: 1.99,
        immagine: california,
        quantità: 0,
      },
      { id: 1, nome: "Dragon", prezzo: 3.49, immagine: dragon, quantità: 0 },
      {
        id: 2,
        nome: "Dynamite",
        prezzo: 2.49,
        immagine: dynamite,
        quantità: 0,
      },
      {
        id: 3,
        nome: "Philadelphia",
        prezzo: 0.99,
        immagine: philadelphia,
        quantità: 0,
      },
      { id: 4, nome: "Rainbow", prezzo: 2.99, immagine: rainbow, quantità: 0 },
      { id: 5, nome: "Shrimp", prezzo: 1.49, immagine: shrimp, quantità: 0 },
      {
        id: 6,
        nome: "California",
        prezzo: 1.99,
        immagine: california,
        quantità: 0,
      },
      { id: 7, nome: "Dragon", prezzo: 3.49, immagine: dragon, quantità: 0 },
    ],
  };

  handleDelete = (cardId) => {
    // const updatedCards = this.state.cards.filter((card) => card.id !== cardId);
    // this.setState({ cards: updatedCards });
    //oppure, se alla mia const updateCards gli do lo stesso nome della key cards,
    const cards = this.state.cards.filter((card) => card.id !== cardId);
    //posso scriverla cosi:
    this.setState({ cards });
  };

  //A differenza della funzione "handleDelete", che prende in ingresso (cardId),
  //farò una funzione chiamata "handleIncrement", che prende in ingresso tutta la card (card)
  handleIncrement = (card) => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    cards[id].quantità++;
    this.setState({ cards });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <h1>Cosa desideri ordinare?</h1>
          <hr />
          <div className="row">
            {this.state.cards.map((card) => (
              <Card
                key={card.id}
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                card={card}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}
