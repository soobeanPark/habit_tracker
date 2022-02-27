import React, { PureComponent } from "react";

class Input extends PureComponent {
  refer = React.createRef();
  inputRef = React.createRef();

  submitFunc = (event) => {
    event.preventDefault();
    const insert = this.refer.current.value;
    insert && this.props.onAdd(insert);
    this.inputRef.current.value = "";
  };
  render() {
    console.log("hinput");
    return (
      <form ref={this.inputRef} onSubmit={this.submitFunc}>
        <input ref={this.refer} placeholder="write your habits"></input>
        <button>submit</button>
      </form>
    );
  }
}

export default Input;
