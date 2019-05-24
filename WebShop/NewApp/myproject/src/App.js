import React, { Component } from "react";
import ProduktList from "./components/ProduktList";
import NavBar from "./NavBar";

class App extends Component {
  state = {
    produkts: [
      { id: 1, name: "Raspberry", price: 14, value: 0 },
      { id: 2, name: "Apple", price: 14, value: 0 },
      { id: 3, name: "Pear", price: 20, value: 0 }
    ]
  };

  handelIncrement = counter => {
    const produkts = [...this.state.produkts];
    const index = produkts.indexOf(counter);
    produkts[index] = { ...counter };
    produkts[index].value++;
    this.setState({ produkts });
  };

  handleIncrementMinus = counter => {
    const produkts = [...this.state.produkts];
    const index = produkts.indexOf(counter);
    produkts[index] = { ...counter };
    produkts[index].value--;
    this.setState({ produkts });
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

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalProduktList={this.state.produkts.filter(c => c.value > 0).length}
        />
        <main className="container">
          <ProduktList
            produkts={this.state.produkts}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handelIncrement}
            onIncrementMinus={this.handleIncrementMinus}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
