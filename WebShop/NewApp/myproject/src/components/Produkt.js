import React, { Component } from "react";

class Produkt extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onIncrement(this.props.pro)}
          className="btn btn-success btn-sm"
        >
          +
        </button>
        <span style={{ fontSize: 17 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrementMinus(this.props.pro)}
          className="btn btn-success btn-sm"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.pro.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.pro.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.pro;
    return value === 0 ? "0" : value;
  }
}

export default Produkt;
