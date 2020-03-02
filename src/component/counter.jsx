import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.hanldeIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <React.Fragment>
          {this.state.tags.length === 0 && <p>Crea dei Tags!</p>}
          {this.renderTags()}
        </React.Fragment>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>Non ci sono tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  hanldeIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;
