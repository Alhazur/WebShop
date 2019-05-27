import React, { Component } from "react";

class ShoppingCart extends Component {
  render() {
    const { produktInCart } = this.props;
    return (
      <tbody className="card-body">
        {produktInCart.length > 0 ? (
          produktInCart.map((pro, index) => (
            <tr key={index} className="table-secondary">
              <td>{pro.price}</td>
              <td>{pro.name}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No produkts</td>
          </tr>
        )}
      </tbody>
    );
  }
}

export default ShoppingCart;
