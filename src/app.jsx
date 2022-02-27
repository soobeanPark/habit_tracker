import React, { Component } from "react";
import Habits from "./component/habits";
import Top from "./component/top";
import Input from "./component/input";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "coding", count: 0 },
      { id: 2, name: "swimming", count: 0 },
      { id: 3, name: "running", count: 0 },
    ],
  };
  handleCountUp = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: item.count + 1 };
      } else {
        return item;
      }
    });
    this.setState({ habits });
  };
  handleCountDown = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: item.count <= 0 ? 0 : count };
      } else {
        return item;
      }
    });
    this.setState({ habits });
  };
  handleDelete = (habit) => {
    const allDelete = [...this.state.habits];
    const index = allDelete.indexOf(habit);
    const realDelete = allDelete.filter((item) => item !== allDelete[index]);
    this.setState({ habits: realDelete });
  };
  handleSubmit = (habit) => {
    const plusMenu = [
      ...this.state.habits,
      { id: Date.now(), name: habit, count: 0 },
    ];
    this.setState({ habits: plusMenu });
  };

  handleReset = () => {
    const resetBtn = [...this.state.habits];
    resetBtn.map((item) => (item.count = 0));
    this.setState({ habits: resetBtn });
  };

  render() {
    return (
      <>
        <Top
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Input onAdd={this.handleSubmit} />
        <Habits
          key={this.state.habits.id}
          habit={this.state.habits}
          handleIncrement={this.handleCountUp}
          handleDecrement={this.handleCountDown}
          handleDeletement={this.handleDelete}
        />
        <button onClick={this.handleReset}>Reset</button>
      </>
    );
  }
}

export default App;
