import React from "react";

class Input extends React.Component {
  state = {
    value: "Chat"
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <input value="Chat" onChange={this.handleChange} />
      </div>
    );
  }
}

export default Input;
