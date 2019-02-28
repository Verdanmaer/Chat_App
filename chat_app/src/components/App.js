import React from "react";
import Input from "./Input";
import Messages from "./Messages";

class App extends React.Component {
  state = {
    message: ""
  };

  showMessage = value => {
    this.setState({ message: value });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Input showMessage={this.showMessage} />
        <Messages message={this.state.message} />
      </div>
    );
  }
}

export default App;
