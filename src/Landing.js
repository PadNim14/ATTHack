import React from "react";
import './intro.css'
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
          <br />
          <br />
          <p>by Vaibhava, Sidd, Ishaan, Nimal</p>
          <br />
           {/* <form action="www.google.com">
            <input type="submit" defaultValue="Press" />
          </form> */}
          
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
        <button onclick="window.location.href='www.google.com'">Let's go</button> 
      </div>
    );
  }
}

export default Landing;
