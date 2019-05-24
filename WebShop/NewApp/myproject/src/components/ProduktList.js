import React, { Component } from "react";
import Produkt from "./Produkt";

class ProduktList extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.produkts.map(pro => (
          <Produkt
            key={pro.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default ProduktList;
