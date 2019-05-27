import React, { Component } from "react";
import ProduktList from "./components/ProduktList";
import NavBar from "./NavBar";
import ShoppingCart from "./components/ShoppingCart";

class App extends Component {
  state = {
    produkts: [
      { id: 1, name: "Raspberry", price: 14, value: 0 },
      { id: 2, name: "Apple", price: 14, value: 0 },
      { id: 3, name: "Pear", price: 20, value: 0 }
    ],
    produktEdit: false,
    produktInCart: []
  };

  handelIncrement = counter => {
    const produkts = [...this.state.produkts];
    const index = produkts.indexOf(counter);
    produkts[index] = { ...counter };
    produkts[index].value++;
    this.setState({ produkts });
  };

  handelDecrement = counter => {
    if (counter.value > 0) {
      const produkts = [...this.state.produkts];
      const index = produkts.indexOf(counter);
      produkts[index] = { ...counter };
      produkts[index].value--;
      this.setState({ produkts });
    }
  };

  handleReset = () => {
    const produkts = this.state.produkts.map(pro => {
      pro.value = 0;
      return pro;
    });
    this.setState({ produkts });
  };

  handleDelete = produktId => {
    const produkts = this.state.produkts.filter(pro => pro.id !== produktId);
    this.setState({ produkts });
  };

  handleCart = () => {
    const trueValue = true;

    this.setState({ produktEdit: trueValue });
  };

  handleInCart = () => {
    const carts = this.state.produkts.filter(c => c.value > 0).length;
    this.setState({ produktInCart: carts });
  };

  render() {
    console.log("", this.state.produkts.filter(c => c.value > 0));
    if (this.state.produktEdit === true) {
      return <ShoppingCart onProduktInCart={this.state.produktInCart} />;
    }

    return (
      <React.Fragment>
        <NavBar
          totalProduktList={this.state.produkts.filter(c => c.value > 0).length}
          onCart={this.handleCart}
        />
        <main className="container">
          <ProduktList
            produkts={this.state.produkts}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handelIncrement}
            onDecrement={this.handelDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
