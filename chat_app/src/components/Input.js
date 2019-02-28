import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "Chat"
    };
  }

  handleChange = e => {
    e.persist();
    this.setState({ value: e.target.value });
  };

  handleKeyPress = e => {
    e.preventDefault();
    if (e.key === "Enter") {
      console.log("yas");
    }
  };

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.props.showMessage}
        />
      </div>
    );
  }
}

export default Input;
