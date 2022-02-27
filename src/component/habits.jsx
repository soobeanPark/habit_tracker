import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  handleCountUp = (habit) => {
    this.props.handleIncrement(habit);
  };
  handleCountDown = (habit) => {
    this.props.handleDecrement(habit);
  };
  handleDelete = (habit) => {
    this.props.handleDeletement(habit);
  };
  render() {
    console.log("habits");
    return (
      <>
        {this.props.habit.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            handleIncrement={this.handleCountUp}
            handleDecrement={this.handleCountDown}
            handleDeletement={this.handleDelete}
          />
        ))}
      </>
    );
  }
}

export default Habits;
