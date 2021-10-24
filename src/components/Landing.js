import React from "react";
import Button from "./Button";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" href="intro.css" />
        <div className="context">
          <h1>Welcome to Gainbridge FieldHouse</h1>
          <span>
            <b>Powered by </b>Spectivity
          </span>
          <form>
            <div className="floating-placeholder">
              <input type="text" name="inputBox" placeholder="Name" />
              {}
            </div>
            <div className="floating-placeholder">
              <input type="text" name="inputBox" placeholder="Seat Number" />
              {}
            </div>
            <div className="floating-placeholder">
              <input type="password" name="inputBox" placeholder="Password" />
              {}
            </div>
          </form>
          {}
        </div>
        <div className="area">
          <ul className="circles">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
        <br />
        <p>by Vaibhava, Sidd, Ishaan, Nimal</p>
        <br />
        {/* <Button>Click</Button> */}
      </div>
    );
  }
}

export default Landing;
