import React, { PureComponent } from "react";

class Habit extends PureComponent {
  handleCountUp = () => {
    this.props.handleIncrement(this.props.habit);
  };
  handleCountDown = () => {
    this.props.handleDecrement(this.props.habit);
  };
  handleDelete = () => {
    this.props.handleDeletement(this.props.habit);
  };
  render() {
    const { name, count } = this.props.habit;

    console.log(`habit ${name}`);
    return (
      <div>
        <span>{name}</span>
        <span>{count}</span>
        <button onClick={this.handleCountUp}>+</button>
        <button onClick={this.handleCountDown}>-</button>
        <button onClick={this.handleDelete}>x</button>
      </div>
    );
  }
}

export default Habit;
