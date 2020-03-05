import React, { Component } from "react";
import "./App.css";
import NavBar from "./component/navbar";
import Counters from "./component/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 7 },
      { id: 3, value: 5 },
      { id: 4, value: 9 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => ({ id: c.id, value: 0 }));
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({
      counters
    });
  };

  hanldeIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  hanldeDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value !== 0).length}
        />
        <main className="container">
          <Counters
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.hanldeIncrement}
            onDecrement={this.hanldeDecrement}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
