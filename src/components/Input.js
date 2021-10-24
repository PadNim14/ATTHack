import React from "react";

class Input extends React.Component {
  render() {
    const { type } = this.props;
    return <input type={type} id="input" />;
  }
}

export default Input;
