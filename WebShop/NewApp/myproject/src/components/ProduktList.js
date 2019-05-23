import React, { Component } from "react";

class ProduktList extends Component {
  render() {
    return (
      <div>
        {this.state.produkts.map(pro => (
          <Produkt key={pro.id} />
        ))}
      </div>
    );
  }
}

export default ProduktList;
