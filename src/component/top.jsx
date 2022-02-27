import React, { PureComponent } from "react";

class Top extends PureComponent {
  render() {
    console.log("top");
    return (
      <div>
        <span>Habit Tracker</span>
        <span>{this.props.totalCount}</span>
      </div>
    );
  }
}

export default Top;
