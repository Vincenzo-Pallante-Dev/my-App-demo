import React from "react";

export default class Card extends React.Component {
  render() {
    return (
      <div className="col">
        <div className="card" style={{ width: "18rem", textAlign: "center" }}>
          <div className="p-2">
            Add
            <button
              onClick={() => this.props.onIncrDecr(this.props.card, "+")}
              className="btn btn-primary"
            >
              +
            </button>
            Quant:{" "}
            <span className="badje badje-light">
              {this.props.card.quantità}
            </span>
            <button
              onClick={() => this.props.onIncrDecr(this.props.card, "-")}
              className="btn btn-primary"
            >
              -
            </button>
            Delete
          </div>
          <img
            src={this.props.card.immagine}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 clasNclassNames="card-title">{this.props.card.nome} Roll</h5>
            <p className="card-text">€{this.props.card.prezzo}</p>
            <button
              onClick={() => this.props.onDelete(this.props.card.id)}
              className="btn btn-outline-danger"
            >
              Elimina
            </button>
          </div>
        </div>
      </div>
    );
  }
}
