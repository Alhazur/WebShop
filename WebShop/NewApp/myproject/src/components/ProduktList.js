import React, { Component } from "react";
import Produkt from "./Produkt";

class ProduktList extends Component {
  render() {
    const {
      onReset,
      onDelete,
      onIncrement,
      onIncrementMinus,
      produkts
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {produkts.map((pro, index) => (
          <div key={index}>
            <div>{pro.name}</div>
            <div>{pro.price} kr st</div>
            <Produkt
              onDelete={onDelete}
              onIncrement={onIncrement}
              onIncrementMinus={onIncrementMinus}
              pro={pro}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default ProduktList;
